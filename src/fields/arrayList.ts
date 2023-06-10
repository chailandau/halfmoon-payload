import { Field } from 'payload/types';

import { capitalizeWord, truncate } from '../utils/functions';

interface ArrayListProps {
    /** The list item's singular name. If `plural` or `fieldName` are ommitted, this will be used to generate the appropriate names */
    singular: string;
    /** Custom array name. Can be left out if simply adding `s` to `singular` */
    plural?: string;
    /** Custom field name for the list item. Can be left out if same as `singular` */
    fieldName?: string;
    /** Type of list item field. Defaults to `text */
    type?: string;
    /** Maximum number of rows allowed */
    maxRows?: number;

}

export const arrayList = ({
    singular,
    plural,
    fieldName,
    type = 'text',
    maxRows
}: ArrayListProps) => [{
    name: plural || `${singular}s`,
    type: 'array',
    maxRows,
    fields: [{
        name: fieldName || singular,
        type,
        required: true
    }],
    admin: {
        components: {
            RowLabel: ({ data, index }) => {
                const fallbackTitle = `${capitalizeWord(fieldName || singular)} ${String(index).padStart(2, '0')}`;

                const rowTitle = truncate(data?.[fieldName || singular], 20);

                return rowTitle || fallbackTitle;
            }
        }
    }
}] as Field[];
