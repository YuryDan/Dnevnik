var TOKEN_KEY = "jwtToken"
var GROUP_ID = ''

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

function setGroupId(id) {
    localStorage.setItem(GROUP_ID, id);
}

function getGroupId() {
    return localStorage.getItem(GROUP_ID);
}

export {
    TOKEN_KEY,
    setJwtToken,
    getJwtToken,
    setGroupId,
    getGroupId,
    removeJwtToken,
    createAuthorizationTokenHeader
};


