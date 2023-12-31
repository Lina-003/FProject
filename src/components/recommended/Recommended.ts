import { dispatch } from "../../store";
import { navigate, selectSpot } from "../../store/actions";
import { Screens } from "../../types/navigation";
import { loadCss } from "../../utils/styles";
import { Spot } from "../../types/spot";
import styles from "../Home/home.css";

export enum Attribute3 {
  "img" = "img",
  "title" = "title",
  "spot" = "spot",
  "obj" = "obj",
}

class Recommended extends HTMLElement {
  img?: string;
  customTitle?: string;
  spot?: string;
  obj?: string;
  propName: string | undefined;

  static get observedAttributes() {
    return [Attribute3.img, Attribute3.title, Attribute3.spot, Attribute3.obj];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: Attribute3,
    _: string | undefined,
    newValue: string | undefined
  ) {
    switch (propName) {
      case Attribute3.img:
        this.img = newValue ? String(newValue) : undefined;
        break;
      case Attribute3.title:
        this.customTitle = newValue ? String(newValue) : undefined;
        break;
      case Attribute3.spot:
        this.spot = newValue ? String(newValue) : undefined;

      case Attribute3.obj:
        this.obj = newValue ? String(newValue) : undefined;

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
customElements.define("app-recommended", Recommended);
export default Recommended;