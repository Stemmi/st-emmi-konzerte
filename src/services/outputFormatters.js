function createDate(date) {
    if (!date) return '';
    const dateOnly = date.split('T')[0];
    const dateGerman = dateOnly.split('-').reverse().join('.');
    return dateGerman;
}

function createHeading(show, location) {
    if (!location) return show.title;
    else return [show.title, location.name, location.city].filter(item => item).join(', ');
}

export default {
    createDate,
    createHeading
}