export function auditRatio(user) {
    return `
        <div class="audit-ratio">
            <h2>Audit Ratio</h2>

            <p>${user.auditRatio}</p>
        </div>
    `;
}