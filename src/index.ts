import "./screens/dashboard/dashboard"
import "./components/index"
import "./screens/place/place"
import { Screens } from "./types/places";
import { addObserver, appState } from "./store";


class AppContainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;

            switch (appState.screen) {
                case Screens.DASHBOARD:
                const dashboard = this.ownerDocument.createElement("app-dashboard")
                this.shadowRoot?.appendChild(dashboard)
                    break;
                case Screens.SPOTSELECT:
                const spotSelect = this.ownerDocument.createElement("app-place")
                this.shadowRoot?.appendChild(spotSelect)
                    break;
            
                default:
                    break;
            }
        }
    }
}

customElements.define('app-container', AppContainer)