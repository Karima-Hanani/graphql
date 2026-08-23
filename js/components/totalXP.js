import { Convert } from "../charts/ratioChart.js";

export function totalXP(user) {
    const xp = user.xp.aggregate.sum.amount ?? 0;

    return `
        <section class="profile-xp">
            <h2>Total XP</h2>
            <p>${Convert(xp)}</p>
        </section>
    `;
}