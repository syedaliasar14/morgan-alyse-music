import { defineQuery } from 'next-sanity'

const ABOUT_SECTION_PROJECTION = `{
  _key,
  title,
  text,
  image{
    alt,
    asset->{ _id, url }
  }
}`

export const ABOUT_PAGE_QUERY = defineQuery(`*[_id == "aboutPage"][0]{
  "morganSection": morganSection${ABOUT_SECTION_PROJECTION},
  "bandSection": bandSection${ABOUT_SECTION_PROJECTION},
  "additionalSections": additionalSections[]${ABOUT_SECTION_PROJECTION}
}`)