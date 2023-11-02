export enum Attribute4 {
    "img" = "img",
    "title" = "title",
    "spot" = "spot",
    "description" = "description",
    "stars" = "stars",
    "hotel" = "hotel",
    "restaurant" = "restaurant",
    "recommend" = "recommend",
    "comment" = "comment",
}

class SelectedSpot extends HTMLElement {
    img?: string;
    sTitle?: string;
    spot?: string;
    description?: string;
    stars?: string;
    hotel?: string;
    restaurant?: string;
    recommend?: string;
    comment?: string;
    propName: string | undefined;
  
    static get observedAttributes() {
      return [Attribute4.img, Attribute4.title, Attribute4.spot, Attribute4.description, Attribute4.stars, Attribute4.hotel, Attribute4.restaurant, Attribute4.recommend, Attribute4.comment];
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
          this.sTitle = newValue ? String(newValue) : undefined;
          break;
        case Attribute4.spot:
          this.spot = newValue ? String(newValue) : undefined;
        case Attribute4.description:
          this.description = newValue ? String(newValue) : undefined;
          break;
        case Attribute4.stars:
          this.stars = newValue ? String(newValue) : undefined;
          break;
        case Attribute4.hotel:
          this.hotel = newValue ? String(newValue) : undefined;
        case Attribute4.restaurant:
          this.restaurant = newValue ? String(newValue) : undefined;
          break;
        case Attribute4.recommend:
          this.recommend = newValue ? String(newValue) : undefined;
          break;
        case Attribute4.comment:
          this.comment = newValue ? String(newValue) : undefined;
          
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
            <img src=${this.img} height="341px" weight="1167px" alt="">
            </div>
  
            <div class="text">
            <h1>${this.title}</h1>
            <h3>${this.spot}</h3>
            <p>${this.description}</p>
            </div>

            <div class="establishment">
                <!--table-->
            </div>

            <div class="recommendation">
            
            </div>
            </section>
            `;
      }
    }
  }
  customElements.define("app-spot", SelectedSpot);
  export default SelectedSpot;
  