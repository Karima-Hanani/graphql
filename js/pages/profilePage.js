import { logout } from "../auth/auth.js";
import { Profile } from "../components/profile.js";
import {graphqlRequest} from "../graphql/graphql.js";
import {query} from "../graphql/query.js"

export async function renderProfilePage() {
    const graphRes = await graphqlRequest(query);

    const user = graphRes.data.user[0];

    console.log("USER:", user);

    return Profile(user);
}

export function bindProfileEvents() {
    const logoutBtn = document.querySelector(".logout-btn")

    logoutBtn.addEventListener("click",logout)
}