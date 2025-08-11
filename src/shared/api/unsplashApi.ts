import axios from "axios";

const API_BASE = "https://api.unsplash.com";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

if (!ACCESS_KEY) {
  console.error("Set VITE_UNSPLASH_ACCESS_KEY in .env");
}

export const unsplashApi = axios.create({
  baseURL: API_BASE,
  params: { client_id: ACCESS_KEY },
});
