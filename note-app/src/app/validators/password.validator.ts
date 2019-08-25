import { AbstractControl } from "@angular/forms";

export function PasswordValidator(
  signupForm: AbstractControl
): { [key: string]: boolean } | null {
  const pass = signupForm.get("password").value;
  const confirmPass = signupForm.get("confirmPassword").value;

  if (pass && confirmPass && pass !== confirmPass) {
    return { PasswordMatchError: true };
  }
  return null;
}
