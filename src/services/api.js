import settings from "./settings";

async function getBands() {
    const response = await fetch(settings.apiUrl()+"/bands");
    const bands = await response.json();
    return bands.results;    
}

async function getBandsByShowId(showId) {
    const response = await fetch(settings.apiUrl()+"/shows/"+showId+"/bands");
    const bands = await response.json();
    return bands.results;    
}

async function getLocations() {
    const response = await fetch(settings.apiUrl()+"/locations");
    const locations = await response.json();
    return locations.results;
}

async function getShows() {
    const response = await fetch(settings.apiUrl()+"/shows");
    const shows = await response.json();
    return shows.results;
}

async function getUsers() {
    const response = await fetch(settings.apiUrl()+"/users");
    const users = await response.json();
    return users.results;
}

async function getLocationById(id) {
    const response = await fetch(settings.apiUrl()+"/locations/" + id);
    const location = await response.json();
    return location;
}

async function getShowById(id) {
    const response = await fetch(settings.apiUrl()+"/shows/" + id);
    const show = await response.json();
    return show;
}

async function getUserById(id) {
    const response = await fetch(settings.apiUrl()+"/users/" + id);
    const user = await response.json();
    return user;
}

async function getLatestLocationPosition() {
    const response = await fetch(settings.apiUrl()+"/locations/latest");
    const latestLocation = await response.json();
    return [latestLocation.long, latestLocation.lat];
}

async function getShowsByLocationId(locationId) { 
    const response = await fetch(settings.apiUrl()+"/locations/" + locationId + "/shows");
    const shows = await response.json();
    return shows.results;
}

export default {
    // getBands,
    getBandsByShowId,
    getLocations,
    getShows,
    // getUsers,
    // getLocationById,
    getShowById,
    // getUserById,
    getLatestLocationPosition,
    getShowsByLocationId
}