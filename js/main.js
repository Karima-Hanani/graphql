import { isAuthenticated } from "./auth/auth.js";
import { showPage } from "./router.js";

if (isAuthenticated()) {
    showPage("profile")
} else {
    showPage("login")
}