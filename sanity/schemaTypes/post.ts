import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Artikull',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulli',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Foto Kryesore',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'excerpt',
      title: 'Përmbledhje e shkurtër',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(300),
    }),
    defineField({
      name: 'body',
      title: 'Përmbajtja',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Titull H2', value: 'h2' },
            { title: 'Titull H3', value: 'h3' },
            { title: 'Citat', value: 'blockquote' },
          ],
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Kategoria',
      type: 'string',
      options: {
        list: [
          { title: 'Kontrata Familjare', value: 'familjare' },
          { title: 'Kontrata Comerciale', value: 'comerciale' },
          { title: 'Real Estate', value: 'real-estate' },
          { title: 'Vlerësime Ligjore', value: 'vleresime' },
          { title: 'Ankesa & Peticiione', value: 'ankesa' },
          { title: 'Këshilla Ligjore', value: 'keshilla' },
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data e Publikimit',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      subtitle: 'excerpt',
    },
  },
})
