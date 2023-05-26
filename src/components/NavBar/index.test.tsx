import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import NavBar from ".";
import ReduxProvider from "../../provider/ReduxProvider";

test("Renders NavBar", () => {
  /**
   * to render movie card in ui
   */
  const { getByText } = render(
    <ReduxProvider>
      <NavBar />
    </ReduxProvider>
  );

  expect(getByText("MOVIES CATCHER")).toBeInTheDocument();
  expect(getByText("TH")).toBeInTheDocument();
  expect(getByText("EN")).toBeInTheDocument();
});
