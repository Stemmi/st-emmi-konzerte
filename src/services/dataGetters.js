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

export default {
    getShows,
    getLocations,
    getUsers,
    getLocationById,
    getUserById
}