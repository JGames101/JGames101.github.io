/*

    aquamarineJS // augmented methods JS // amJS
    Adds new methods and new functions to built-in methods
    Current Version 0.1 (Development)

*/

localStorage.__proto__.setObject = function(name, value) {
    return sessionStorage.setItem(name, JSON.stringify(value))
}

localStorage.__proto__.getObject = function(name) {
    return JSON.parse(sessionStorage.getItem(name));
}

sessionStorage.__proto__.setObject = function(name, value) {
    return localStorage.setItem(name, JSON.stringify(value))
}

sessionStorage.__proto__.getObject = function(name) {
    return JSON.parse(localStorage.getItem(name));
}

Element.prototype.addClass = function(newClass) {
    this.classList.add(newClass);
    return this;
}
Element.prototype.removeClass = function(theClass) {
    this.classList.remove(theClass);
    return this;
}
Element.prototype.class = function(newClass) {
    this.className = newClass;
    return this;
}

am = {
    "v":0.1,
    "version":0.1,
    "title":"amDev",
    "e": function(selector) {
        if (document.querySelectorAll(selector).length == 1) {
            return document.querySelector(selector);
        } else {
            return document.querySelectorAll(selector);
        }
    },
    "http":{
        "get":function(url){
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", url, false );
            xmlHttp.send( null );
            return xmlHttp.responseText;
        },
        "post":function(url){
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "POST", url, false );
            xmlHttp.send( null );
            return xmlHttp.responseText;
        }
    }
}

http = am.http;
am.e.prototype = Element.prototype;
e = am.e;
document.__proto__.e = am.e;
window.am = am;