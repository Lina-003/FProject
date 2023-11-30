import { loadCss } from "../../utils/styles";
import styles from './Selectedspot.css';

export enum Attribute4 {
  "headerimg" = "headerimg",
  "title" = "title",
  "spot" = "spot",
  "descript" = "descript",
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
  descript?: string;
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
      Attribute4.descript,
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
      case Attribute4.descript:
        this.descript = newValue ? String(newValue) : undefined;
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

  }

  render() {
      if (this.shadowRoot) this.shadowRoot.innerHTML = "";
        loadCss(this, styles);
  
      const section = this.ownerDocument.createElement("section");
      this.shadowRoot?.appendChild(section);
  
      const divImg = this.ownerDocument.createElement("div");
      divImg.setAttribute("class", "images");
      section.appendChild(divImg);
  
      const headerImg = this.ownerDocument.createElement("img");
      headerImg.setAttribute("src", this.headerimg ?? "");
      headerImg.setAttribute("alt", "");
      divImg.appendChild(headerImg);
  
      const divTitle = this.ownerDocument.createElement("div");
      divTitle.setAttribute("class", "star-text");
      section.appendChild(divTitle);
  
      const Title = this.ownerDocument.createElement("h1");
      Title.textContent = this.title;
      divTitle.appendChild(Title);
  
      const divStart = this.ownerDocument.createElement("div");
      divStart.setAttribute("class", "stars");
      divTitle.appendChild(divStart);
  
      for (let i = 0; i < 5; i++) {
        const starImg = this.ownerDocument.createElement("img");
        starImg.setAttribute("src", "/src/components/selectedspot/img/star_icon.png");
        starImg.setAttribute("alt", "");
        divStart.appendChild(starImg);
      }
  
      const pSpot = this.ownerDocument.createElement("h6");
      pSpot.textContent = this.spot ?? "";
      section.appendChild(pSpot);
  
      const descriptionP = this.ownerDocument.createElement("p");
      descriptionP.setAttribute("class", "description");
      descriptionP.textContent = this.descript ?? "";
      section.appendChild(descriptionP);
  
      const divHotel = this.ownerDocument.createElement("div");
      divHotel.setAttribute("class", "establishment");
      section.appendChild(divHotel);
  
      const hotelLabel = this.ownerDocument.createElement("label");
      hotelLabel.setAttribute("for", "establishment");
      divHotel.appendChild(hotelLabel);
  
      const hotelImg = this.ownerDocument.createElement("img");
      hotelImg.setAttribute("src", "/src/components/selectedspot/img/hotel_icon.png");
      hotelImg.setAttribute("alt", "");
      hotelLabel.appendChild(hotelImg);
  
      const hotelSelect = this.ownerDocument.createElement("select");
      divHotel.appendChild(hotelSelect);
  
      const hotelOption1 = this.ownerDocument.createElement("option");
      hotelOption1.setAttribute("value", "");
      hotelOption1.textContent = "Hotel A";
      hotelSelect.appendChild(hotelOption1);
  
      const hotelOption2 = this.ownerDocument.createElement("option");
      hotelOption2.setAttribute("value", "restaurant");
      hotelOption2.textContent = "Hotel B";
      hotelSelect.appendChild(hotelOption2);
  
      const divRestaurant = this.ownerDocument.createElement("div");
      divRestaurant.setAttribute("class", "recommendation");
      section.appendChild(divRestaurant);
  
      const restaurantLabel = this.ownerDocument.createElement("label");
      restaurantLabel.setAttribute("for", "recommendation");
      divRestaurant.appendChild(restaurantLabel);
  
      const recommendationImg = this.ownerDocument.createElement("img");
      recommendationImg.setAttribute("src", "/src/components/selectedspot/img/restaurant_icon.png");
      recommendationImg.setAttribute("alt", "");
      restaurantLabel.appendChild(recommendationImg);
  
      const restaurantSelect = this.ownerDocument.createElement("select");
      divRestaurant.appendChild(restaurantSelect);
  
      const restaurantOption1 = this.ownerDocument.createElement("option");
      restaurantOption1.setAttribute("value", "");
      restaurantOption1.textContent = "Restaurante A";
      restaurantSelect.appendChild(restaurantOption1);
  
      const restaurantOption2 = this.ownerDocument.createElement("option");
      restaurantOption2.setAttribute("value", "restaurant");
      restaurantOption2.textContent = "Restaurante B";
      restaurantSelect.appendChild(restaurantOption2);
    
  }
  
}
customElements.define("app-spot", SelectedSpot);
export default SelectedSpot;
