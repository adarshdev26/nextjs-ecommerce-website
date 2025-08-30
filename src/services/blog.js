import { apiFetch } from "../lib/api";

export async function fetchBlogs() {
    return apiFetch('/posts?populate=*', {
    });
}