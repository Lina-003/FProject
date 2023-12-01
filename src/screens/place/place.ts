import { Header, Recommended } from "../../components/index";
import { Attribute } from "../../components/header/header";
import { Attribute4 } from "../../components/selectedspot/Selectedspot";
import { data } from "../../dataHeader";
import { Attribute3 } from "../../components/recommended/Recommended";
import { rSpots } from "../../dataSpot";
import { addObserver, appState } from "../../store";
import { loadCss } from "../../utils/styles";
import styles from './place.css';

class Place extends HTMLElement {
  header: Header[] = [];
  recommended: Recommended[] = [];
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);

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

      const main = this.ownerDocument.createElement("main");
      main.classList.add("main-container");

      this.header.forEach((nav) => {
        main.appendChild(nav);
      });

      if (appState.selectedSpot) {
        const spot = this.ownerDocument.createElement("app-spot");
        spot.setAttribute(Attribute4.headerimg, appState.selectedSpot.img);
        spot.setAttribute(Attribute4.title, appState.selectedSpot.title);
        spot.setAttribute(Attribute4.spot, appState.selectedSpot.spot);
        spot.setAttribute(
          Attribute4.descript,
          appState.selectedSpot.description
        );

        main.appendChild(spot);
      }

      const dForm = this.ownerDocument.createElement("div");
      dForm.classList.add("form-container");
      const form = this.ownerDocument.createElement("app-comment");
      dForm.appendChild(form);

      const dList = this.ownerDocument.createElement("div");
      dList.classList.add("comment-container");
      const commentList = this.ownerDocument.createElement("comment-list");
      dList.appendChild(commentList);

      const recommendedContainer = this.ownerDocument.createElement("div");
      recommendedContainer.classList.add("recommended-container");

      this.recommended.forEach((start) => {
        recommendedContainer.appendChild(start);
      });

      const titleRecommed = this.ownerDocument.createElement("h6");
      titleRecommed.textContent = "Lugares recomendados";
      titleRecommed.setAttribute("class", "title-recommed");

      main.appendChild(dForm);
      main.appendChild(dList);
      main.appendChild(titleRecommed);
      main.appendChild(recommendedContainer);

      this.shadowRoot?.appendChild(main);
    }
  }

customElements.define("app-place", Place);