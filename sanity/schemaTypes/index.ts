import { type SchemaTypeDefinition } from 'sanity'

import {
  homePage,
  homePageEvent,
  homePageEvents,
  homePageGallery,
  homePageHero,
  homePageImage,
  homePageMerch,
  homePageMorgan,
} from './homePage'
import { siteSettings } from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    homePage,
    homePageHero,
    homePageMorgan,
    homePageEvent,
    homePageEvents,
    homePageMerch,
    homePageImage,
    homePageGallery,
  ],
}
