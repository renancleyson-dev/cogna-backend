"use client";

import { SignInAnonAction } from "./actions";
import { LoginForm } from "@/components/LoginForm";

export default function Login() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <LoginForm action={SignInAnonAction} />
    </div>
  );
}
