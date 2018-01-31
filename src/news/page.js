var box = e('main');
$.getJSON('/src/latest.json', function(data) {
    getLatest(data);
});

async function getLatest(data) {
    var latest = data;
    var i = 0;
    while (i < latest.length) {
        var card = latest[i];
        addElement('<div class="mdc-card" id="' + card.actions[0].action + '-card' + '"><section class="mdc-card__primary"><h1 class="mdc-card__title mdc-card__title--large">' + card.title + '</h1><h2 class="mdc-card__subtitle">' + card.subtitle + '</h2></section><section class="mdc-card__supporting-text">' + card.body + '</section><section class="mdc-card__actions"><button id="' + card.actions[0].action + '" class="mdc-button latestFeedButton mdc-button--compact mdc-card__action" onclick="openArticle(\'' + card.actions[0].action + '\')">' + card.actions[0].text + '</button></section></div>');
        i++;
    };
};

async function addElement(elem) {
    e('main').innerHTML += elem;
};