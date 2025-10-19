export interface OurBusiness {
  _id: string;
  _type: 'ourBusinesses';
  linkTitle: string;
  coverImageUrl: string; // resolved from coverImage.asset->url in GROQ
  ctaUrl: string;
  tag?: 'ourBusinesses'; // optional, if you include it in the GROQ projection
}
