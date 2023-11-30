import { Header, Home } from "../../components/index";
import { Attribute } from "../../components/Header/header";
import { Attribute2 } from "../../components/Home/home";
import { data } from "../../dataHeader";
import { rSpots } from "../../dataSpot";

class Region extends HTMLElement {
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
      homeSpot.setAttribute(Attribute2.region, spot.region);
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
      link.setAttribute("href", "/src/screens/Region/Regions.css");

      this.shadowRoot.appendChild(link);

      this.header.forEach((nav) => {
        this.shadowRoot?.appendChild(nav);
      });
      function createRegionElement( title: string, description: string, home: HTMLElement[], regionFilter: string
      ): HTMLElement {
        const regionContainer = document.createElement("div");
      
        const regionTitle = document.createElement("h2");
        regionTitle.setAttribute("class", "card-title");
        regionTitle.textContent = title;
      
        const regionDescription = document.createElement("h3");
        regionDescription.setAttribute("class", "card-description");
        regionDescription.textContent = description;
      
        const regionMain = document.createElement("main");
        regionMain.setAttribute("class", "principal");
      
        home
          .filter((spot) => {
            const region = spot.getAttribute(Attribute2.region);
            return region === regionFilter;
          })
          .forEach((start) => {
          const clonedStart = start.cloneNode(true) as HTMLElement;
          regionMain.appendChild(clonedStart);
        });
      
        regionContainer.appendChild(regionTitle);
        regionContainer.appendChild(regionDescription);
        regionContainer.appendChild(regionMain);
      
        return regionContainer;
      }
      
      const mainAmazonas = this.ownerDocument.createElement("main");
      mainAmazonas.appendChild(
        createRegionElement(
          "Región Amazónica",
          "Es la más extensa ya que ocupa un 40% del territorio colombiano. Cuenta con fauna y flora inmensamente variada que resguarda buena parte de la biodiversidad del planeta. Su cultura está atravesada por la herencia ancestral indígena, pues en esta región se encuentran casi 200 resguardos indígenas, donde conviven más de 20 comunidades con distintas familias lingüísticas como Tukano, Arawak, Tikuna, Huitoto y Tupí.",
          this.home,
          "Amazónica"
        )
      );
      this.shadowRoot?.appendChild(mainAmazonas);

      const mainAndina = this.ownerDocument.createElement("main");
      mainAndina.appendChild(
        createRegionElement(
          "Región Andina",
          "Con cerca de 30 millones de habitantes, es la región más poblada y de mayor desarrollo económico del país, donde se ubican los 3 centros urbanos más importantes: Bogotá, Medellín y Cali. Allí se encuentran la cultura paisa, la santandereana, la cundiboyacense, la opita, la vallecaucana y la pastusa, que además está en constante contacto con la región del Pacífico colombiano.",
          this.home,
          "Andina"
        )
      );
      this.shadowRoot?.appendChild(mainAndina);

      const mainCaribe = this.ownerDocument.createElement("main");
      mainCaribe.appendChild(
        createRegionElement(
          "Región Caribe",
          "Históricamente ha sido una de las regiones de Colombia más conectadas con el resto del mundo gracias a los puertos de Barranquilla y Cartagena, que a su vez, son sus dos principales centros urbanos. En esta región surgieron expresiones culturales icónicas como la cumbia, el vallenato, las artesanías del pueblo Zenú y el mundialmente famoso Carnaval de Barranquilla.",
          this.home,
          "Caribe"
        )
      );
      this.shadowRoot?.appendChild(mainCaribe);

      const mainInsular = this.ownerDocument.createElement("main");
      mainInsular.appendChild(
        createRegionElement(
          "Región Insular",
          "Agrupa diferentes islas importantes alejadas del territorio continental colombiano. Esto incluye al de San Bernardo y el de San Andrés, Providencia y Santa Catalina (en el mar Caribe) y las islas Gorgona y Malpelo (en el océano Pacífico). Cuenta con una belleza marina destacable y paisajes paradisíacos con playas de arenas blancas, importantes reservas y santuarios naturales.",
          this.home,
          "Insular"
        )
      );
      this.shadowRoot?.appendChild(mainInsular);

      const mainOri = this.ownerDocument.createElement("main");
      mainOri.appendChild(
        createRegionElement(
          "Región Orinoquía",
          "Con amplias planicies que parecen infinitas, múltiples ríos, ecosistemas únicos y baja densidad poblacional, la región de la Orinoquía hace parte de la gran cuenca del río Orinoco que comparten Colombia y Venezuela.",
          this.home,
          "Orinoquia"
        )
      );
      this.shadowRoot?.appendChild(mainOri);

      const mainPacif = this.ownerDocument.createElement("main");
      mainPacif.appendChild(
        createRegionElement(
          "Región Pacífica",
          "El Pacífico colombiano atraviesa 4 departamentos y está compuesto por largas costas y selvas que conforman uno de los territorios más agrestes y húmedos del continente, donde se concentra gran parte de la biodiversidad del país.",
          this.home,
          "Pacifico"
        )
      );
      this.shadowRoot?.appendChild(mainPacif);
    }
  }
}

customElements.define("app-region", Region);