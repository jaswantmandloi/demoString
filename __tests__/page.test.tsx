import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Page from "@/app/page";
describe("String Page", () => {
  test("render input box with button", () => {
    render(<Page />);
    expect(screen.getByTestId("string-input")).toBeInTheDocument();
    expect(screen.getByTestId("string-calculate-btn")).toBeInTheDocument();
  });

  test("enter string in input and check rendered string", async () => {
    render(<Page />);
    expect(screen.getByTestId("string-input")).toBeInTheDocument();
    await userEvent.type(screen.getByTestId("string-input"), "1,2,3");
    expect(screen.getByTestId("string-input")).toHaveValue("1,2,3");
  });
});
