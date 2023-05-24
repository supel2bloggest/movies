import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import NavBar from ".";

test("Renders NavBar", () => {
  /**
   * to render movie card in ui
   */
  const { getByText } = render(<NavBar />);

  expect(getByText("MOVIES CATCHER")).toBeInTheDocument();
  expect(getByText("TH")).toBeInTheDocument();
  expect(getByText("EN")).toBeInTheDocument();
});
