import { PortableTextBlock } from "next-sanity";
export interface BlogListItem {
  _id: string;
  title: string;
  publishedAt: string;
  intro?: string;
  slug: string;
}

export interface BlogDetail {
  _id: string;
  title: string;
  publishedAt: string;
  intro?: string;
  slug: string;
  body?: PortableTextBlock[]; // Portable Text (can use PortableTextBlock[] type)
  coverImageUrl?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}
