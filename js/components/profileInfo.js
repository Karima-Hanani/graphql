export function profileInfo(user) {
    let avatar = ""
    if (user.avatar) {
        avatar = user.avatar
    } else {
        if (user.gender === "Female") {
            avatar = "./assest/female.jpg"
        } else {
            avatar = "./assest/male.jpg"
        }
    }
        
    return `
        <section class="info">
            <div class="info-avatar">
                <img src="${avatar}" alt="${user.login}'s profile picture">
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