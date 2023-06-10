import path from 'path';

import { buildConfig } from 'payload/config';
import { CollectionConfig } from 'payload/types';

import Users from './collections/admin/Users';
import Drinks from './collections/content/Drinks';
import Spirits from './collections/taxonomy/Spirits';
import { createGroup } from './utils/createGroups';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
    css: path.resolve(__dirname, './custom/styles.scss'),
  },
  collections: [
    ...createGroup([Drinks], 'Content') as CollectionConfig[],
    ...createGroup([Spirits], 'Taxonomy') as CollectionConfig[],
    ...createGroup([Users], 'Admin') as CollectionConfig[],
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
