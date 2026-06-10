import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AuthForm from "@/app/(auth)/emailpassword/components/AuthForm";

const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

describe("AuthForm submit", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("calls signInWithPassword", async () => {
    const user = userEvent.setup();

    const signInWithPassword = jest.fn().mockResolvedValue({
        error: null,
    });

    render(
        <AuthForm
        supabase={{
            auth: {
            signInWithPassword,
            signUp: jest.fn(),
            },
        } as any}
        onAuth={jest.fn()}
        />
    );

    await user.type(
        screen.getByLabelText(/email/i),
        "test@test.com"
    );

    await user.type(
        screen.getByLabelText(/password/i),
        "password123"
    );

    await user.click(
        screen.getByTestId("auth-submit")
    );

    expect(signInWithPassword).toHaveBeenCalledWith({
        email: "test@test.com",
        password: "password123",
    });
  });
});