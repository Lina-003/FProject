import { addObserver, dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import firebase from "../../utils/firebase/firebase";
import { loadCss } from "../../utils/styles";
import styles from './signIn.css'

const userFields = {
    username: "",
    email: "",
    password: ""
}

class Signin extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    async handleSignUpButton() {
        const response = await firebase.registerUser(userFields)
        if (response === undefined || response === null){
            alert("Can't register, try again!")
        } else if (response) {
            alert("Correctly registered!")
            dispatch(navigate(Screens.LOGIN));
        }
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
        loadCss(this, styles);

            const container = this.ownerDocument.createElement("section");
            container.classList.add("class-signin");

            const form = this.ownerDocument.createElement("form")
            form.addEventListener("submit", (e) => {
                e.preventDefault()
            })

            const divLogo = this.ownerDocument.createElement("div");
            divLogo.classList.add("class-logo");
            const imgLogo = document.createElement('img');
            imgLogo.setAttribute("src", "/src/components/imgheader/quiwe2.png")
            
            const divInputs = this.ownerDocument.createElement("div");
            const name = this.ownerDocument.createElement("h3");
            name.textContent = "Nombre";
            
            const nInput = this.ownerDocument.createElement("input");
            nInput.setAttribute("placeholder", "Nombre");
            nInput.setAttribute("id", "Nombre");
            nInput.addEventListener("change", (e: any) => {
                userFields.username = e.target.value
            });

            const email = this.ownerDocument.createElement("h3");
            email.textContent = "Correo electrónico";
            
            const emInput = this.ownerDocument.createElement("input");
            emInput.setAttribute("placeholder", "Correo electrónico");
            emInput.setAttribute("id", "Correo electrónico");
            emInput.addEventListener("change", (e: any) => {
                userFields.email = e.target.value
            });

            const password = this.ownerDocument.createElement("h3");
            password.textContent = "Contraseña";
            
            const passInput = this.ownerDocument.createElement("input");
            passInput.setAttribute("placeholder", "Contraseña");
            passInput.setAttribute("id", "Contraseña");
            passInput.addEventListener("change", (e: any) => {
                userFields.password = e.target.value
            });

            const passwordConfirm = this.ownerDocument.createElement("h3");
            passwordConfirm.textContent = "Confirmar contraseña";
            
            const passConfirmInput = this.ownerDocument.createElement("input");
            passConfirmInput.setAttribute("placeholder", "Confirmar contraseña");
            passConfirmInput.setAttribute("id", "Contraseña");
            passConfirmInput.addEventListener("change", (e: any) => {
                if(userFields.password !== e.target.value){
                    console.log("Password do not match :(")
                    alert("The passwords aren't the same")
                }
            });
            
            const divButton = this.ownerDocument.createElement("div");
            const button = this.ownerDocument.createElement("button");
            button.textContent = "Registrarse";
            button.addEventListener("click", () => {
                this.handleSignUpButton()
            });
            
            const divAcc = this.ownerDocument.createElement("div");
            divAcc.classList.add("class-acc");
            const alrdAcc = this.ownerDocument.createElement("h3");
            alrdAcc.textContent = "Ya tengo una cuenta";
            alrdAcc.addEventListener("click", () => {
                dispatch(navigate(Screens.LOGIN))
            })
            

            divLogo.appendChild(imgLogo);
            divInputs.appendChild(name);
            divInputs.appendChild(nInput);
            divInputs.appendChild(email);
            divInputs.appendChild(emInput);
            divInputs.appendChild(password);
            divInputs.appendChild(passInput);
            divInputs.appendChild(passwordConfirm);
            divInputs.appendChild(passConfirmInput);
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

customElements.define('sign-in', Signin)