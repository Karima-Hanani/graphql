import { loginUser } from "../auth/auth.js";
import { Login } from "../components/login.js";

export function renderLoginPage() {
    return `
        <main class="login-page">
            ${Login()}
        </main>
    `;
}
export function bindLoginEvents() {
    const form = document.querySelector(".login-form");

    form.addEventListener("submit", handleLogin);
}

function handleLogin(event) {
    event.preventDefault();

    const form = event.currentTarget;

    const identifier = form.elements.identifier.value;
    const password = form.elements.password.value;

    console.log("Identifier:", identifier);

    loginUser(identifier,password)
}