function createDate(date) {
    if (!date) return '';
    const dateOnly = date.split('T')[0];
    const dateGerman = dateOnly.split('-').reverse().join('.');
    return dateGerman;
}

function createHeading(show) {
    return [show.title, show.location.name, show.location.city].filter(item => item).join(', ');
}

export default {
    createDate,
    createHeading
}