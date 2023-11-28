export enum Attribute3 {
    "img" = "img",
    "title" = "title",
    "spot" = "spot",
  }
  
  class Recommended extends HTMLElement {
    img?: string;
    customTitle?: string;
    spot?: string;
    propName: string | undefined;
  
    static get observedAttributes() {
      return [Attribute3.img, Attribute3.title, Attribute3.spot];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(
      propName: Attribute3,
      _: string | undefined,
      newValue: string | undefined
    ) {
      switch (propName) {
        case Attribute3.img:
          this.img = newValue ? String(newValue) : undefined;
          break;
        case Attribute3.title:
          this.customTitle = newValue ? String(newValue) : undefined;
          break;
        case Attribute3.spot:
          this.spot = newValue ? String(newValue) : undefined;
  
        default:
          this.propName = newValue;
          break;
      }
  
    }
  
    render() {
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
  customElements.define("app-recommended", Recommended);
  export default Recommended;
  