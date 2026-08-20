import { getToken } from "../auth/auth.js";

const GRAPHQL_URL =
    "https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql"


export async function graphqlRequest(query) {
    const response = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        },
        body: JSON.stringify({
            query
        })
    });

    if (!response.ok) {
        throw new Error(`GraphQL request failed: ${response.status}`);
    }

    const data = await response.json();

    return data;
}