const formatSlug = (str: string) => str
    .toLowerCase()
    // Replace underscores, non-alphanumeric characters, and consecutive dashes with a single dash
    .replaceAll(/[_\W]+|-+/g, '-')
    // Remove dashes from the beginning and end of the slug
    .replaceAll(/^-+|-+$/g, '');

export const generateSlug = (titleField: string, slugField = 'slug') => ({ data }) => {
    const emptySlug = typeof data[slugField] === 'undefined' || data[slugField] === '';
    const generatedSlug = emptySlug ? formatSlug(data[titleField]) : formatSlug(data[slugField]);

    if (!(titleField in data)) {
        return data;
    }

    return {
        ...data,
        [slugField]: generatedSlug
    };
};
