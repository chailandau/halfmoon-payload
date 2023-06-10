import { Field } from 'payload/types';

import { DrinkCell } from '../custom/DrinkCell';

export const drinksReference: Field[] = [
    {
        name: 'drinks',
        type: 'relationship',
        relationTo: 'drinks',
        hasMany: true,
        access: {
            create: () => true,
            read: () => true,
            update: () => true,
        },
        admin: {
            position: 'sidebar',
            components: {
                Cell: DrinkCell
            }
        }
    },
] as Field[];
