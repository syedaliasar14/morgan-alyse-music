import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

const imageFields = [
  defineField({
    name: 'alt',
    title: 'Alternative Text',
    type: 'string',
    validation: (rule) => rule.warning('Alt text is important for accessibility'),
  }),
]

export const homePageImage = defineType({
  name: 'homePageImage',
  title: 'Image',
  type: 'image',
  options: { hotspot: true },
  fields: imageFields,
})

export const homePageHero = defineType({
  name: 'homePageHero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Listen Now',
    }),
    defineField({ name: 'albumImage', title: 'Album Image', type: 'homePageImage' }),
  ],
})

export const homePageMorgan = defineType({
  name: 'homePageMorgan',
  title: 'Morgan Alyse Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'text', title: 'Text', type: 'text', rows: 4 }),
    defineField({ name: 'image', title: 'Image', type: 'homePageImage' }),
    defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
  ],
})

export const homePageEvent = defineType({
  name: 'homePageEvent',
  title: 'Event',
  type: 'object',
  fields: [
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'link',
      title: 'More Info Link',
      type: 'url',
      validation: (rule) => rule.uri({ scheme: ['http', 'https'] }),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'eventDate' },
    prepare({ title, subtitle }) {
      return { title: title || 'Untitled Event', subtitle }
    },
  },
})

export const homePageEvents = defineType({
  name: 'homePageEvents',
  title: 'Events Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'hidePastEvents',
      title: 'Automatically hide past events',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [defineArrayMember({ type: 'homePageEvent' })],
    }),
  ],
})

export const homePageMerch = defineType({
  name: 'homePageMerch',
  title: 'Merch Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
  ],
})

export const homePageGallery = defineType({
  name: 'homePageGallery',
  title: 'Gallery Section',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [defineArrayMember({ type: 'homePageImage' })],
    }),
  ],
})

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({ name: 'hero', title: 'Hero Section', type: 'homePageHero' }),
    defineField({ name: 'morgan', title: 'Morgan Alyse Section', type: 'homePageMorgan' }),
    defineField({ name: 'events', title: 'Events Section', type: 'homePageEvents' }),
    defineField({ name: 'merch', title: 'Merch Section', type: 'homePageMerch' }),
    defineField({ name: 'gallery', title: 'Gallery Section', type: 'homePageGallery' }),
  ],
  preview: {
    prepare() {
      return { title: 'Home Page' }
    },
  },
})
