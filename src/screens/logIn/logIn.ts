export enum AttributeLogin {
    "logo" = "logo",
    "password" = "password",
    "email" = "email",
    "enterButton" = "enterButton",
    "alreadyAcc" = "alreadyAcc"
}

class LogIn extends HTMLElement {

    logo?: string;
    email?: string;
    password?: string;
    enterbutton?: string;
    alreadyAcc?: string;
    propName: string | undefined;

    static get observedAttributes() {
        const attrs:  Record<AttributeLogin,null> = {
            logo: null,
            email: null,
            password: null,
            enterButton: null,
            alreadyAcc: null,
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
        propName: AttributeLogin,
        _: string | undefined,
        newValue: string | undefined
    ) {
        switch(propName){
            case AttributeLogin.logo:
                this.logo = newValue ? String(newValue) : undefined;
            break;
            case AttributeLogin.email:
                this.email = newValue ? String(newValue) : undefined;
            break;
            case AttributeLogin.password:
                this.password = newValue ? String(newValue) : undefined;
            break;
            case AttributeLogin.enterButton:
                this.enterbutton = newValue ? String(newValue) : undefined;
            break;
            case AttributeLogin.alreadyAcc:
                this.alreadyAcc = newValue ? String(newValue) : undefined;
            break;

            default: 
            this.propName = newValue;
            break;
        }
        
    }

    render() {
        if (this.shadowRoot) {
            const link = this.ownerDocument.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "/src/screens/logIn/logIn.css");
      
            this.shadowRoot.appendChild(link);

            const container = this.ownerDocument.createElement("section");
            container.classList.add("class-login");

            const divLogo = this.ownerDocument.createElement("div");
            divLogo.classList.add("class-logo");
            const imgLogo = document.createElement('img');
            imgLogo.setAttribute("src", "/src/components/imgheader/quiwe2.png")
            
            const divInputs = this.ownerDocument.createElement("div");
            const email = this.ownerDocument.createElement("h3");
            email.textContent = "Correo electrónico";
            
            const emInput = this.ownerDocument.createElement("input");
            emInput.setAttribute("placeholder", "Correo electrónico");
            emInput.setAttribute("id", "Correo electrónico");

            const password = this.ownerDocument.createElement("h3");
            password.textContent = "Contraseña";
            
            const passInput = this.ownerDocument.createElement("input");
            passInput.setAttribute("placeholder", "Contraseña");
            passInput.setAttribute("id", "Contraseña");

            divLogo.appendChild(imgLogo);
            divInputs.appendChild(email);
            divInputs.appendChild(emInput);
            divInputs.appendChild(password);
            divInputs.appendChild(passInput);

            container.appendChild(divLogo);
            container.appendChild(divInputs);

            this.shadowRoot?.appendChild(container);
            
        }
    }
}
customElements.define("log-in", LogIn);
export default LogIn;