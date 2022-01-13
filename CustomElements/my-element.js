class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  getTemplate() {
      const templates = document.createElement('template');
      templates.innerHTML = `
        <section>
            <h2>Hola mundo!</h2>
            <div>
                <p>Este es un elemento personalizado</p>
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
      this.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("my-element", MyElement);