export function AuditRatioChart(user) {
    const totalUp = user.totalUp;
    const totalDown = user.totalDown;
    const ratio = user.auditRatio?.toFixed(1) ?? 0;

    const total = totalUp + totalDown;

    const upPercent = totalUp / total;

    const radius = 70;
    const circumference = 2 * Math.PI * radius;

    const upLength = upPercent * circumference;

    return `
        <div class="audit-ratio">
            <h2>Audit Ratio</h2>

            <svg
                class="audit-chart"
                viewBox="0 0 200 200"
            >
                <circle
                    cx="100"
                    cy="100"
                    r="${radius}"
                    class="ratio-ring ratio-ring-background"
                />

                <circle
                    cx="100"
                    cy="100"
                    r="${radius}"
                    class="ratio-ring ratio-ring-up"
                    stroke-dasharray="${upLength} ${circumference}"
                    transform="rotate(-90 100 100)"
                />

                <text
                    x="100"
                    y="100"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    class="ratio-value"
                >
                    ${ratio}
                </text>
            </svg>

            <div class="audit-values">
                <span>UP: ${Convert(totalUp)}↑</span>
                <span>DOWN: ${Convert(totalDown)}↓</span>
            </div>
        </div>
    `;
}

export function Convert(bytes) {
    if (bytes < 1000) {
        return `${bytes} B`;
    }

    if (bytes < 1000 ** 2) {
        return `${(bytes / 1000).toFixed(2)} KB`;
    }

    if (bytes < 1000 ** 3) {
        return `${(bytes / 1000 ** 2).toFixed(2)} MB`;
    }

    return `${(bytes / 1000 ** 3).toFixed(2)} GB`;
}