class MyCard extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({ mode: 'open' });


        this.title = this.getAttribute('title');
        this.img = this.getAttribute('img');
        this.description = this.getAttribute('description');
    }

    getTemplate () {
        const templates = document.createElement('template');
        templates.innerHTML = `
            <section>
                <div class="header__container">
                    <h1>
                        ${this.title}
                    </h1>
                    <img src="${this.img}" alt="Nike Zoom">
                </div>
                <div class="content__container">
                    <div class="content__container--header">
                        <h3>
                            <slot name="product__title"></slot>
                        </h3>
                        <p>
                            <slot name="product__category"></slot>
                        </p>
                    </div>
                    <div class="content__container--description">
                        <h2>
                            <slot name="Collection"></slot>
                        </h2>
                        <p>
                           ${this.description}
                        </p>
                    </div>
                </div>
                <div class="content__container--footer">
                    <span>
                        <slot name="product__price"></slot>
                    </span>
                    <button>Buy Now</button>
                </div>
            </section>
            ${this.getStyles()}
        `;

        return templates
    }

    getStyles () {
        return `
            <style>
                :host {
                    --primary-background: #5a6cb2;
                    --primary-grey: #6a7fcf;
                    --secondary-grey: #939394;
                    display: inline-block;
                    width: 100%;
                    min-width: 375px;
                    max-width: 425px;
                }

                section {
                    background-color: #fff;
                }

                section .header__container {
                    position: relative;
                    background-color: var(--primary-background);
                    width: 100%;
                    height: 300px;
                }

                section .header__container h1 {
                    margin: 0;
                    font-size: 8rem;
                    font-weight: bold;
                    font-family: 'Montserrat', sans-serif;
                    color:  var(--primary-grey);
                    margin: 0 10px 0 20px;
                }

                section .header__container img {
                    width: 100%;
                    position: absolute;
                    left: 0;
                    right: 0;
                    margin-left: auto;
                    margin-right: auto;
                    bottom: -70px;
                }

                section .content__container {
                    width: 100%;
                    height: 100%;
                    background-color: #fff;
                }

                section .content__container--header {
                    display: flex;
                    padding-top: 40px;
                }

                section .content__container h3 {
                    font-size: 2rem;
                    margin: 0 0 0 10px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: bold;
                }

                section .content__container p {
                    font-size: 1.3rem;
                    margin-top: 5px;
                    margin-left: 10px;
                    color: var(--secondary-grey);
                    font-family: 'Montserrat', sans-serif;
                    font-weight: bold;
                }

                section .content__container--description h2
                {
                    font-size: 1.5rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    margin-left: 10px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: bold;
                    color: var(--secondary-grey);
                }

                section .content__container--description p
                {
                    font-size: 1rem;
                    margin; 
                    color: #000;
                }

                section .content__container--footer {
                    display: flex;
                    background-color: #fff;
                    padding: 30px 0;
                    width: 100%;
                    justify-content: space-around;
                    postion: absolute;
                    bottom: 0;
                }

                section .content__container--footer button {
                    background-color: var(--primary-background);
                    color: #fff;
                    border: none;
                    font-size: 1.2rem;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: bold;
                    border-radius: 10px;
                    padding: 15px;
                }

                section .content__container--footer span {
                    font-size: 1.2rem;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: bold;
                    margin-top: 20px;
                    color: var(--secondary-grey);
                }

            </style>
    `;    
    }

    render () {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback(){
        this.render();
    }
}


customElements.define('my-card', MyCard);