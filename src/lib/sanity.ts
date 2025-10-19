import { createClient } from 'next-sanity'

export const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'cxlpodcl',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: process.env.SANITY_API_VERSION || '2025-10-19',
  useCdn: true,
})