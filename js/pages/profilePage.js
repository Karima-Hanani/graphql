import { logout } from "../auth/auth.js";

export function renderProfilePage() {
    return `
    <button class="logout-btn">logout</button>
        <main>
            <h1>My Profile</h1>
        </main>
    `;
}

export function bindProfileEvents() {
    const logoutBtn = document.querySelector(".logout-btn")

    logoutBtn.addEventListener("click",logout)
}