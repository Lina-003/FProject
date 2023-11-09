export enum Attribute {
    "logo" = "logo",
    "regions" = "regions",
    "climate" = "climate",
    "search" = "search",
    "profile" = "profile"
}

class Header extends HTMLElement {

    logo?: string;
    regions?: string;
    climate?: string;
    search?: string;
    profile?: string;
    propName: string | undefined;

    static get observedAttributes() {
        const attrs:  Record<Attribute,null> = {
            logo: null,
            regions: null,
            climate: null,
            search: null,
            profile: null,
        }
        return Object.keys(attrs);
    }
    

    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
    ) {
        switch(propName){
            case Attribute.logo:
                this.logo = newValue ? String(newValue) : undefined;
            break;
            case Attribute.regions:
                this.regions = newValue ? String(newValue) : undefined;
            break;
            case Attribute.climate:
                this.climate = newValue ? String(newValue) : undefined;
            break;
            case Attribute.search:
                this.search = newValue ? String(newValue) : undefined;
            break;
            case Attribute.profile:
                this.profile = newValue ? String(newValue) : undefined;
            break;

            default: 
            this.propName = newValue;
            break;
        }
        
        this.render();
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/header/header.css">
                <section>
                    <div class="header">
                        <div class="left">
                            <img src="${this.logo}" height="40np" alt="">
                            <h3 href=" ">Regiones</h3>
                            <h3 href=" ">Climas</h3>
                        </div>
                        <div class="right">
                            <div class="search-container">
                                <input type="text" id="searchInput" placeholder="Search">
                                <button id="searchButton">Search</button>
                            </div>
                            <img src="${this.profile}" height="30np" alt="">
                        </div>
                    </div>
                </section>
            `;

            const searchButton = this.shadowRoot.querySelector("#searchButton");
            const searchInput = this.shadowRoot.querySelector("#searchInput") as HTMLInputElement; // Conversión de tipo a HTMLInputElement

            if (searchButton) searchButton.addEventListener("click", () => {
                const searchQuery = searchInput.value;
                console.log(searchQuery);
            });
        }
    }
}
customElements.define("app-header", Header);
export default Header;