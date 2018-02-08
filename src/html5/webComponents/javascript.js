(function() {
  if ('registerElement' in document
      && 'import' in document.createElement('link')
      && 'content' in document.createElement('template')) {
    // platform is good!
  } else {
    // polyfill the platform!
    var e = document.createElement('script');
    e.src = 'bower_components/webcomponentsjs/webcomponents-lite.min.js';
    document.body.appendChild(e);
  }
})();

class card extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});

    // Create spans
    var wrapper = document.createElement('div');
    wrapper.innerHTML = this.innerHTML;

    var style = document.createElement('style');

    style.textContent = '.wrapper {' +
                            'background-color: #fff;' +
                            'box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);' +
                            'display: flex;' +
                            'flex-direction: column;' +
                            'box-sizing: border-box;' +
                            'border-radius: 2px;' +
                        '}';

    shadow.appendChild(style);
    wrapper.setAttribute('class','wrapper');
    shadow.appendChild(wrapper);
  }
}

// Define the new element
customElements.define('mdc-card', card);

class icon extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});

    // Create spans
    var wrapper = document.createElement('div');
    wrapper.innerHTML = this.innerHTML;

    var style = document.createElement('style');

    style.textContent = '.wrapper {' +
                            'background-color: #fff;' +
                        '}';

    shadow.appendChild(style);
    wrapper.setAttribute('class','wrapper');
    shadow.appendChild(wrapper);
  }
}

// Define the new element
customElements.define('mdc-icon', icon);