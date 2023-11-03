export enum Attribute4 {
    "img" = "img",
    "title" = "title"
}
  
class Regions extends HTMLElement {
    img?: string;
    customTitle?: string;
    propName: string | undefined;
  
    static get observedAttributes() {
      return [Attribute4.img, Attribute4.title];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(
      propName: Attribute4,
      _: string | undefined,
      newValue: string | undefined
    ) {
      switch (propName) {
        case Attribute4.img:
          this.img = newValue ? String(newValue) : undefined;
          break;
        case Attribute4.title:
          this.customTitle = newValue ? String(newValue) : undefined;
          break;
        default:
          this.propName = newValue;
          break;
      }
  
      this.render();
    }
  
    render() {
      
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/regions/regions.css">
            
            <section>
            <div class="images">
            <img src=${this.img} height="267.57px" weight="200.68px" alt="">
            </div>
  
            <div class="text">
            <h1>${this.title}</h1>
           
            </div>
            </section>
            `;
      }
    }
  }
  customElements.define("app-regions", Regions);
  export default Regions;
  