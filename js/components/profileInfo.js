export function profileInfo(user) {
    return `
        <section class="info">
            <div class="info-avatar">
                <img src="${user.avatar}" alt="${user.login}'s profile picture">
            </div>
            <div class="info-content">
                <h2>${user.firstName} ${user.lastName}</h2>
                <p class="info-location">${user.city} · ${user.gender}</p>
                <div class="info-details">
            <p>CIN: ${user.cin}</p>
            <p>EMAIL: ${user.email}</p>
            <p>TEL: ${user.tel}</p>
                </div>
            </div>
        </section>
    `;
}