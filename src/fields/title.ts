import { Field } from 'payload/types';

export const title = [
    {
        name: 'title',
        type: 'text',
        required: true
    }
] as Field[];

export const titleAsTitle = {
    useAsTitle: 'title',
};
