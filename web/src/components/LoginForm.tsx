import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { SignInPayload } from "@/app/login/actions";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export function LoginForm({
  action,
}: {
  action: (data: SignInPayload, formData: FormData) => Promise<SignInPayload>;
}) {
  const [{ error }, formAction] = useActionState<SignInPayload, FormData>(
    action,
    { ok: false },
  );

  return (
    <form
      action={formAction}
      className="w-full max-w-md border-2 border-accent mx-auto bg-white shadow-xl rounded-xl p-8 space-y-6"
    >
      <p className="text-xl mr-24">Bem vindo, Entre e veja nosso catálogo!</p>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-lg">E-mail</Label>
        <Input type="email" name="email" id="email" required />
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircleIcon className="h-5 w-5" />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}

      <Button type="submit" className="w-full mt-4 text-lg">
        Entrar
      </Button>
    </form>
  );
}
