import { TrolleyIcon } from '@sanity/icons';
import { list } from 'postcss';
import { defineField, defineType } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: TrolleyIcon as any,
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Product Intro',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Product Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'discount',
      title: 'Discount Percentage',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Hot', value: 'hot' },
          { title: 'Sale', value: 'sale' },
        ],
      },
    }),
    defineField({
      name: 'variants',
      title: 'Product Type',
      type: 'string',
      options: {
        list: [
          { title: 'T-Shirt', value: 'tshirt' },
          { title: 'Jacket', value: 'jacket' },
          { title: 'Pants', value: 'pants' },
          { title: 'Hoodie', value: 'hoodie' },
          { title: 'Short', value: 'short' },
          { title: 'Others', value: 'others' },
        ],
      },
    }),
  ],
  preview: {
    select:{
        title: 'name',
        media: 'images',
        subtitle: 'price',
    },
    prepare(selection){
        const{title, subtitle, media} = selection
        const image = media && media[0]
        return{
            title: title,
            subtitle: `$${subtitle}`,
            media: image,
        }
    }
  }
});
