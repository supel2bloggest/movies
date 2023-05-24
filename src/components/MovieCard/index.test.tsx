import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import MovieCard from ".";

test("Renders MovieCard", () => {
  /**
   * to render movie card in ui
   */
  const { getByText } = render(
    <MovieCard
      image="/public/images/avenger-1.jpeg"
      title={"avenger"}
      description={"description"}
    />
  );

  expect(getByText("avenger")).toBeInTheDocument();
  expect(getByText("description")).toBeInTheDocument();
});
