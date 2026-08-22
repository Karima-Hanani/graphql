import { SkillsChart } from "../charts/skillsChart.js";
export function skills(user) {
    return `
        <div class="skills">
            <h2>Skills</h2>
            ${SkillsChart(user.transactions)}
        </div>
    `;
}