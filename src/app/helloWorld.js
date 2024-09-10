class HelloWorld extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const span = document.createElement('span');
      span.textContent = 'Hello World!';
      span.setAttribute('part', 'span');
      shadow.appendChild(span);
    }
  }
  
customElements.define('hello-world', HelloWorld);