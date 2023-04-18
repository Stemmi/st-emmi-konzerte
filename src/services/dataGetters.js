import settings from "./settings";
console.log(settings.baseUrl());

async function getBands() {
    const response = await fetch(settings.baseUrl()+"/band");
    const bands = await response.json();
    return bands.results;    
}

async function getLocations() {
    // const response = await fetch("../data/locations.json");
    const response = await fetch(settings.baseUrl()+"/location");
    const locations = await response.json();
    return locations.results;
}

async function getShows() {
    const response = await fetch(settings.baseUrl()+"/show");
    const shows = await response.json();
    return shows.results;
}

async function getUsers() {
    const response = await fetch(settings.baseUrl()+"/user");
    const users = await response.json();
    return users.results;
}

async function getLocationById(id) {
    const response = await fetch(settings.baseUrl()+"/location/" + id);
    const location = await response.json();
    return location;
}

async function getLatestShow() {
    const response = await fetch(settings.baseUrl()+"/show/latest");
    const latestShow = await response.json();
    return latestShow;
}

async function getUserById(id) {
    const response = await fetch(settings.baseUrl()+"/user/" + id);
    const user = await response.json();
    return user;
}

async function getLatestShowCoordinates() {
    const latest = await getLatestShow();
    const location = await getLocationById(latest.locationId);
    return [location.long, location.lat];
}

async function getShowsByLocationId(locationId) { 
    const response = await fetch(settings.baseUrl()+"/show/at/" + locationId);
    const shows = await response.json();
    return shows.results;
}

export default {
    getBands,
    getLocations,
    getShows,
    getUsers,
    getLocationById,
    getUserById,
    getLatestShowCoordinates,
    getShowsByLocationId
}