import { AuditRatioChart } from "../charts/ratioChart.js";

export function auditRatio(user) {
    return `
        <div class="audit-ratio">
            <h2>Audit Ratio</h2>

            ${AuditRatioChart(user)}
        </div>
    `;
}