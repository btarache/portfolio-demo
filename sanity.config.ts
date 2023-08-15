import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Next.js Site',

  projectId: '8qiyfvhk',
  dataset: 'production',
  basePath: "/studio", // Lo agregue yo
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
