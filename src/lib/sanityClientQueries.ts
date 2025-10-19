// Client-side queries for browser components
import { sanityClientBrowser } from './sanityClient'
import { OurBusiness } from './types/business'

export async function getBusiness(): Promise<OurBusiness[]> {
  return await sanityClientBrowser.fetch<OurBusiness[]>(`
    *[_type == "ourBusinesses"]{
      _id,
      _type,
      linkTitle,
      "coverImageUrl": coverImage.asset->url,
      ctaUrl
    }
  `)
}
