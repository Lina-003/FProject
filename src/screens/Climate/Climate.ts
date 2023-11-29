import { Header, Home } from "../../components/index";
import { Attribute } from "../../components/Header/header";
import { Attribute2 } from "../../components/Home/home";
import { data } from "../../dataHeader";
import { tSpot } from "../../dataSpot";

class Climate extends HTMLElement {
  header: Header[] = [];
  home: Home[] = [];

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
      menuHeader.setAttribute(Attribute.profile, menu.profile);
      
      this.header.push(menuHeader);
      
    });

    tSpot.forEach((spot) => {
      const homeSpot = this.ownerDocument.createElement("app-home") as Home;
      
      homeSpot.setAttribute(Attribute2.img, spot.img);
      homeSpot.setAttribute(Attribute2.title, spot.title);
      homeSpot.setAttribute(Attribute2.spot, spot.spot);
      this.home.push(homeSpot);
      
    });

  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      const link = this.ownerDocument.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", "/src/screens/Climate/Climate.css");

      this.shadowRoot.appendChild(link);

      this.header.forEach((nav) => {
        this.shadowRoot?.appendChild(nav);
      });

      function createRegionElement(title: string, description: string, home: HTMLElement[]): HTMLElement {
        const climateContainer = document.createElement("div");
      
        const climateTitle = document.createElement("h2");
        climateTitle.setAttribute("class", "card-title");
        climateTitle.textContent = title;
      
        const climateDescription = document.createElement("h3");
        climateDescription.setAttribute("class", "card-description");
        climateDescription.textContent = description;
      
        const climateMain = document.createElement("main");
        climateMain.setAttribute("class", "principal");
      
        home.forEach((start) => {
          const clonedStart = start.cloneNode(true) as HTMLElement;
          climateMain.appendChild(clonedStart);
        });
      
        climateContainer.appendChild(climateTitle);
        climateContainer.appendChild(climateDescription);
        climateContainer.appendChild(climateMain);
      
        return climateContainer;
      }
      
      const tropical = this.ownerDocument.createElement("main");
      tropical.appendChild(createRegionElement(
        "Clima Tropical Húmedo", "Tiene variaciones de humedad y altas temperaturas. La región del Pacífico es la más representativa de este tipo de clima.", 
        this.home));
      this.shadowRoot?.appendChild(tropical);

      const seco = this.ownerDocument.createElement("main");
      seco.appendChild(createRegionElement(
        "Clima Seco", "Predominante en los desiertos de altas temperaturas. La Península de La Guajira es un buen ejemplo de este clima en Colombia.", 
      this.home));
      this.shadowRoot?.appendChild(seco);
      
      const templado = this.ownerDocument.createElement("main");
      templado.appendChild(createRegionElement(
        "Clima Templado", "Húmedo en invierno y seco en verano, como en la ciudad de Medellín.", 
      this.home));
      this.shadowRoot?.appendChild(templado);

      const montaña = this.ownerDocument.createElement("main");
      montaña.appendChild(createRegionElement(
        "Clima de Montaña", "varía desde el clima frío como en Bogotá (2.600 m.s.n.m.) y de ahí a nieves perpetuas como en la Sierra Nevada de Santa Marta o el Nevado el Cocuy en Boyacá.", 
      this.home));
      this.shadowRoot?.appendChild(montaña);
      
    }
  }
}

customElements.define("app-climate", Climate);
