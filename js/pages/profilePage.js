import { logout } from "../auth/auth.js";
import { Profile } from "../components/profile.js";
import {graphqlRequest} from "../graphql/graphql.js";
import {query} from "../graphql/query.js"

export async function renderProfilePage() {
    const graphRes = await graphqlRequest(query)
    console.log(graphRes);
    return Profile()
}

export function bindProfileEvents() {
    const logoutBtn = document.querySelector(".logout-btn")

    logoutBtn.addEventListener("click",logout)
}