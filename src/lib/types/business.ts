export interface OurBusiness {
  _id: string;
  _type: 'ourBusinesses';
  linkTitle: string;
  coverImageUrl: string; // resolved from coverImage.asset->url in GROQ
  ctaUrl: string;
  tag?: 'ourBusinesses'; // optional, if you include it in the GROQ projection
}

export interface TeamLeader {
  _id: string;
  title: string;
  designation: string;
  imageUrl: string; // resolved from image.asset->url in GROQ
  tag?: 'teamLeaders'; // optional, if you include it in the GROQ projection
}

export interface BusinessDetail {
  _id: string;
  _type: 'ourBusinesses';
  linkTitle: string;
  description?: string;
  coverImageUrl?: string;
  bannerImageUrl?: string;
  projectsTitle?: string;
  projectsDescription?: string;
  projectPoints?: string[];
  businessImages?: string[];
  getInTouchText?: string;
  ctaUrl?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  tag?: 'ourBusinesses';
}
