export enum Attribute4 {
  "headerimg" = "headerimg",
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
  headerimg?: string;
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
    return [
      Attribute4.headerimg,
      Attribute4.title,
      Attribute4.spot,
      Attribute4.description,
      Attribute4.stars,
      Attribute4.hotel,
      Attribute4.restaurant,
      Attribute4.recommend,
      Attribute4.comment,
    ];
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
      case Attribute4.headerimg:
        this.headerimg = newValue ? String(newValue) : undefined;
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
            <link rel="stylesheet" href="../src/components/selectedspot/Selectedspot.css">
            
            <section>
            <div class="images">
            <img src=${this.headerimg} alt="">
            </div>
  
            <div class="star-text">
            <h1>${this.title}</h1>
            <div class="stars">
              <img src="/src/components/selectedspot/img/star_icon.png" alt="">
              <img src="/src/components/selectedspot/img/star_icon.png" alt="">
              <img src="/src/components/selectedspot/img/star_icon.png" alt="">
              <img src="/src/components/selectedspot/img/star_icon.png" alt="">
              <img src="/src/components/selectedspot/img/star_icon.png" alt="">
            </div>
            </div>

            <h6>${this.spot}</h6>
            
            <p class="description">${this.description}</p>

            <div class="establishment">
              <label for="establishment">
                <img src="/src/components/selectedspot/img/hotel_icon.png" alt="">
              </label>
                <select>
                    <option value="">Hoteles</option>
                    <option value="restaurant">Restaurant</option>
                </select>
            </div>

            <div class="recommendation">
            <label for="recommendation">
                <img src="/src/components/selectedspot/img/restaurant_icon.png" alt="">
              </label>
                <select>
                    <option value="">Hoteles</option>
                    <option value="restaurant">Restaurant</option>
                </select>
            </div>
            </section>
            `;
    }
  }
}
customElements.define("app-spot", SelectedSpot);
export default SelectedSpot;
