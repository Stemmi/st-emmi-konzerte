function createDate(date) {
    if (!date) return '';
    return date.split('-').reverse().join('.');
}

function createHeading(show, location) {
    const title = show.title || '';
    location = location || {};
    let locationString = '';
    if (location.name && location.city) locationString = location.name + ", " + location.city;
    else locationString = location.name || location.city || "";                
    if (title && locationString) return title + ", " + locationString;
    else return title || locationString || "";
}

export default {
    createDate,
    createHeading
}