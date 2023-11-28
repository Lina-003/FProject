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
        
        this.render();
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/header/header.css">
                <section>
                    <div class="logo">
                    <img src="${this.logo}" height="100np" alt="">
                    </div>
                        <div class="datos">
                            <h3>Usuario o e-mail</h3>
                            <h3>Contraseña</h3>
                        </div>
                        <div class="ingreso">
                            <div class="button-enter">
                                <button id="enter">Ingresar</button>
                            </div>
                            <p>No tengo una cuenta</p>
                        </div>
                    
                </section>
            `;

            const button = this.shadowRoot.querySelector("#button");
            const searchInput = this.shadowRoot.querySelector("#searchInput") as HTMLInputElement;

            if (button) button.addEventListener("click", () => {
                const searchQuery = searchInput.value;
                console.log(searchQuery);
            });
        }
    }
}
customElements.define("app-logIn", LogIn);
export default LogIn;