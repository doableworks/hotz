import { PortableTextBlock } from "next-sanity";

export interface BlogListItem {
  _id: string;
  title: string;
  date: string;
  intro?: string;
  imageUrl?: string;
  slug: string;
}

export interface BlogDetail {
  _id: string;
  title: string;
  date: string;
  intro?: string;
  slug: string;
  content?: PortableTextBlock[]; // Portable Text content from the schema
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}
