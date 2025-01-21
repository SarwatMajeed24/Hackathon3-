import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import heroslides from './heroSlides'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, heroslides],
}
