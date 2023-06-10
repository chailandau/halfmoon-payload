import { CollectionConfig } from 'payload/types';

import { arrayList } from '../../fields/arrayList';
import { description } from '../../fields/description';
import { title, titleAsTitle } from '../../fields/title';

const Drinks: CollectionConfig = {
    slug: 'drinks',
    admin: {
        ...titleAsTitle,
        defaultColumns: ['title', 'updatedAt'],
    },
    access: {
        read: () => true,
    },
    fields: [
        ...title,
        ...description,
        ...arrayList({
            singular: 'ingredient',
        }),
        ...arrayList({
            singular: 'instruction',
            fieldName: 'step',
            type: 'textarea',
        }),
        ...arrayList({
            singular: 'optional',
            plural: 'optional'
        })
    ],

};

export default Drinks;
