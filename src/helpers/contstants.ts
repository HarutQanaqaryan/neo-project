export const passwordPattern: RegExp = /^[a-zA-Z0-9_-]{6,18}$/i;

export const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export const userNamePattern: RegExp = /^[a-zA-Z\s]*$/;

export const newClaimTextPattern = /^[a-zA-Z0-9\s]*$/;

export const BASE_URL: string = "http://localhost:3001";

// -------------------------- //

export const USER = localStorage.getItem("User");

export const ADMIN = typeof USER === "string" && JSON.parse(USER).role;

export const isAdmin = ADMIN === "admin"

