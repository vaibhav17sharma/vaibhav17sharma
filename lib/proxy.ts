import { NextRequest, NextResponse } from 'next/server';

export async function createProxyResponse(
  request: NextRequest,
  upstreamUrl: string,
  targetPath: string = ''
): Promise<NextResponse> {
  try {
    const url = new URL(request.url);
    const normalizedUpstream = upstreamUrl.startsWith('http') ? upstreamUrl : `https://${upstreamUrl}`;
    
    let proxyUrl: URL;
    if (targetPath) {
      proxyUrl = new URL(`${normalizedUpstream.replace(/\/$/, '')}/${targetPath}`);
    } else {
      proxyUrl = new URL(normalizedUpstream);
    }
    proxyUrl.search = url.search;

    const headers = new Headers();
    request.headers.forEach((value, key) => {
      if (!['host', 'connection', 'upgrade'].includes(key.toLowerCase())) {
        headers.set(key, value);
      }
    });

    let body: ArrayBuffer | undefined;
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      try {
        body = await request.arrayBuffer();
      } catch (e) {}
    }

    const response = await fetch(proxyUrl.toString(), {
      method: request.method,
      headers,
      body,
    });

    const responseHeaders = new Headers();
    response.headers.forEach((value, key) => {
      if (!['content-encoding', 'content-length'].includes(key.toLowerCase())) {
        responseHeaders.set(key, value);
      }
    });

    // Fix content for Vite/React apps
    const contentType = response.headers.get('content-type') || '';
    const requestUrl = new URL(request.url);
    const proxyBasePath = requestUrl.pathname.replace(/\/live.*$/, '/live');
    
    if (contentType.includes('text/html') || contentType.includes('javascript') || contentType.includes('typescript')) {
      const content = await response.text();
      
      const fixedContent = content
        .replace(/src="\//g, `src="${proxyBasePath}/`)
        .replace(/href="\//g, `href="${proxyBasePath}/`)
        .replace(/from "\//g, `from "${proxyBasePath}/`)
        .replace(/import "\//g, `import "${proxyBasePath}/`)
        .replace(/from '\//g, `from '${proxyBasePath}/`)
        .replace(/import '\//g, `import '${proxyBasePath}/`)
        .replace(/import\("\//g, `import("${proxyBasePath}/`)
        .replace(/import\('\//g, `import('${proxyBasePath}/`);
      
      return new NextResponse(fixedContent, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders,
      });
    }

    return new NextResponse(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error('Proxy error:', error);
    return new NextResponse('Proxy Error', { status: 502 });
  }
}