import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AuthForm from "@/app/(auth)/emailpassword/components/AuthForm";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("AuthForm", () => {
  const mockSupabase = {
    auth: {
      signInWithPassword: jest.fn(),
      signUp: jest.fn(),
    },
  } as any;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderForm() {
    return render(
      <AuthForm
        supabase={mockSupabase}
        onAuth={jest.fn()}
      />
    );
  }

  it("renders login mode by default", () => {
    renderForm();

    expect(
      screen.getByRole("heading", {
        name: /welcome back/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/email/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/password/i)
    ).toBeInTheDocument();

    expect(
      screen.queryByLabelText(/username/i)
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /sign up/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("auth-submit")
    ).toHaveAttribute("type", "submit");

    expect(
      screen.getByTestId("auth-submit")
    ).toHaveTextContent("Login");
  });

  it("switches to signup mode and shows username field", async () => {
    const user = userEvent.setup();

    renderForm();

    await user.click(
      screen.getByRole("button", {
        name: /sign up/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: /create an account/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/username/i)
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("auth-submit")
    ).toHaveAttribute("type", "submit");

    expect(
      screen.getByTestId("auth-submit")
    ).toHaveTextContent("Create account");
  });
});