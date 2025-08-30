import { apiFetch } from "../lib/api";

export async function loginUser(email, password) {
    return apiFetch('/login', {
        method:'POST',
        body: JSON.stringify({ email, password }),
    });
}