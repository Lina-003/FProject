import { Header, Home, Recommended } from "../../components/index";
import { Attribute } from "../../components/header/header";
import { Attribute2 } from "../../components/home/home";
import { Attribute3 } from "../../components/recommended/Recommended";
import { Attribute4 } from "../../components/selectedspot/Selectedspot";
import { data } from "../../dataHeader";
import { tSpot, rSpots } from "../../dataSpot";
import { Spot } from "../../types/spot";
import { loadCss } from "../../utils/styles";
import styles from './style.css';

class Dashboard extends HTMLElement {
  header: Header[] = [];
  home: Home[] = [];
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

    tSpot.forEach((spot: Spot) => {
      const homeSpot = this.ownerDocument.createElement("app-home") as Home;
      homeSpot.setAttribute(Attribute2.img, spot.img);
      homeSpot.setAttribute(Attribute2.title, spot.title);
      homeSpot.setAttribute(Attribute2.spot, spot.spot);

      homeSpot.setAttribute(Attribute2.obj, JSON.stringify(spot));
      this.home.push(homeSpot);
    });

    rSpots.forEach((spots) => {
      const recommSpot = this.ownerDocument.createElement(
        "app-recommended"
      ) as Recommended;

      recommSpot.setAttribute(Attribute3.img, spots.img);
      recommSpot.setAttribute(Attribute3.title, spots.title);
      recommSpot.setAttribute(Attribute3.spot, spots.spot);
      recommSpot.setAttribute(Attribute3.obj, JSON.stringify(spots));

      this.recommended.push(recommSpot);
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = "";
    loadCss(this, styles);

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

      let rTitle = this.ownerDocument.createElement("h2");
      this.shadowRoot?.appendChild(rTitle);
      rTitle.setAttribute("class", "card-title");

      let recomm = this.ownerDocument.createElement("Recomm");
      this.shadowRoot?.appendChild(recomm);
      rTitle.textContent = "Recomendados";
      recomm.setAttribute("class", "principal");

      if (recomm) {
        this.recommended.forEach((start) => {
          recomm.appendChild(start);
        });
      }
    }
  }

customElements.define("app-dashboard", Dashboard);