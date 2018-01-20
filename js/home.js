var box = e('#latestBox');
$.getJSON('/src/latest.json', function(data) {
    var latest = data;
    var i = 0;
    while (i < latest.length) {
        var card = latest[i];
        e('#latestBox').innerHTML += '<div class="mdc-card fixedWidthCard" id="' + card.actions[0].action + '-card' + '"><section class="mdc-card__primary"><h1 class="mdc-card__title mdc-card__title--large">' + card.title + '</h1><h2 class="mdc-card__subtitle">' + card.subtitle + '</h2></section><section class="mdc-card__supporting-text">' + card.body + '</section><section class="mdc-card__actions"><button id="' + card.actions[0].action + '" class="mdc-button latestFeedButton mdc-button--compact mdc-card__action">' + card.actions[0].text + '</button></section></div>';
        i++;
    };
    document.querySelector('.latestFeedButton').addEventListener('click', function(){
        console.log(this);
        openArticle(this.id);
    });
});