import 'server-only'

import type {QueryParams} from '@sanity/client'
import {createClient} from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || 'cxlpodcl'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || process.env.SANITY_API_VERSION || '2025-10-19'

const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false, // Important for revalidation to work properly
})

const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string
  params?: QueryParams
  tags: string[]
}): Promise<QueryResponse> {
  // Always include 'content' tag for global revalidation + specific tags
  const allTags = ['content', ...tags]
  
  return client.fetch<QueryResponse>(query, params, {
    cache: 'force-cache',
    next: {
      tags: allTags, // for tag-based revalidation
    },
  })
}

// Export the client for direct use if needed
export { client as sanityClient }
