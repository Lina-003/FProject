import { Header, SelectedSpot, Recommended } from "../../components/index";
import { Attribute } from "../../components/Header/header";
import { Attribute4 } from "../../components/selectedspot/Selectedspot";
import { data } from "../../dataHeader";
import { Attribute3 } from "../../components/recommended/Recommended";
import { rSpots } from "../../dataSpot";

class Place extends HTMLElement {
  header: Header[] = [];
  sSpot: SelectedSpot[] = [];
  recommended: Recommended[] = [];

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

    rSpots.forEach((spots) => {
      const recommSpot = this.ownerDocument.createElement(
        "app-recommended"
      ) as Recommended;

      recommSpot.setAttribute(Attribute3.img, spots.img);
      recommSpot.setAttribute(Attribute3.title, spots.title);
      recommSpot.setAttribute(Attribute3.spot, spots.spot);

      this.recommended.push(recommSpot);
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

      const main = this.ownerDocument.createElement("main");
      main.classList.add("main-container");

      this.header.forEach((nav) => {
        main.appendChild(nav);
      });
      const spot = this.ownerDocument.createElement("app-spot");
      spot.setAttribute(
        Attribute4.headerimg,
        "https://www.eluniversal.com.mx/resizer/7Loc41J5hFF0EhhlDfuOFfrixCE=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/PS36GSZDDNBVDF5HUA2KBNKYL4.jpg"
      );
      spot.setAttribute(Attribute4.title, "Caño Cristales");
      spot.setAttribute(Attribute4.spot, "Sierra de la Macarena, Meta");
      spot.setAttribute(
        Attribute4.description,
        "Caño Cristales es un río de Colombia que está ubicado en la sierra de la Macarena, en el municipio del mismo nombre, en el departamento del Meta."
      );

      main.appendChild(spot);

      const recommendedContainer = this.ownerDocument.createElement("div");
      recommendedContainer.classList.add("recommended-container");

      this.recommended.forEach((start) => {
        recommendedContainer.appendChild(start);
      });

      const titleRecommed = this.ownerDocument.createElement("h6");
      titleRecommed.textContent = "Lugares recomendados";
      titleRecommed.setAttribute("class", "title-recommed");

      main.appendChild(titleRecommed);
      main.appendChild(recommendedContainer);

      this.shadowRoot.appendChild(main);
    }
  }
}

customElements.define("app-place", Place);
