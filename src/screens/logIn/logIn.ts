import { addObserver, dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import firebase from "../../utils/firebase/firebase";
import { loadCss } from "../../utils/styles";
import styles from './logIn.css';

const userPass = {
    email: "", 
    password: ""
}

class LogIn extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: "open"});
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    async handleLoginButton() {
        const response = await firebase.loginUser(userPass)

        if (response === undefined || response === null){
            alert("Can't login, try again!")
        } else if (response){
            alert("Correctly logged!")
            dispatch(navigate(Screens.DASHBOARD));
        }
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
        loadCss(this, styles);

            const container = this.ownerDocument.createElement("section");
            container.classList.add("class-login");

            const form = this.ownerDocument.createElement("form")
            form.addEventListener("submit", (e) => {
                e.preventDefault()
            })

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
            emInput.addEventListener("change", (e: any) => {
                userPass.email = e.target.value
            });

            const password = this.ownerDocument.createElement("h3");
            password.textContent = "Contraseña";
            
            const passInput = this.ownerDocument.createElement("input");
            passInput.setAttribute("placeholder", "Contraseña");
            passInput.setAttribute("id", "Contraseña");
            passInput.addEventListener("change", (e: any) => {
                userPass.password = e.target.value
            });
            
            const divButton = this.ownerDocument.createElement("div");
            const button = this.ownerDocument.createElement("button");
            button.textContent = "Ingresar";
            button.addEventListener("click", () => {
                this.handleLoginButton()
            });
            
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

            container.appendChild(form);
            container.appendChild(divLogo);
            container.appendChild(divInputs);
            container.appendChild(divButton);
            container.appendChild(divAcc);

            this.shadowRoot?.appendChild(container);
            
        
    }
}
customElements.define("log-in", LogIn);
export default LogIn;