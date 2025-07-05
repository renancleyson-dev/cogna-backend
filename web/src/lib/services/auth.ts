import type { SignIn } from "@server/types";
import { CONFIG } from "../config";
import { cookies } from "next/headers";

const TOKEN_COOKIE_KEY = "auth:token";

export async function SignInAnon(
  params: { email: string }
): Promise<{ error?: string } & Partial<SignIn>> {
  const response = await fetch(new URL("/auth/anonymous", CONFIG.API_URL), {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
}

export async function getToken() {
  const cookieStore = await cookies();

  return cookieStore.get(TOKEN_COOKIE_KEY)?.value;
}

export async function setToken(token: string) {
  const cookieStore = await cookies();

  cookieStore.set(TOKEN_COOKIE_KEY, token);
}
