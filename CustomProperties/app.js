
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
              <div>
              <p>
                <slot name="paragraph"></slot>
              </p>
              </div>
              <slot></slot>
          </section>
          ${this.getStyles()}
        `;
  
        return templates
    }
  
  
    getStyles() {
  
      return `
          <style>
            :host {
                --primary-color: tomato;
                --secondary-color: salmon;
                --tertiary-color: red;
                --heading-primary: 30px;
                --heading-secondary: 25px;
                display: inline-block;
                width: 100%;
                min-width: 300px;
                max-width: 450px;
            }
            section {
                background-color: var(--primary-color);
            }
            section div {
                background-color: var(--secondary-color);
            }

            h1 {
                font-size: var(--heading-primary);
            }
            p 
            {
                font-size: var(--heading-secondary);
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