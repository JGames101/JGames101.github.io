am = {
    "v":0.1,
    "version":0.1,
    "e": function(selector) {
        if (document.querySelectorAll(selector).length == 1) {
            return document.querySelector(selector);
        } else {
            return document.querySelectorAll(selector);
        }
    }
}

am.e.prototype = Element.prototype;
am.e.prototype.show = function(){
    this.style.display = "";
    return this;
}
am.e.prototype.hide = function(){
    this.style.display = "none";
    return this;
}
am.e.prototype.addClass = function(newClass) {
    this.className += " " + newClass;
    return this;
}
am.e.prototype.class = function(newClass) {
    this.className == newClass;
    return this;
}