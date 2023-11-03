import "./screens/dashboard/dashboard"
import "./components/index"
import "./screens/place/place"
import "./screens/logIn/logIn"


class AppContainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const place = this.ownerDocument.createElement('app-dashboard');
        this.shadowRoot?.appendChild(place);
    }
}

customElements.define('app-container', AppContainer)