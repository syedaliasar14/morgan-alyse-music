import { type SchemaTypeDefinition } from 'sanity'

import { aboutPage, aboutPageSection } from './aboutPage'
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
    aboutPage,
    aboutPageSection,
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
