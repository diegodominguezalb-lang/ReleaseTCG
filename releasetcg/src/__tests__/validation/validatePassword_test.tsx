import { validatePassword } from "@/utils/profile/validation/validatePassword";

describe("validatePassword", () => {
  it("rejects short passwords", () => {
    const result = validatePassword("abc");

    expect(result.valid).toBe(false);
  });

  it("accepts long passwords", () => {
    const result =
      validatePassword("ThisIsASafePassword123!");

    expect(result.valid).toBe(true);
  });
});