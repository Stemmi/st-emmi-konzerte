function createDate(date) {
    return date ? date.split('-').reverse().join('.') : '';
}

function createHeading(show, location) {
    return [show.title, location.name, location.city].filter(item => item).join(', ');
}

export default {
    createDate,
    createHeading
}