import { makeSchema } from 'nexus';
import { join } from 'path'

export const schmea = makeSchema({
  types: [],
  outputs: {
    schema: join(process.cwd(), "schema.graphql"),
    typegen: join(process.cwd(), "nexus-typegen.ts")
  }
});
