import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PasswordSection } from "@/app/(app)/dashboard/components/PasswordSection";

describe("PasswordSection", () => {
  it("calls send code handler", async () => {
    const user = userEvent.setup();

    const sendCode = jest.fn();

    render(
      <PasswordSection
        newPassword=""
        setNewPassword={jest.fn()}
        confirmPassword=""
        setConfirmPassword={jest.fn()}
        verificationCode=""
        setVerificationCode={jest.fn()}
        passwordError=""
        codeSent={false}
        onSendCode={sendCode}
      />
    );

    await user.click(
      screen.getByRole("button", {
        name: /send verification code/i,
      })
    );

    expect(sendCode).toHaveBeenCalledTimes(1);
  });
});