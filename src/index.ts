import "./screens/dashboard/dashboard"
import "./components/index"
import "./screens/place/place"
import "./screens/Region/Region"
import "./screens/Climate/Climate"
import "./screens/logIn/logIn"
import { Screens } from "./types/navigation";
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

                 case Screens.LOGIN:
                const login = this.ownerDocument.createElement("log-in")
                this.shadowRoot?.appendChild(login)
                    break;    
                /*case Screens.SIGNUP:
                const signUp = this.ownerDocument.createElement("app-signUp")
                this.shadowRoot?.appendChild(signUp)
                    break;*/
                case Screens.DASHBOARD:
                const dashboard = this.ownerDocument.createElement("app-dashboard")
                this.shadowRoot?.appendChild(dashboard)
                    break;
                case Screens.SPOTSELECT:
                const spotSelect = this.ownerDocument.createElement("app-place")
                this.shadowRoot?.appendChild(spotSelect)
                    break;
                case Screens.REGIONS:
                const region = this.ownerDocument.createElement("app-region")
                this.shadowRoot?.appendChild(region)
                    break;
                case Screens.CLIMATE:
                const climate = this.ownerDocument.createElement("app-climate")
                this.shadowRoot?.appendChild(climate)
                    break;

                
            
                default:
                    break;
            }
        }
    }
}

customElements.define('app-container', AppContainer)