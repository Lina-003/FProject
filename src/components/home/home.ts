import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/places";

export enum Attribute2 {
  "img" = "img",
  "title" = "title",
  "spot" = "spot",
}

class Home extends HTMLElement {
  img?: string;
  customTitle?: string;
  spot?: string;
  propName: string | undefined;

  static get observedAttributes() {
    return [Attribute2.img, Attribute2.title, Attribute2.spot];
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

      default:
        this.propName = newValue;
        break;
    }

    this.render();
  }

  render() {

    if (this.shadowRoot) {
      const link = this.ownerDocument.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", "../src/components/home/home.css");
      this.shadowRoot.appendChild(link);

      const content = this.ownerDocument.createElement("div");
      content.classList.add("container");

      const divImg = this.ownerDocument.createElement("div");
      divImg.classList.add("contentImg");

      const imgContent = this.ownerDocument.createElement("img");
      imgContent.classList.add("class-image");
      imgContent.setAttribute("src", `${this.img}`);
      imgContent.setAttribute("height", "267.57px");
      imgContent.setAttribute("width", "200.68px");
      imgContent.addEventListener("click", ()=>{
        dispatch(navigate(Screens.SPOTSELECT)) })
      divImg.appendChild(imgContent);

      const divText = this.ownerDocument.createElement("div");
      divText.classList.add("contentText");

      const textContent = this.ownerDocument.createElement("h1");
      textContent.classList.add("class-text");
      textContent.innerText = `${this.title}`;

      const textSpot = this.ownerDocument.createElement("h3");
      textSpot.classList.add("class-text");
      textSpot.innerText = `${this.spot}`;
      divText.appendChild(textContent);
      divText.appendChild(textSpot);

      divText.appendChild(divImg);
      content.appendChild(divText);

      this.shadowRoot.appendChild(content);



      /*this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="../src/components/home/home.css">
          
          <section>
          <div class="images">
          <img src=${this.img} height="267.57px" weight="200.68px" alt="">
          </div>
 
          <div class="text">
          <h1>${this.title}</h1>
          <h3>${this.spot}</h3>
          </div>
          </section>
          `;*/
    }
  }
}
customElements.define("app-home", Home);
export default Home;
