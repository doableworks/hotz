// Example usage of sanityFetch with tag-based revalidation
import { sanityFetch } from "@/lib/sanityFetch";
import { OurBusiness } from "./types/business";

export async function getBusiness() {
  return await sanityFetch<OurBusiness[]>({
    query: `*[_type == "ourBusinesses"]{
  _id,
  _type,
  linkTitle,
  "coverImageUrl": coverImage.asset->url,
  ctaUrl
}
`,
    tags: ["ourBusinesses"],
  });
}
