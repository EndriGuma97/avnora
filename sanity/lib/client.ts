import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Only create a real client if projectId is configured
export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
})

export async function getPosts() {
  if (!projectId) return []
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      coverImage
    }`
  )
}

export async function getPost(slug: string) {
  if (!projectId) return null
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      category,
      publishedAt,
      coverImage
    }`,
    { slug }
  )
}
