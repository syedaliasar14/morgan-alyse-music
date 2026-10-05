import { defineQuery } from 'next-sanity'

export const SITE_SETTINGS_QUERY = defineQuery(`*[_id == "siteSettings"][0]{
  title,
  description,
  image,
  instagramUrl,
  spotifyUrl,
  bandcampMerchUrl
}`)
