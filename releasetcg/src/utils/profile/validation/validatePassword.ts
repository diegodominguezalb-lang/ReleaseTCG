export function validatePassword(password: string) {
  if (password.length < 8) {
    return {
      valid: false,
      message:
        "Password must be at least 8 characters",
    };
  }

  return {
    valid: true,
    message: "",
  };
}