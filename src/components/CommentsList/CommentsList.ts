import { addObserver, appState } from "../../store";
import { loadCss } from '../../utils/styles';
import style from './CommentsList.css';

class CommentsList extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
        loadCss(this, style);
        appState.products.forEach((p) => {
            const containerComList = this.ownerDocument.createElement("section");
            const cContainer = this.ownerDocument.createElement('article');
            const cText = this.ownerDocument.createElement('h3');
            cText.textContent = p.comm;

            cContainer?.appendChild(cText);
            this.shadowRoot?.appendChild(cContainer);      
            this.shadowRoot?.appendChild(containerComList);      
        })
    
    }
}

customElements.define('comment-list', CommentsList);
export default CommentsList;