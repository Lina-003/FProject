export enum Attribute {
    "logo" = "logo",
    "regions" = "regions",
    "climate" = "climate",
    "search" = "search",
    "profile" = "profile"
}

class Header extends HTMLElement {

    logo?: string = Attribute.logo;
    regions?: string = Attribute.regions;
    climate?: string = Attribute.climate;
    search?: string = Attribute.search;
    profile?: string = Attribute.profile;
    propName: string | undefined;

    static get observedAttributes() {
        return [Attribute.logo, Attribute.regions, Attribute.climate, Attribute.search, Attribute.profile];
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
        const searchImg = this.ownerDocument.createElement("img")
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/header/header.css">
            <section>
            <div class="header">
            <div class="left">
            <img src=${this.logo} height="40np" alt="">

            <h3 href="">Regiones</h3>
            <h3 href="">Climas</h3>
            </div>

            <div class="right">
            <img src=${this.search} height = "30np" alt="">
            <img src=${this.profile} height = "30np" alt="">
            </div>
            </div>
            </section>
            `;
        }
    }
}
customElements.define("app-header", Header);
export default Header;