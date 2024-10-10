import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Button } from "./button";

describe("Button", () => {
  test("should render", () => {
    render(<Button text="Count" />);
    expect(screen.getByTestId("my-button")).toBeTruthy;
  });
  test("should show text Count", () => {
    render(<Button text="Count" />);
    expect(screen.getByTestId("my-button")).toHaveTextContent("Count");
  });
  test("should show text Number", () => {
    render(<Button text="Number" />);
    expect(screen.getByTestId("my-button")).toHaveTextContent("Number");
  });
  test("should increment when clicked", async () => {
    render(<Button text="Number" />);

    await userEvent.click(screen.getByTestId("my-button"));
    expect(screen.getByTestId("my-button")).toHaveTextContent("1");

    await userEvent.click(screen.getByTestId("my-button"));
    expect(screen.getByTestId("my-button")).toHaveTextContent("2");

    await userEvent.click(screen.getByTestId("my-button"));
    expect(screen.getByTestId("my-button")).toHaveTextContent("3");
  });
});
