async function getBands() {
    const response = await fetch("../data/bands.json");
    const bands = await response.json();
    return bands.results;    
}

async function getLocations() {
    const response = await fetch("../data/locations.json");
    const locations = await response.json();
    return locations.results;
}

async function getShows() {
    const response = await fetch("../data/shows.json");
    const shows = await response.json();
    return shows.results;
}

async function getUsers() {
    const response = await fetch("../data/users.json");
    const users = await response.json();
    return users.results;
}

async function getLocationById(id) {
    const locations = await getLocations();
    if (!locations) return undefined;
    const filtered = locations.filter(loc => loc.id === id);
    if (!filtered.length) return undefined;
    return filtered[0];
  }

async function getUserById(id) {
    const users = await getUsers();
    if (!users) return undefined;
    const filtered = users.filter(user => user.id === id);
    if (!filtered.length) return undefined;
    return filtered[0];
}

async function getLatestShowCoordinates() {
    const shows = await getShows();
    const showsWithValidDate = shows.filter(show => show.date);
    const latest = showsWithValidDate.reduce((prev, curr) => (prev.date > curr.date) ? prev : curr);
    const location = await getLocationById(latest.locationId);
    return [location.long, location.lat];
}

async function getLocationsWithShows() {
    let result = [];
    const locations = await getLocations();
    const shows = await getShows();
    for (let location of locations) {
    const currentShows = shows.filter(show => show.locationId === location.id);
        if (!currentShows.length) continue;
        result.push(
            {
                ...location,
                shows: currentShows
            }
        );
    }
    return result;
}

async function getShowsByLocation(locationId) {
    const shows = await getShows();
    const showsByLocation = shows.filter(show => show.locationId === locationId);
    return showsByLocation;
}

export default {
    getBands,
    getLocations,
    getShows,
    getUsers,
    getLocationById,
    getUserById,
    getLatestShowCoordinates,
    getLocationsWithShows,
    getShowsByLocation
}