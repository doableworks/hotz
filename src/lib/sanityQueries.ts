// Example usage of sanityFetch with tag-based revalidation
import { sanityFetch } from "@/lib/sanityFetch";
import { OurBusiness, TeamLeader, BusinessDetail } from "./types/business";
import { CareerListItem,CareerDetail } from "./types/careers";
import { BlogListItem,BlogDetail } from "./types/blogs";

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

export async function getBusinessDetail(slug: string) {
  return await sanityFetch<BusinessDetail>({
    query: `
      *[_type == "ourBusinesses" && slug.current == $slug][0]{
        _id,
        _type,
        linkTitle,
        description,
        "coverImageUrl": coverImage.asset->url,
        "bannerImageUrl": bannerImage.asset->url,
        projectsTitle,
        projectsDescription,
        projectPoints,
        "businessImages": businessImages[].asset->url,
        getInTouchText,
        ctaUrl,
        "seo": {
          metaTitle,
          metaDescription,
          keywords
        }
      }
    `,
    params: { slug },
    tags: ["ourBusinesses"],
  });
}

export async function getCareersList() {
  return await sanityFetch<CareerListItem[]>({
    query: `
      *[_type == "careers"] | order(positionTitle asc){
        _id,
        positionTitle,
        department,
        type,
        "slug": slug.current
      }
    `,
    tags: ["careers"],
  });
}

export async function getCareerDetail(slug: string) {
  return await sanityFetch<CareerDetail>({
    query: `
      *[_type == "careers" && slug.current == $slug][0]{
        _id,
        positionTitle,
        department,
        type,
        role,
        responsibilities,
        qualifications,
        whyJoinHotz,
        "slug": slug.current
      }
    `,
    params: { slug },
    tags: ["careers"],
  });
}

export async function getBlogList(offset: number = 0) {
  return await sanityFetch<BlogListItem[]>({
    query: `
      *[_type == "post"] | order(publishedAt desc)[$offset...$offset + 10]{
        _id,
        title,
        publishedAt,
        intro,
        "slug": slug.current
      }
    `,
    params: { offset },
    tags: ["post"],
  });
}

export async function getBlogDetail(slug: string) {
  return await sanityFetch<BlogDetail>({
    query: `
      *[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        publishedAt,
        intro,
        body,
        "slug": slug.current,
        "coverImageUrl": mainImage.asset->url,
        "seo": {
          metaTitle,
          metaDescription,
          keywords
        }
      }
    `,
    params: { slug },
    tags: ["post"],
  });
}




