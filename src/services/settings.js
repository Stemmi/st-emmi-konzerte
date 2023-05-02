function baseUrl() {
    return "http://localhost:3000";
}

function apiUrl() {
    return baseUrl()+"/api";
}

function limit() {
    return 6;
}

export default {
    baseUrl,
    apiUrl
}