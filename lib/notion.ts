import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export interface NotionProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  upstream_url: string;
  demo_url?: string;
  github?: string;
  cover_image?: string;
  tags: string[];
  images?: ImageData[];
  created_at: string;
  seo?: any;
}

export interface ImageData {
  url: string;
  name: string;
  description: string;
}

export async function getAllProjects(): Promise<NotionProject[]> {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_PROJECTS_DB_ID) {
      console.error('Missing Notion environment variables');
      return [];
    }

    const response = await notion.databases.query({
      database_id: process.env.NOTION_PROJECTS_DB_ID!,
      sorts: [{ property: 'created_at', direction: 'descending' }],
    });

    return response.results.map(page => {
      const properties = (page as any).properties;
      return {
        id: page.id,
        slug: properties.slug?.rich_text?.[0]?.plain_text || '',
        title: properties.title?.title?.[0]?.plain_text || '',
        description: properties.description?.rich_text?.[0]?.plain_text || '',
        upstream_url: properties.upstream_url?.url || '',
        cover_image: properties.cover_image?.files?.[0]?.file?.url || properties.cover_image?.files?.[0]?.external?.url,
        tags: properties.tags?.multi_select?.map((tag: any) => tag.name) || [],
        created_at: properties.created_at?.date?.start || '',
      };
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}



async function fetchImages(ids: string[]): Promise<ImageData[]> {
  const result: ImageData[] = [];

  for (const id of ids) {
    const page = await notion.pages.retrieve({ page_id: id });
    const props = (page as any).properties;

    const fileProp =
      props.Image ||
      props.File ||
      props["Image File"] ||
      props["Image"];

    const file = fileProp?.files?.[0];
    const url = file?.file?.url || file?.external?.url || "";

    const name =
      props.Name?.title?.[0]?.plain_text ||
      props["Image Name"]?.title?.[0]?.plain_text ||
      "";

    const description =
      props.Description?.rich_text?.[0]?.plain_text ||
      props["Image Description"]?.rich_text?.[0]?.plain_text ||
      "";

    result.push({
      url,
      name,
      description,
    });
  }

  return result;
}




export async function getProjectBySlug(slug: string): Promise<NotionProject | null> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_PROJECTS_DB_ID!,
      filter: {
        property: 'slug',
        rich_text: { equals: slug },
      },
    });

    if (response.results.length === 0) return null;

    const page = response.results[0];
    const properties = (page as any).properties;

    const imageIds =
      properties["Image Gallery"]?.relation?.map((rel: any) => rel.id) || [];

    const images = await fetchImages(imageIds);

    const seoTitle = properties["SEO Title"]?.rich_text?.[0]?.plain_text || "";
    const seoBody = properties["SEO Body"]?.rich_text?.[0]?.plain_text || "";
    const seoKeywords = properties["SEO Keywords"]?.rich_text?.[0]?.plain_text || "";
    const seoDescription = properties["SEO Meta Description"]?.rich_text?.[0]?.plain_text || "";
    
    let seoContent: Array<{
      title: string;
      body: string;
      description: string;
      keywords: string[];
    }> = [];
    if (seoTitle || seoBody || seoKeywords || seoDescription) {
      seoContent.push({
        title: seoTitle,
        body: seoBody,
        description: seoDescription,
        keywords: seoKeywords.split(',').map((keyword: string) => keyword.trim()).filter(Boolean)
      });
    }

    return {
      id: page.id,
      slug: properties.slug?.rich_text?.[0]?.plain_text || '',
      title: properties.title?.title?.[0]?.plain_text || '',
      description: properties.description?.rich_text?.[0]?.plain_text || '',
      upstream_url: properties.upstream_url?.url || '',
      demo_url: properties["Demo Video"]?.url,
      github: properties.github?.url,
      cover_image:
        properties.cover_image?.files?.[0]?.file?.url ||
        properties.cover_image?.files?.[0]?.external?.url,
      tags: properties.tags?.multi_select?.map((tag: any) => tag.name) || [],
      created_at: properties.created_at?.date?.start || '',
      images,
      seo: seoContent,
    };
  } catch (error) {
    console.error('Error fetching project by slug:', error);
    return null;
  }
}

