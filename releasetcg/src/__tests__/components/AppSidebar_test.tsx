import { render, screen } from "@testing-library/react";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

jest.mock("@/components/nav-user", () => ({
  NavUser: () => <div>Mock NavUser</div>,
}));

describe("AppSidebar", () => {
  function renderSidebar() {
    return render(
      <TooltipProvider>
        <SidebarProvider>
            <AppSidebar />
        </SidebarProvider>
    </TooltipProvider>
    );
  }

  it("renders the home link", () => {
    renderSidebar();

    expect(
      screen.getByRole("link", { name: /home/i })
    ).toBeInTheDocument();
  });

  it("renders main navigation sections", () => {
    renderSidebar();

    expect(
      screen.getByText("Play")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Deck Builder")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Gallery")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Learn")
    ).toBeInTheDocument();
  });

  it("renders project links", () => {
    renderSidebar();

    expect(
      screen.getByText("Dashboard")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Cosmetics")
    ).toBeInTheDocument();
  });
});