import { createFetch } from "@vueuse/core";

export function htmlEncode(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function urlsafeBase64Encode(str: string): string {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export type Secret = {
  id: string;
  payload_id: string;
  secret_type: string;
  secret_value: string;
  createdAt: string;
  updatedAt: string;
};

export type PayloadFire = {
  url: string;
  ip_address: string;
  referer: string;
  user_agent: string;
  cookies: string;
  title: string;
  origin: string;
  screenshot_id: string;
  was_iframe: boolean;
  browser_timestamp: string;
  CORS: string | null;
  gitExposed: string | null;
  createdAt: string;
  id: string;
  encrypted: boolean;
  encrypted_data: string | null;
  public_key: string | null;
  updatedAt: string;
  secrets: Secret[];
};

export type PayloadResult = {
  payload_fires: PayloadFire[];
  total: number;
};

export type PayloadResponse = {
  success: boolean;
  result: PayloadResult;
};


export const useXssHunterFetch = createFetch({
  baseUrl: 'https://localhost:8080/api/v1',
  fetchOptions: { headers: { 'X-CSRF-Buster': 'test' } },
});
