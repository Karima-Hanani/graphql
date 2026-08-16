export function Login() {
    return `
        <form class="login-form">
            <h1>Welcome</h1>

            <div class="form-group">
                <label for="identifier">
                    Username or Email
                </label>

                <input
                    id="identifier"
                    name="identifier"
                    type="text"
                    required
                >
            </div>

            <div class="form-group">
                <label for="password">
                    Password
                </label>

                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                >
            </div>

            <button type="submit">
                Login
            </button>

            <p class="login-error"></p>
        </form>
    `;
}
