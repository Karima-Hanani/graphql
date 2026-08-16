import { 
    renderLoginPage, 
    bindLoginEvents 
} from "./pages/loginPage.js";

import { 
    renderProfilePage,
    bindProfileEvents
} from "./pages/profilePage.js";

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

export function render(renderView, bindEvents) {
    app.innerHTML = renderView();

    if (typeof bindEvents === "function") {
        bindEvents();
    }
}