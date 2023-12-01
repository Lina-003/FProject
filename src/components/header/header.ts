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
        textReg.classList.add("class-region");
        textReg.innerText = `${this.regions}`;
        textReg.addEventListener("click", () => {
            dispatch(navigate(Screens.REGIONS))
        })
        
        const textClim = this.ownerDocument.createElement("h3");
        textClim.classList.add("class-region");
        textClim.innerText = `${this.climate}`;
        textClim.addEventListener("click", () => {
            dispatch(navigate(Screens.CLIMATE))
        })
        
        const divRight = this.ownerDocument.createElement("div");
        divRight.classList.add("class-right");

        const iconoMenu = this.ownerDocument.createElement("img");
        iconoMenu.classList.add("class-icono");
        iconoMenu.setAttribute("src", "../src/components/imgheader/menu.png")

        const iconoMenuClose = this.ownerDocument.createElement("img");
        iconoMenuClose.classList.add("class-close");
        iconoMenuClose.setAttribute("src", "../src/components/imgheader/menu.png")
        
        const search = this.ownerDocument.createElement("input");
        search.setAttribute("type", "search");
        search.setAttribute("placeholder", "Buscar");
        search.setAttribute("id", "Buscador");

        const searchButton = this.ownerDocument.createElement("button");
        searchButton.classList.add("class-buscador")
        searchButton.textContent = "Buscar";
        searchButton.addEventListener("click", () => {
            const searchQuery = search.value;
            console.log(searchQuery);
        });

        const imgProfile = this.ownerDocument.createElement("img");
        imgProfile.classList.add("class-profile");
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

        const aside = this.ownerDocument.createElement("aside");
        const container2 = this.ownerDocument.createElement("div");
        container2.classList.add("class-contenedor");
        
        const textReg2 = this.ownerDocument.createElement("h3");
        textReg2.classList.add("class-texto");
        textReg2.innerText = `${this.regions}`;
        textReg2.addEventListener("click", () => {
            dispatch(navigate(Screens.REGIONS))
        })
        
        const textClim2 = this.ownerDocument.createElement("h3");
        textClim2.classList.add("class-texto");
        textClim2.innerText = `${this.climate}`;
        textClim2.addEventListener("click", () => {
            dispatch(navigate(Screens.CLIMATE))
        })
        
        const search2 = this.ownerDocument.createElement("input");
        search2.setAttribute("type", "search");
        search2.setAttribute("placeholder", "Buscar");
        search2.setAttribute("id", "Buscador2");

        const searchButton2 = this.ownerDocument.createElement("button");
        searchButton2.classList.add("class-buscar");
        searchButton2.textContent = "Buscar";
        searchButton2.addEventListener("click", () => {
            const searchQuery = search.value;
            console.log(searchQuery);
        });

        const imgProfile2 = this.ownerDocument.createElement("img");
        imgProfile2.classList.add("class-profile2");
        imgProfile2.setAttribute("src", `${this.profile}`);
        imgProfile2.setAttribute("height", "35np");
        imgProfile2.style.marginLeft = "50px";

        const dropdownMenu2 = this.ownerDocument.createElement("div");
        dropdownMenu2.classList.add("dropdown-menu2");

        const menuOptions2 = ["Log out"];

        const handleLogOutClick2 = async () => {
            try {
                const auth = getAuth();
                await signOut(auth);
                alert("Cierre de sesión exitoso");
                dispatch(navigate(Screens.LOGIN));
            } catch (error) {
                alert("Error al cerrar sesión:");
            }
        };

        menuOptions2.forEach(optionText2 => {
            const menuItem2 = this.ownerDocument.createElement("div");
            menuItem2.textContent = optionText2;

        switch (optionText2) {
            case "Log out":
            menuItem2.addEventListener("click", handleLogOutClick2);
            break;
            default:
            break;
        }

        dropdownMenu2.appendChild(menuItem2);
        });

        imgProfile2.addEventListener("click", () => {
            console.log("Clic en la foto de perfil");
            dropdownMenu2.style.display = (dropdownMenu2.style.display === "block") ? "none" : "block";
        });

        divLeft.appendChild(aside);
        aside.appendChild(container2);
        aside.appendChild(iconoMenuClose)
        container2.appendChild(textReg2);
        container2.appendChild(textClim2);
        container2.appendChild(search2);
        container2.appendChild(searchButton2);
        container2.appendChild(imgProfile2);
        container2.appendChild(dropdownMenu2);

        divLeft.appendChild(imgLogo);
        divLeft.appendChild(textReg);
        divLeft.appendChild(textClim);

        divRight.appendChild(search);
        divRight.appendChild(searchButton);
        divRight.appendChild(imgProfile);
        divRight.appendChild(dropdownMenu);
        divRight.appendChild(iconoMenu);

        container.appendChild(divLeft);
        container.appendChild(divRight);

        this.shadowRoot?.appendChild(container);

        iconoMenu.addEventListener("click", ()=> {
            if (aside.style.display = "none") {
                aside.style.display = "block"
            } else {
                aside.style.display = "none"
            }
        })

        iconoMenuClose.addEventListener("click", () => {
            if (aside.style.display = "block") {
                aside.style.display = "none" 
            } else {
                aside.style.display = "block"
            }
        } )
       
    }
}
customElements.define("app-header", Header);
export default Header;