import { render, screen } from "@testing-library/react";
import { PasswordSection } from "@/app/(app)/dashboard/components/PasswordSection";

describe("PasswordSection", () => {
  it("renders all password fields", () => {
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
        onSendCode={jest.fn()}
      />
    );

    expect(
      screen.getByPlaceholderText("New password")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Confirm new password")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Verification code")
    ).toBeInTheDocument();
  });
});