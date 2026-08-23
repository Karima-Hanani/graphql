import { profileInfo } from "./profileInfo.js";
import { SkillsChart } from "../charts/skillsChart.js";
import { AuditRatioChart } from "../charts/ratioChart.js";
import { level } from "./level.js";
import { totalXP } from "./totalXP.js";

export function Profile(user) {
    return `
    <header class="profile-header">
        <p>@${user.login}</p>
        <button class="logout-btn">Logout</button>
    </header>
        <main class="profile">
            ${profileInfo(user)}
            ${level(user)}
            ${totalXP(user)}

            <section class="statistics">
                ${AuditRatioChart(user)}
                ${SkillsChart(user.skills)}
            </section>
        </main>
    `;
}