import { NextRequest } from 'next/server';
import { getProject } from '@/lib/projects';

export async function GET(request: NextRequest, context: { params: { slug: string; path?: string[] } }) {
  return handleRequest(request, context.params);
}

export async function POST(request: NextRequest, context: { params: { slug: string; path?: string[] } }) {
  return handleRequest(request, context.params);
}

async function handleRequest(request: NextRequest, params: { slug: string; path?: string[] }) {
  const project = await getProject(params.slug);
  
  if (!project?.upstream_url) {
    return new Response('Project not found', { status: 404 });
  }

  const upstreamUrl = project.upstream_url.startsWith('http') 
    ? project.upstream_url 
    : `https://${project.upstream_url}`;

  const url = new URL(request.url);
  const targetPath = params.path?.join('/') || '';
  const proxyUrl = targetPath ? `${upstreamUrl}/${targetPath}` : upstreamUrl;
  const finalUrl = `${proxyUrl}${url.search}`;

  const headers = new Headers();
  request.headers.forEach((value, key) => {
    if (!['host', 'origin', 'referer'].includes(key.toLowerCase())) {
      headers.set(key, value);
    }
  });

  // Disable compression to avoid decoding issues
  headers.delete('accept-encoding');
  headers.set('accept-encoding', 'identity');

  console.log('Proxying:', finalUrl);
  
  try {
    const response = await fetch(finalUrl, {
      method: request.method,
      headers,
      body: request.method !== 'GET' && request.method !== 'HEAD' 
        ? await request.arrayBuffer() 
        : undefined,
    });

    console.log('Response:', response.status, response.statusText, 'for', finalUrl);
    
    if (!response.ok && response.status !== 304) {
      console.log('Upstream error for', finalUrl, ':', response.status);
      return new Response(`Upstream error: ${response.status}`, { status: response.status });
    }

    const responseHeaders = new Headers();
    response.headers.forEach((value, key) => {
      // Skip problematic headers
      if (!['content-encoding', 'content-length', 'transfer-encoding'].includes(key.toLowerCase())) {
        responseHeaders.set(key, value);
      }
    });

    // Fix content for Vite apps
    const contentType = response.headers.get('content-type') || '';
    const basePath = `/projects/${params.slug}/live`;
    
    if (contentType.includes('text/html') && (!params.path || params.path.length === 0)) {
      const html = await response.text();
      
      const fixedHtml = html
        .replace(/src="\//g, `src="${basePath}/`)
        .replace(/href="\//g, `href="${basePath}/`)
        .replace(/from "\//g, `from "${basePath}/`)
        .replace(/import "\//g, `import "${basePath}/`)
        .replace(/from '\//g, `from '${basePath}/`)
        .replace(/import '\//g, `import '${basePath}/`)
        .replace(new RegExp(`${basePath}${basePath}`, 'g'), basePath);
      
      return new Response(fixedHtml, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders,
      });
    }
    
    // Fix JavaScript files with dynamic imports and API calls
    if (contentType.includes('javascript') || contentType.includes('typescript')) {
      const js = await response.text();
      
      const fixedJs = js
        .replace(/from "\//g, `from "${basePath}/`)
        .replace(/import "\//g, `import "${basePath}/`)
        .replace(/from '\//g, `from '${basePath}/`)
        .replace(/import '\//g, `import '${basePath}/`)
        .replace(/import\("\//g, `import("${basePath}/`)
        .replace(/import\('\//g, `import('${basePath}/`)
        // Fix API calls specifically
        .replace(/\/api\//g, `${basePath}/api/`)
        .replace(/fetch\("\//g, `fetch("${basePath}/`)
        .replace(/fetch\('\//g, `fetch('${basePath}/`)
        .replace(/axios\.get\("\//g, `axios.get("${basePath}/`)
        .replace(/axios\.post\("\//g, `axios.post("${basePath}/`)
        .replace(/axios\.put\("\//g, `axios.put("${basePath}/`)
        .replace(/axios\.delete\("\//g, `axios.delete("${basePath}/`)
        .replace(/axios\.get\('\//g, `axios.get('${basePath}/`)
        .replace(/axios\.post\('\//g, `axios.post('${basePath}/`)
        .replace(/axios\.put\('\//g, `axios.put('${basePath}/`)
        .replace(/axios\.delete\('\//g, `axios.delete('${basePath}/`)
        .replace(new RegExp(`${basePath}${basePath}`, 'g'), basePath);
      
      return new Response(fixedJs, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders,
      });
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error('Proxy error:', error);
    return new Response('Proxy Error', { status: 502 });
  }
}