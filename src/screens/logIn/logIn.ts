import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";

class LogIn extends HTMLElement {


    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
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
            
            const divButton = this.ownerDocument.createElement("div");
            const button = this.ownerDocument.createElement("button");
            button.textContent = "Ingresar";
            button.addEventListener("click", () => {
                dispatch(navigate(Screens.DASHBOARD))
            })
            
            const divAcc = this.ownerDocument.createElement("div");
            divAcc.classList.add("class-acc");
            const alrdAcc = this.ownerDocument.createElement("h3");
            alrdAcc.textContent = "No tengo una cuenta";
            alrdAcc.addEventListener("click", () => {
                dispatch(navigate(Screens.SIGNIN))
            })
            

            divLogo.appendChild(imgLogo);
            divInputs.appendChild(email);
            divInputs.appendChild(emInput);
            divInputs.appendChild(password);
            divInputs.appendChild(passInput);
            divButton.appendChild(button);
            divAcc.appendChild(alrdAcc);

            container.appendChild(divLogo);
            container.appendChild(divInputs);
            container.appendChild(divButton);
            container.appendChild(divAcc);

            this.shadowRoot?.appendChild(container);
            
        }
    }
}
customElements.define("log-in", LogIn);
export default LogIn;