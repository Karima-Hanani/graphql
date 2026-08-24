import { 
    renderLoginPage, 
    bindLoginEvents 
} from "./pages/loginPage.js";

import { 
    renderProfilePage,
    bindProfileEvents
} from "./pages/profilePage.js";

import { logout } from "./auth/auth.js";

const app = document.querySelector("#app");

export const routes = {
    login: {
        render: renderLoginPage,
        bind: bindLoginEvents
    },

    profile: {
        render: renderProfilePage,
        bind: bindProfileEvents
    }
};

export function showPage(page) {
    const route = routes[page];

    if (!route) {
        console.error(`Unknown page: ${page}`);
        return;
    }

    render(route.render, route.bind);
}

export async function render(renderView, bindEvents) {
    const content = await renderView();

    if (content === null) {
        logout();
        return;
    }

    app.innerHTML = content;

    if (typeof bindEvents === "function") {
        bindEvents();
    }
}