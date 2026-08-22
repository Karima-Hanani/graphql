export function SkillsChart(skills) {
    const maxWidth = 300;
    const barHeight = 15;
    const rowHeight = 20;
    const startX = 100;
    const startY = 40;

    return `
        <svg
            class="skills-chart"
            viewBox="0 0 600 ${skills.length * rowHeight + 40}"
            role="img"
            aria-label="Skills chart"
        >
            ${skills.map((skill, index) => {
                const y = startY + index * rowHeight;
                const barWidth = (skill.amount / 100) * maxWidth;

                return `
                    <text
                        x="10"
                        y="${y + 12}"
                        class="skill-name"
                    >
                        ${skill.type.replace("skill_", "")}
                    </text>

                    <rect
                        x="${startX}"
                        y="${y}"
                        width="${maxWidth}"
                        height="${barHeight}"
                        class="skill-bar-background"
                    />

                    <rect
                        x="${startX}"
                        y="${y}"
                        width="${barWidth}"
                        height="${barHeight}"
                        class="skill-bar"
                    />

                    <text
                        x="${startX + maxWidth + 15}"
                        y="${y + 12}"
                        class="skill-value"
                    >
                        ${skill.amount}%
                    </text>
                `;
            }).join("")}
        </svg>
    `;
}