var currentPage = 1;
function nextPage() {
    currentPage++;
    var newContent = document.createElement("div");
    newContent.className = "new-content";
    var h1 = '<h1 class="mdc-typography--display3">Content Body ' + currentPage + '</h1>'
    var button = '<button class="mdc-button mdc-button--raised" onclick="nextPage()" data-mdc-auto-init="MDCRipple">Next Button</button>';
    newContent.innerHTML = h1 + button;
    var overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.append(newContent);
    document.body.append(overlay);
    var mainContent = document.querySelector('.main-content');
    var overlay = document.querySelector('.overlay');
    var newContent = document.querySelector('.new-content');
    setTimeout(function(){document.body.removeChild(mainContent);document.body.removeChild(overlay);newContent.className = "main-content";},250);
}