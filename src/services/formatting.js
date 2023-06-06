function createDate(date) {
    if (!date) return '';
    const dateOnly = date.split('T')[0];
    const dateGerman = dateOnly.split('-').reverse().join('.');
    return dateGerman;
}

function createHeading(show) {
    return [show.title, show.location.name, show.location.city].filter(item => item).join(', ');
}

function createBandsList(allBands, selectedBandIds) {
    if (!allBands) return '';
    let bands = [];
    for (let id of selectedBandIds) {
        const band = allBands.filter((band) => band.id === id)[0];
        if (band) bands.push(band);
    }
    return bands;
}

export default {
    createDate,
    createHeading,
    createBandsList
}