import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app correctly", () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/hi there/i);
  expect(welcomeMessage).toBeInTheDocument();
});
