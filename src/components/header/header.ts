import { getAuth, signOut } from 'firebase/auth';
import { dispatch } from '../../store';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/navigation';
import { loadCss } from '../../utils/styles';
import style from './header.css';

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
        
    }

    render() {

        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
        loadCss(this, style);

        const container = this.ownerDocument.createElement("section");
        container.classList.add("class-header");
        
        
        const divLeft = this.ownerDocument.createElement("div");
        divLeft.classList.add("class-left");
        const imgLogo = this.ownerDocument.createElement("img");
        imgLogo.setAttribute("src", `${this.logo}`);
        imgLogo.setAttribute("height", "40np");
        imgLogo.addEventListener("click", () => {
            dispatch(navigate(Screens.DASHBOARD))
        })
        
        const textReg = this.ownerDocument.createElement("h3");
        textReg.innerText = `${this.regions}`;
        textReg.addEventListener("click", () => {
            dispatch(navigate(Screens.REGIONS))
        })
        
        const textClim = this.ownerDocument.createElement("h3");
        textClim.innerText = `${this.climate}`;
        textClim.addEventListener("click", () => {
            dispatch(navigate(Screens.CLIMATE))
        })
        
        const divRight = this.ownerDocument.createElement("div");
        divRight.classList.add("class-right");
        
        const search = this.ownerDocument.createElement("input");
        search.setAttribute("type", "search");
        search.setAttribute("placeholder", "Buscar");
        search.setAttribute("id", "Buscador");

        const searchButton = this.ownerDocument.createElement("button");
        searchButton.textContent = "Buscar";
        searchButton.addEventListener("click", () => {
            const searchQuery = search.value;
            console.log(searchQuery);
        });

        const imgProfile = this.ownerDocument.createElement("img");
        imgProfile.setAttribute("src", `${this.profile}`);
        imgProfile.setAttribute("height", "35np");
        imgProfile.style.marginLeft = "50px";

        const dropdownMenu = this.ownerDocument.createElement("div");
        dropdownMenu.classList.add("dropdown-menu");
        dropdownMenu.style.display = "none";

        const menuOptions = ["Log out"];

        const handleLogOutClick = async () => {
            try {
                const auth = getAuth();
                await signOut(auth);
                alert("Cierre de sesión exitoso");
                dispatch(navigate(Screens.LOGIN));
            } catch (error) {
                alert("Error al cerrar sesión:");
            }
        };

        menuOptions.forEach(optionText => {
            const menuItem = this.ownerDocument.createElement("div");
            menuItem.textContent = optionText;

        switch (optionText) {
            case "Log out":
            menuItem.addEventListener("click", handleLogOutClick);
            break;
            default:
            break;
        }

        dropdownMenu.appendChild(menuItem);
        });

        imgProfile.addEventListener("click", () => {
            console.log("Clic en la foto de perfil");
            dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
        });


        divLeft.appendChild(imgLogo);
        divLeft.appendChild(textReg);
        divLeft.appendChild(textClim);

        divRight.appendChild(search);
        divRight.appendChild(searchButton);
        divRight.appendChild(imgProfile);
        divRight.appendChild(dropdownMenu);

        container.appendChild(divLeft);
        container.appendChild(divRight);

        this.shadowRoot?.appendChild(container);
       
    }
}
customElements.define("app-header", Header);
export default Header;