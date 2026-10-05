import { type SchemaTypeDefinition } from 'sanity'

import { aboutPage, aboutPageSection } from './about-page'
import {
  homePage,
  homePageEvent,
  homePageEvents,
  homePageGallery,
  homePageHero,
  homePageImage,
  homePageMerch,
  homePageMorgan,
} from './home-page'
import { siteSettings } from './site-settings'

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
