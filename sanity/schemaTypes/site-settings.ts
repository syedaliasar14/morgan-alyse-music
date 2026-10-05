import { CogIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image used for social media sharing and search engine previews.',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      validation: (rule) => rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'spotifyUrl',
      title: 'Spotify URL',
      type: 'url',
      validation: (rule) => rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'bandcampMerchUrl',
      title: 'Bandcamp Merch URL',
      type: 'url',
      initialValue: 'https://morganalyse1.bandcamp.com/merch',
      validation: (rule) => rule.uri({ scheme: ['http', 'https'] }),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
