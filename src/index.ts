import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Attribute } from "./components/header/Header";
import { Attribute2 } from "./components/home/Home";
import { data } from "./dataHeader";
import { tSpot } from "./dataSpot";

class AppContainer extends HTMLElement {
  header: Header[] = [];
  home: Home[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    data.forEach((menu) => {
      const menuHeader = this.ownerDocument.createElement(
        "app-header"
      ) as Header;
      // Configura los atributos de Header si es necesario
      menuHeader.setAttribute(Attribute.logo, menu.logo);
      menuHeader.setAttribute(Attribute.regions, menu.regions);
      menuHeader.setAttribute(Attribute.climate, menu.climate);
      menuHeader.setAttribute(Attribute.search, menu.search);
      menuHeader.setAttribute(Attribute.profile, menu.profile);
      // Agrega Header como hijo de AppContainer
      this.header.push(menuHeader);
      // Agrega más contenido o configuración específica de AppContainer aquí
    });

    tSpot.forEach((spot) => {
      const homeSpot = this.ownerDocument.createElement("app-home") as Home;
      // Configura los atributos de Header si es necesario
      homeSpot.setAttribute(Attribute2.img, spot.img);
      homeSpot.setAttribute(Attribute2.title, spot.title);
      homeSpot.setAttribute(Attribute2.spot, spot.spot);
      // Agrega Header como hijo de AppContainer
      this.home.push(homeSpot);
      // Agrega más contenido o configuración específica de AppContainer aquí
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      const link = this.ownerDocument.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", "/src/style.css");

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

      if (main) {
        this.home.forEach((start) => {
          main.appendChild(start);
        });
      }
    }
  }
}

customElements.define("app-container", AppContainer);
