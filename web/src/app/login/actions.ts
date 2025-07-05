"use server";

import { redirect } from "next/navigation";
import { setToken, SignInAnon } from "@/lib/services/auth";

export type SignInPayload = {
  error?: string;
  ok: boolean;
};

export async function SignInAnonAction(
  _: SignInPayload,
  formData: FormData,
): Promise<SignInPayload> {
  if (!formData.get("email")) {
    return {
      error: "email is required",
      ok: false,
    };
  }

  const response = await SignInAnon({
    email: formData.get("email") as string,
  });

  if (response.token) {
    await setToken(response.token);
    redirect("/");
  }

  return {
    error: response.error as string,
    ok: false,
  };
}
