export const CLAIM_TYPES = ["Software", "Troubleshooting", "Networking", "Hardware"]

export const TABLE_HEADERS = ["Title", "Created", "Type", "Status", "Actions"];

export const PASS_PATTERN: RegExp = /^[a-zA-Z0-9_-]{6,18}$/i;

export const EMAIL_PATTERN: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export const USER_NAME_PATTERN: RegExp = /^[a-zA-Z\s]*$/;

export const NEW_CLAIM_TEXT_PATTERN = /^[a-zA-Z0-9\s]*$/;

export const BASE_URL: string = "http://localhost:3001";

export const USER = localStorage.getItem("User");

