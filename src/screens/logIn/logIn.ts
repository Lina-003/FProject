/*import "../components/index";
import { navigate } from "../../store/actions";
import { addObserver, dispatch } from "../../store/index";
import { Screens } from "../../types/places";
import Firebase from "../../utils/firebase"

const userPass = {email: "", password: ""};

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
        const response = await Firebase.loginUser(userPass)

        if (response === undefined || response === null){
            alert("Can't login, try again!")
        } else if (response){
            alert("Correctly logged!")
            dispatch(navigate(Screens.DASHBOARD));
        }
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `<link rel="stylesheet" href="/src/screens/logIn.css">`;
        }

        const el = this.ownerDocument.createElement("div")
        el.setAttribute("class", "login-box")
        let firstChildEl = this.ownerDocument.createElement("h2")
        firstChildEl.textContent = "LOGIN"
        el.appendChild(firstChildEl)

        const formEl = this.ownerDocument.createElement("form")
        formEl.addEventListener("submit", (e) => {
            e.preventDefault()
        })
        let childFormEl = this.ownerDocument.createElement("div")
        childFormEl.setAttribute("class", "user-box")
        let secondChildFormEl = this.ownerDocument.createElement("input")
        secondChildFormEl.setAttribute("type", "text")
        secondChildFormEl.setAttribute("name", "username")
        secondChildFormEl.setAttribute("required", "true")
        secondChildFormEl.addEventListener(
            "change",
            (e: any) => (userPass.email = e.target.value)
        );
        childFormEl.appendChild(secondChildFormEl)
        let labelEl = this.ownerDocument.createElement("label")
        labelEl.textContent = "Username"
        childFormEl.appendChild(labelEl)
        formEl.appendChild(childFormEl)

        childFormEl = this.ownerDocument.createElement("div")
        childFormEl.setAttribute("class", "user-box")
        secondChildFormEl = this.ownerDocument.createElement("input")
        secondChildFormEl.setAttribute("type", "password")
        secondChildFormEl.setAttribute("name", "password")
        secondChildFormEl.setAttribute("required", "true")
        secondChildFormEl.addEventListener(
            "change",
            (e: any) => (userPass.password = e.target.value)
        );
        childFormEl.appendChild(secondChildFormEl)
        labelEl = this.ownerDocument.createElement("label")
        labelEl.textContent = "Password"
        childFormEl.appendChild(labelEl)
        formEl.appendChild(childFormEl)

        const loginButton = this.ownerDocument.createElement("a");
        loginButton.innerText = "Login";
        loginButton.setAttribute("class", "login-btn")
        loginButton.addEventListener("click", () => {
            this.handleLoginButton()
        });

        const divEl = this.ownerDocument.createElement("div")
        divEl.setAttribute("class", "btn-container")
        divEl.appendChild(loginButton)
        formEl.appendChild(divEl)

        const signUpButton = this.ownerDocument.createElement("a");
        signUpButton.setAttribute("class", "signup-btn")
        signUpButton.innerText = "Create an account";
        signUpButton.addEventListener(
            "click",
            (e: any) => {
                dispatch(navigate(Screens.SIGNUP));
            });
        formEl.appendChild(signUpButton)

        el.appendChild(formEl)

        this.shadowRoot?.appendChild(el);
    }
}

customElements.define("app-login", LogIn);
export default LogIn;
*/