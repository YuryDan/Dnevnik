var TOKEN_KEY = "jwtToken"

function setJwtToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

function getJwtToken() {
    return localStorage.getItem(TOKEN_KEY);
}

function removeJwtToken() {
    localStorage.removeItem(TOKEN_KEY);
}

function createAuthorizationTokenHeader() {
    var token = getJwtToken();
    if (token) {
        return {
            "Authorization": "Bearer " + token
        };
    } else {
        return {};
    }
}

export {
    TOKEN_KEY,
    setJwtToken,
    getJwtToken,
    removeJwtToken,
    createAuthorizationTokenHeader
};


