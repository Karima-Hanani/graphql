import { profileInfo } from "./profileInfo.js";
import { auditRatio } from "./auditRatio.js";
import { skills } from "./skills.js";

export function Profile(user) {
    return `
    <header class="profile-header">
        <p>@${user.login}</p>
        <button class="logout-btn">Logout</button>
    </header>
        <main class="profile">
                ${profileInfo(user)}

                ${auditRatio(user)}

                ${skills(user)}
        </main>
    `;
}