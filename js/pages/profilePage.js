import { logout } from "../auth/auth.js";
import { Profile } from "../components/profile.js";

export function renderProfilePage() {
    return Profile()
}

export function bindProfileEvents() {
    const logoutBtn = document.querySelector(".logout-btn")

    logoutBtn.addEventListener("click",logout)
}