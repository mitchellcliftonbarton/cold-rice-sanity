import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from './schemas'
import { myStructure } from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Cold Rice LLC',

  projectId: 'k8v8zbma',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
