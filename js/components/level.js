export function level(user) {
    const level = user.level[0]?.amount ?? 0;

    return `
        <section class="profile-level">
            <h2>Level</h2>
            <p>${level}</p>
        </section>
    `;
}