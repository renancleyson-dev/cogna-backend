"use client";

import { useRouter } from "next/navigation";
import type { PropsWithChildren } from "react";
import { Button } from "./ui/button";

export function GoBackButton({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <Button
      variant="link"
      onClick={() => router.back()}
      className="text-sm text-blue-600 hover:underline mt-4"
    >
      {children}
    </Button>
  );
}
