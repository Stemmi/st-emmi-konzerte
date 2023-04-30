function baseUrl() {
    return "http://localhost:3000";
}

function apiUrl() {
    return baseUrl()+"/api";
}

console.log(apiUrl());

export default {
    baseUrl,
    apiUrl
}