export enum Attribute2 {
    "img" = "img",
    "title" = "title",
    "spot" = "spot",
  }
  
  class Home extends HTMLElement {
    img?: string;
    customTitle?: string;
    spot?: string;
    propName: string | undefined;
  
    static get observedAttributes() {
      return [Attribute2.img, Attribute2.title, Attribute2.spot];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(
      propName: Attribute2,
      _: string | undefined,
      newValue: string | undefined
    ) {
      switch (propName) {
        case Attribute2.img:
          this.img = newValue ? String(newValue) : undefined;
          break;
        case Attribute2.title:
          this.customTitle = newValue ? String(newValue) : undefined;
          break;
        case Attribute2.spot:
          this.spot = newValue ? String(newValue) : undefined;
  
        default:
          this.propName = newValue;
          break;
      }
  
      this.render();
    }
  
    render() {
      const searchImg = this.ownerDocument.createElement("img");
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/home/home.css">
            
            <section>
            <div class="images">
            <img src=${this.img} height="267.57px" weight="200.68px" alt="">
            </div>
  
            <div class="text">
            <h1>${this.title}</h1>
            <h3>${this.spot}</h3>
            </div>
            </section>
            `;
      }
    }
  }
  customElements.define("app-home", Home);
  export default Home;
  