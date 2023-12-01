import { addObserver, appState } from "../../store";
import { loadCss } from "../../utils/styles";
import style from "./CommentsList.css";

class CommentsList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = "";
    loadCss(this, style);
    appState.products.forEach((p) => {
      const imgProfile = this.ownerDocument.createElement("img");
      imgProfile.classList.add("class-profile");
      imgProfile.setAttribute("src", "/src/components/imgheader/profile.png");
      imgProfile.setAttribute("height", "35np");

      const contentText = this.ownerDocument.createElement("div")
      contentText.classList.add("content-text")

      const cContainer = this.ownerDocument.createElement("article");
      const cText = this.ownerDocument.createElement("p");
      cText.textContent = p.comm;

      cContainer?.appendChild(imgProfile)
      cContainer?.appendChild(contentText);
      contentText?.appendChild(cText);
      this.shadowRoot?.appendChild(cContainer);
    });
  }
}

customElements.define("comment-list", CommentsList);
export default CommentsList;
