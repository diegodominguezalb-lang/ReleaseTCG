type PasswordSectionProps = {
  newPassword: string;
  setNewPassword: (value: string) => void;

  confirmPassword: string;
  setConfirmPassword: (value: string) => void;

  verificationCode: string;
  setVerificationCode: (value: string) => void;

  passwordError: string;
  codeSent: boolean;

  onSendCode: () => void;
};

export function PasswordSection({
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
  verificationCode,
  setVerificationCode,
  passwordError,
  codeSent,
  onSendCode,
}: PasswordSectionProps) {
  return (
    <div className="mb-6 border-t pt-6">
      <h3 className="mb-4 text-lg font-semibold">
        Change Password
      </h3>

      <div className="space-y-3">
        <input
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) =>
            setNewPassword(e.target.value)
          }
          className="w-full rounded-md border px-3 py-2"
        />

        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
          className="w-full rounded-md border px-3 py-2"
        />

        <button
          type="button"
          onClick={onSendCode}
          disabled={codeSent}
          className="rounded-md border px-4 py-2 disabled:opacity-50"
        >
          {codeSent ? "Code Sent" : "Send Verification Code"}
        </button>

        {codeSent && (
          <p className="text-sm text-green-600">
            Verification code sent to your email.
          </p>
        )}

        <input
          type="text"
          placeholder="Verification code"
          value={verificationCode}
          onChange={(e) =>
            setVerificationCode(e.target.value)
          }
          className="w-full rounded-md border px-3 py-2"
        />

        <p className="text-xs text-gray-500">
          A verification code will be sent to your
          email address.
        </p>

        {passwordError && (
          <p className="text-sm text-red-500">
            {passwordError}
          </p>
        )}
      </div>
    </div>
  );
}