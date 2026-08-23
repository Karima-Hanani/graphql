export function Login() {
    return `
      <div class="login-card">
        <form class="login-form">
          <div class="form-group">
            <div class="input-wrapper">
              <input 
                type="text" 
                id="identifier" 
                name="identifier" 
                placeholder="EMAIL OR USERNAME" 
                required 
              >
            </div>
          </div>

          <div class="form-group">
            <div class="input-wrapper">
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="PASSWORD" 
                required
              >
            </div>
          </div>
      
          <button type="submit" class="submit-btn">LOGIN</button>
          <p class="login-error" aria-live="polite"></p>
        </form>
      </div>
    `;
}