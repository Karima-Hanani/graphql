export function AuditRatioChart(user) {
    const maxWidth = 300;

    const totalUp = (user.totalUp);
    const totalDown = user.totalDown;
    const ratio = user.auditRatio?.toFixed(1)

    const maxValue = Math.max(totalUp, totalDown);

    const upWidth = (totalUp / maxValue) * maxWidth;
    const downWidth = (totalDown / maxValue) * maxWidth;

    return `
        <div class="audit-ratio">
            <h2>Audit Ratio</h2>
            <div class="ratio-value">
                ${ratio}
            </div>

            <svg
                class="audit-chart"
                viewBox="0 0 500 180"
                role="img"
                aria-label="Audit ratio chart"
            >
                <text x="10" y="45">
                    Given
                </text>

                <rect
                    x="100"
                    y="25"
                    width="${upWidth}"
                    height="30"
                    class="audit-up"
                />

                <text x="10" y="105">
                    Received
                </text>

                <rect
                    x="100"
                    y="85"
                    width="${downWidth}"
                    height="30"
                    class="audit-down"
                />

                <text
                    x="${100 + upWidth + 10}"
                    y="45"
                >
                    ${Convert(totalUp)}
                </text>

                <text
                    x="${100 + downWidth + 10}"
                    y="105"
                >
                    ${Convert(totalDown)}
                </text>
            </svg>
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