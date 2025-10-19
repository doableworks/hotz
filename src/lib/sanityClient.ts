// Client-side Sanity client for use in components
import {createClient} from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'cxlpodcl'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-10-19'

export const sanityClientBrowser = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for client-side requests
})
