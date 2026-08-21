export function profileInfo(user) {
    return `
        <div class="info">
            <h2>About</h2>
            <p>First Name: ${user.firstName}</p>
            <p>Last Name: ${user.lastName}</p>
            <p>City: ${user.city}</p>
            <p>Gender: ${user.gender}</p>
            <p>CIN: ${user.cin}</p>
        </div>
    `;
}