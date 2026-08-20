import { showAuthError } from "../pages/loginPage.js";
import { showPage } from "../router.js";

const authUrl = "https://learn.zone01oujda.ma/api/auth/signin";

export async function loginUser(identifier, password) {
    const credentials = btoa(`${identifier}:${password}`);

    const response = await fetch(authUrl, {
        method: "POST",
        headers: {
            Authorization: `Basic ${credentials}`,
        },
    });

    if (response.status === 403 || response.status === 401) {
        let Errcontainer = document.querySelector(".login-error")
        showAuthError(Errcontainer)
        return null
    }

    let token = await response.text()

    console.log(token);
    setToken(token)

    return token;

}

export function setToken(token) {
    return localStorage.setItem("jwt",token);
}

export function getToken() {
    return localStorage.getItem("jwt");
}

export function isAuthenticated(){
    return getToken() !== null;
}

export function logout() {
    localStorage.removeItem("jwt");
    showPage("login")
}