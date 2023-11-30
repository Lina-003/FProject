import { dispatch } from "../../store";
import { saveProduct } from "../../store/actions";
import { Product } from "../../types/products"
import { loadCss } from '../../utils/styles';
import style from './Comment.css';

const userInput: Product = {
    comm: ""
}

class Comment extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
        loadCss(this, style);

        const comm = this.ownerDocument.createElement("textarea");
        comm.addEventListener("change", (e: any) => {
          userInput.comm = e.target.value;
        })

        const btn = this.ownerDocument.createElement("button");
        btn.textContent = "Publicar";
        btn.addEventListener("click", async () => {
            console.log(userInput);
            dispatch(await saveProduct(userInput))
        })

        this.shadowRoot?.appendChild(comm);
        this.shadowRoot?.appendChild(btn);
    }
}

export default Comment;
customElements.define("app-comment", Comment);