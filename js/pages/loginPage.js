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

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // login logic later
    });
}