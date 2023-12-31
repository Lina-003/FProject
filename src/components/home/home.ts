import { dispatch } from "../../store";
import { navigate, selectSpot } from "../../store/actions";
import { Screens } from "../../types/navigation";
import { Spot } from "../../types/spot";
import { loadCss } from "../../utils/styles";
import styles from "./home.css";

export enum Attribute2 {
  "img" = "img",
  "title" = "title",
  "spot" = "spot",
  "region" = "region",
  "climate" = "climate",
  "obj" = "obj",
}

class Home extends HTMLElement {
  img?: string;
  customTitle?: string;
  spot?: string;
  obj?: string;
  propName: string | undefined;
  static get observedAttributes() {
    return [Attribute2.img, Attribute2.title, Attribute2.spot, Attribute2.obj];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: Attribute2,
    _: string | undefined,
    newValue: string | undefined
  ) {
    switch (propName) {
      case Attribute2.img:
        this.img = newValue ? String(newValue) : undefined;
        break;
      case Attribute2.title:
        this.customTitle = newValue ? String(newValue) : undefined;
        break;
      case Attribute2.spot:
        this.spot = newValue ? String(newValue) : undefined;

      case Attribute2.obj:
        this.obj = newValue ? String(newValue) : undefined;
        break;

      default:
        this.propName = newValue;
        break;
    }
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = "";
    loadCss(this, styles);

    const container = this.ownerDocument.createElement("section");
    container.classList.add("class-styles");

    const imgContent = this.ownerDocument.createElement("img");
    imgContent.classList.add("class-image");
    imgContent.setAttribute("src", `${this.img}`);
    imgContent.setAttribute("height", "267.57px");
    imgContent.setAttribute("width", "200.68px");
    imgContent.addEventListener("click", () => {
      if (this.obj) {
        let newObj = JSON.parse(this.obj) as Spot;
        dispatch(selectSpot(newObj));
        dispatch(navigate(Screens.SPOTSELECT));
      }
    });

    const divText = this.ownerDocument.createElement("h1");
    divText.classList.add("tittle-spot");
    divText.innerText = `${this.title}`;

    const textSpot = this.ownerDocument.createElement("h3");
    textSpot.innerText = `${this.spot}`;

    this.shadowRoot?.appendChild(imgContent);
    this.shadowRoot?.appendChild(divText);
    this.shadowRoot?.appendChild(textSpot);
    this.shadowRoot?.appendChild(container);
  }
}
customElements.define("app-home", Home);
export default Home;
