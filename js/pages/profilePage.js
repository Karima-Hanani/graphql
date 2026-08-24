import { logout } from "../auth/auth.js";
import { Profile } from "../components/profile.js";
import {graphqlRequest} from "../graphql/graphql.js";
import {query} from "../graphql/query.js"

export async function renderProfilePage() {
    try {
        const graphRes = await graphqlRequest(query);

        const user = graphRes.data.user[0];

        return Profile(user);

    } catch (error) {
        console.error("Failed to load profile:", error);
        return null;
    }
}

export function bindProfileEvents() {
    const logoutBtn = document.querySelector(".logout-btn")

    if (logoutBtn) {
        logoutBtn.addEventListener("click", logout);
    }
}