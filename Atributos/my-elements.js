
class MyElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      this.title = this.getAttribute('title');
      this.paragraph = this.getAttribute('paragraph');
      this.img = this.getAttribute('img');
    }
  
    getTemplate() {
        const templates = document.createElement('template');
        templates.innerHTML = `
          <section>
              <h2>${this.title}</h2>
              <div>
                <p>${this.paragraph}</p>
                <img src="${this.img}"/>
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