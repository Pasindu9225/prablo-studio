import { type SchemaTypeDefinition } from 'sanity'
import project from './project' // Ensure this path is correct

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, blockContentType, categoryType, postType, authorType],
}