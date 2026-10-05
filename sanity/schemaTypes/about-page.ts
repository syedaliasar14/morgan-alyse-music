import { DocumentIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const aboutPageSection = defineType({
  name: 'aboutPageSection',
  title: 'About Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'text', title: 'Text', type: 'text', rows: 6, validation: (rule) => rule.required() }),
    defineField({ name: 'image', title: 'Image', type: 'homePageImage' }),
  ],
  preview: {
    select: { title: 'title', media: 'image' },
    prepare({ title, media }) {
      return { title: title || 'Untitled Section', media }
    },
  },
})

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({ name: 'morganSection', title: 'Morgan Alyse Section', type: 'aboutPageSection' }),
    defineField({ name: 'bandSection', title: 'The Band Section', type: 'aboutPageSection' }),
    defineField({
      name: 'additionalSections',
      title: 'Additional Sections',
      type: 'array',
      of: [defineArrayMember({ type: 'aboutPageSection' })],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'About Page' }
    },
  },
})