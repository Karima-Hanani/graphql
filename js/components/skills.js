export function skills(user) {
    return `
        <div class="skills">
            <h2>Skills</h2>

            ${user.transactions.map(skill => `
                <div class="skill">
                    <span>${skill.type}</span>
                    <span>${skill.amount}</span>
                </div>
            `).join("")}
        </div>
    `;
}