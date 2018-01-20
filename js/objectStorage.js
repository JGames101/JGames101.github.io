/*

    Local Object Framework by James M
    Adds methods into localStorage and seesionStorage for retrieving and setting objects.
    Current Version: 0.1.

*/

localStorage.__proto__.setObject = function(name, value) {
    return localStorage.setItem(name, JSON.stringify(value))
}

localStorage.__proto__.getObject = function(name) {
    return JSON.parse(localStorage.getItem(name));
}

sessionStorage.__proto__.setObject = function(name, value) {
    return sessionStorage.setItem(name, JSON.stringify(value))
}

sessionStorage.__proto__.getObject = function(name) {
    return JSON.parse(sessionStorage.getItem(name));
}