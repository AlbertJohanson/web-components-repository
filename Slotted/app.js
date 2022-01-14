
class MyElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    getTemplate() {
        const templates = document.createElement('template');
        templates.innerHTML = `
          <section>
              <h1>
                <slot name="title"></slot>
              </h1>
              <p>
                <slot name="paragraph"></slot>
              </p>
              <slot></slot>
          </section>
          ${this.getStyles()}
        `;
  
        return templates
    }
  
  
    getStyles() {
  
      return `
          <style>
              ::slotted(span) {
                  font-size: 2.2rem;
                  color: red;
              }

              ::slotted(.text) {
                  color: blue;
              }
          </style>
      `
    }
  
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
  
    connectedCallback() {
      this.render();
    }
  }
  
  customElements.define("my-custom-element", MyElement);