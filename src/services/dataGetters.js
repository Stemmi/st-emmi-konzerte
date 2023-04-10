async function getShows() {
    const response = await fetch("../data/shows.json");
    const result = await response.json();
    return result.shows;
}

async function getLocations() {
    const response = await fetch("../data/locations.json");
    const result = await response.json();
    return result.locations;    
}

async function getUsers() {
    const response = await fetch("../data/users.json");
    const result = await response.json();
    return result.users;
}

function getLocationById(id, locations) {
    if (!locations) return undefined;
    const filtered = locations.filter(loc => loc.id === id);
    if (!filtered.length) return undefined;
    return filtered[0];
  }

function getUserById(id, users) {
    if (!users) return undefined;
    const filtered = users.filter(user => user.id === id);
    if (!filtered.length) return undefined;
    return filtered[0];
}

function getLatestShow(shows) {
    const showsWithValidDate = shows.filter(show => show.date);
    const latest = showsWithValidDate.reduce((prev, curr) => (prev.date > curr.date) ? prev : curr);
    return latest;
}

function getLocationsWithShows(locations, shows) {
    let result = [];
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

export default {
    getShows,
    getLocations,
    getUsers,
    getLocationById,
    getUserById,
    getLatestShow,
    getLocationsWithShows
}