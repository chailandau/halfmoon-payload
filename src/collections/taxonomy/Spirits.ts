import { CollectionConfig } from 'payload/types';

import { drinksReference } from '../../fields/drinksReference';
import { order } from '../../fields/order';
import { title, titleAsTitle } from '../../fields/title';
import { requiredField } from '../../utils/functions';

const Spirits: CollectionConfig = {
    slug: 'spirits',
    admin: {
        ...titleAsTitle,
        defaultColumns: ['title', 'order', 'drinks', 'updatedAt']
    },
    access: {
        read: () => true,
    },
    defaultSort: 'order',
    fields: [
        ...title,
        ...requiredField(order),
        ...drinksReference
    ]

};

export default Spirits;
