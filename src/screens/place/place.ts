import { Header, SelectedSpot} from "../../components/index";
import { Attribute } from "../../components/header/Header";
import { Attribute4 } from "../../components/selectedspot/Selectedspot";
import { data } from "../../dataHeader";
import { tSpot, rSpots } from "../../dataSpot";

class Place extends HTMLElement {
  header: Header[] = [];
  sSpot: SelectedSpot[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
   

    data.forEach((menu) => {
      const menuHeader = this.ownerDocument.createElement(
        "app-header"
      ) as Header;
      
      menuHeader.setAttribute(Attribute.logo, menu.logo);
      menuHeader.setAttribute(Attribute.regions, menu.regions);
      menuHeader.setAttribute(Attribute.climate, menu.climate);
      menuHeader.setAttribute(Attribute.search, menu.search);
      menuHeader.setAttribute(Attribute.profile, menu.profile);
      
      this.header.push(menuHeader);
      
    });

  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      const link = this.ownerDocument.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", "/src/screens/place/place.css");

      this.shadowRoot.appendChild(link);

      this.header.forEach((nav) => {
        this.shadowRoot?.appendChild(nav);
      });

      
      let mainTitle = this.ownerDocument.createElement("h2");
      this.shadowRoot?.appendChild(mainTitle);
      mainTitle.setAttribute("class", "card-title");

      let main = this.ownerDocument.createElement("main");
      this.shadowRoot?.appendChild(main);
      mainTitle.textContent = "Ya visitados";
      main.setAttribute("class", "principal");

      let rTitle = this.ownerDocument.createElement("h2");
      this.shadowRoot?.appendChild(rTitle);
      rTitle.setAttribute("class", "card-title");

      let recomm = this.ownerDocument.createElement("Recomm");
      this.shadowRoot?.appendChild(recomm);
      rTitle.textContent = "Recomendados";
      recomm.setAttribute("class", "principal");
    }
  }
}

customElements.define("app-place", Place);
