jest.mock("@/utils/supabase/client", () => ({
  createClient: jest.fn(),
}));

import { createClient } from "@/utils/supabase/client";

describe("changePassword", () => {
  it("calls updateUser", async () => {
    const updateUser = jest.fn();

    (createClient as jest.Mock).mockReturnValue({
      auth: {
        updateUser,
      },
    });

    updateUser.mockResolvedValue({
      data: {},
      error: null,
    });

    const { changePassword } = await import(
      "@/utils/profile/changePassword"
    );

    await changePassword(
      "MyNewPassword123!",
      "123456"
    );

    expect(updateUser).toHaveBeenCalledWith({
      password: "MyNewPassword123!",
      nonce: "123456",
    });
  });
});