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

  test("should show sum of the 1,2,3 in the result box", async () => {
    render(<Page />);
    expect(screen.getByTestId("string-input")).toBeInTheDocument();
    await userEvent.type(screen.getByTestId("string-input"), "1,2,3");
    await userEvent.click(screen.getByTestId("string-calculate-btn"));
    expect(screen.getByTestId("string-calculated-result")).toHaveTextContent(
      "6"
    );
  });

  test("should show exception message for the negative numbers in the result box", async () => {
    render(<Page />);
    expect(screen.getByTestId("string-input")).toBeInTheDocument();
    await userEvent.type(screen.getByTestId("string-input"), "-1,-2,3");
    await userEvent.click(screen.getByTestId("string-calculate-btn"));
    expect(screen.getByTestId("string-calculated-result")).toHaveTextContent(
      "negative numbers not allowed -1, -2"
    );
  });
});
