// Example usage of sanityFetch with tag-based revalidation
import { sanityFetch } from "@/lib/sanityFetch";
import { OurBusiness, TeamLeader } from "./types/business";

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

export async function getStats() {
  return await sanityFetch<{ stat: string; title: string }[]>({
    query: `*[_type == "stats"]{
  stat,
  title
}
`,
    tags: ["stats"],
  });
}

export async function getTeamLeaders() {
  return await sanityFetch<TeamLeader[]>({
    query: `*[_type=='teamLeaders']{
  _id,
  title,
  "imageUrl" : image.asset->url,
  designation
}`,
    tags: ["teamLeaders"],
  });
}
