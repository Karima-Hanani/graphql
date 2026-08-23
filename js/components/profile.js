import { profileInfo } from "./profileInfo.js";
import { SkillsChart } from "../charts/skillsChart.js";
import { AuditRatioChart } from "../charts/ratioChart.js";

export function Profile(user) {
    return `
    <header class="profile-header">
        <p>@${user.login}</p>
        <button class="logout-btn">Logout</button>
    </header>
        <main class="profile">
            ${profileInfo(user)}
             

            <section class="statistics">
                ${AuditRatioChart(user)}
                ${SkillsChart(user.skills)}
            </div>
        </main>
    `;
}