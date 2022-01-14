
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
              :host {
                  display: inline-block;
                  width: 100%;
                  min-width: 300px;
                  max-width: 450px;
                  font-size: 1.2rem;
                  background-color: #f5f5f5;

              }

              :host(.blue) {
                  background-color: #00bcd4;
              }

              :host([yellow]) {
                  background-color: #ffeb3b;
              }

              :host([yellow]) h1 {
                  color: red;
              }

              :host([yellow]) p {
                color: red;
            }

              :host-context(article.card) {
                  display: block;
                  max-width: 100%;
              } 

              section {
                  display: flex;
                  text-align: center;
                  flex-direction: column;
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