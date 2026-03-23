import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://flipkit.co'
  const lastModified = new Date('2026-03-23')

  const routes = ['', '/the-system', '/the-experience', '/stories', '/begin', '/for-organisations']

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified,
  }))
}
