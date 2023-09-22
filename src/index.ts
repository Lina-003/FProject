import Header from "./components/header/Header";
import { Attribute } from "./components/header/Header"; // Asegúrate de importar Attribute desde tu Header
import { data } from "./dataHeader";

class AppContainer extends HTMLElement {
    header: Header[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        

        data.forEach((menu) => {
            const menuHeader = this.ownerDocument.createElement("app-header") as Header;
            // Configura los atributos de Header si es necesario
            menuHeader.setAttribute(Attribute.logo, menu.logo);
            menuHeader.setAttribute(Attribute.regions, menu.regions);
            menuHeader.setAttribute(Attribute.climate, menu.climate);
            menuHeader.setAttribute(Attribute.search, menu.search);
            menuHeader.setAttribute(Attribute.profile, menu.profile);
            // Agrega Header como hijo de AppContainer
            this.header.push(menuHeader)
            // Agrega más contenido o configuración específica de AppContainer aquí
        })
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
           
            `;

            this.header.forEach((nav) => {
                this.shadowRoot?.appendChild(nav);
            })
        }
    }
}

customElements.define("app-container", AppContainer);
