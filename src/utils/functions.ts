import { Field } from 'payload/types';

export const capitalizeWord = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const requiredField = (fieldConfig: Field[]) => fieldConfig.map((config) => ({
    ...config,
    required: true,
}));

export const truncate = (str: string, maxLength: number) => {

    if (str) {
        if (str.length <= maxLength) {
            return str;
        } else {
            return `${str.slice(0, maxLength)}...`;
        }
    }

};
