
class MyElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    getTemplate() {
        const templates = document.createElement('template');
        templates.innerHTML = `
          <section>
              <h2>
                <slot name="title"></slot>
              </h2>
              <div>
                <p>
                    <slot name="description"></slot>
                </p>
              </div>
          </section>
          ${this.getStyles()}
        `;
  
        return templates
    }
  
  
    getStyles() {
  
      return `
          <style>
              h2 
              {
                  color: red;
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
  
  customElements.define("my-element", MyElement);