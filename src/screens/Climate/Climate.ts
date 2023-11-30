import { Header, Home } from "../../components/index";
import { Attribute } from "../../components/Header/header";
import { Attribute2 } from "../../components/Home/home";
import { data } from "../../dataHeader";
import { rSpots } from "../../dataSpot";

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

    rSpots.forEach((spot) => {
      const homeSpot = this.ownerDocument.createElement("app-home") as Home;
      
      homeSpot.setAttribute(Attribute2.img, spot.img);
      homeSpot.setAttribute(Attribute2.title, spot.title);
      homeSpot.setAttribute(Attribute2.spot, spot.spot);
      homeSpot.setAttribute(Attribute2.climate, spot.climate);
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

      function createRegionElement(
        title: string,
        description: string,
        home: HTMLElement[],
        climateFilter: string
      ): HTMLElement {
        const climateContainer = document.createElement("div");
      
        const climateTitle = document.createElement("h2");
        climateTitle.setAttribute("class", "card-title");
        climateTitle.textContent = title;
      
        const climateDescription = document.createElement("h3");
        climateDescription.setAttribute("class", "card-description");
        climateDescription.textContent = description;
      
        const climateMain = document.createElement("main");
        climateMain.setAttribute("class", "principal");
      
        home
        .filter((spot) => {
          const climate = spot.getAttribute(Attribute2.climate);
          return climate === climateFilter;
        })
        .forEach((start) => {
          const clonedStart = start.cloneNode(true) as HTMLElement;
          climateMain.appendChild(clonedStart);
        });
      
        climateContainer.appendChild(climateTitle);
        climateContainer.appendChild(climateDescription);
        climateContainer.appendChild(climateMain);
      
        return climateContainer;
      }
      
      const calido = this.ownerDocument.createElement("main");
      calido.appendChild(createRegionElement(
          "Clima Cálido",
          "El piso cálido comprende las zonas localizadas entre 0 y 1000 metros de altura sobre el nivel del mar. Su temperatura promedio superior a los 24 grados. En Colombia, este piso abarca cerca de 913.000 Km2, correspondientes al 80% del territorio nacional. Se localiza en las llanuras costeras tanto del Pacifico como del Caribe, en los valles del río Magdalena, Cauca, Cesar, Catatumbo, entre otros, así como también, en las extensas llanuras del Orinoco y la Amazonía.",
          this.home,
          "Calido"
        )
      );
      this.shadowRoot?.appendChild(calido);
      
      const templado = this.ownerDocument.createElement("main");
      templado.appendChild(
        createRegionElement(
          "Clima Templado",
          "Comprende todas las áreas ubicadas entre los 1.000 y 2.000 metros de altura sobre el nivel del mar. Sus temperaturas oscilan entre los 17 y 24 grados. En Colombia este piso cubre 114.000 Km2 correspondientes al 10% del territorio nacional, ubicándose en las zonas bajas de las montañas.",
          this.home,
          "Templado"
        )
      );
      this.shadowRoot?.appendChild(templado);

      const frio = this.ownerDocument.createElement("main");
      frio.appendChild(
        createRegionElement(
          "Clima Frío",
          "Corresponde a las zonas localizadas entre los 2.000 y 3.000 metros de altura. Presenta temperaturas que oscilan entre los 12 y 17 grados. Cubriendo 93.000 Km2, lo que corresponde al 7.9% del territorio nacional. Este piso tiene más diversidad de temperaturas, según su altura. En las noches las temperaturas son un poco más bajas que en el día.",
          this.home,
          "Frio"
        )
      );
      this.shadowRoot?.appendChild(frio);

      const paramo = this.ownerDocument.createElement("main");
      paramo.appendChild(
        createRegionElement(
          "Clima de Páramo",
          "Se presenta en las áreas situadas entre los 3.300 - 3-500 a 4.000 metros de altura. Presenta temperaturas entre los 6 y 12 °C. Abarcan 23.000 Km cuadrados, equivalentes al 2% del territorio nacional. Se localiza en la parte superior de las cordilleras. Cerca del 70% de los ríos del país nacen en páramos Se caracteriza por tener una vegetación baja y plantas como los frailejones y numerosas lagunas",
          this.home,
          "Páramo"
        )
      );
      this.shadowRoot?.appendChild(paramo);
    }
  }
}

customElements.define("app-climate", Climate);
