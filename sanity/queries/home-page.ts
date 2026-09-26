import { defineQuery } from 'next-sanity'

export const HOME_PAGE_QUERY = defineQuery(`*[_id == "homePage"][0]{
  title,
  subtitle,
  albumImage{
    asset->{
      _id,
      url,
      metadata{ lqip, dimensions{ width, height } }
    },
    alt,
    hotspot,
    crop
  }
}`)
