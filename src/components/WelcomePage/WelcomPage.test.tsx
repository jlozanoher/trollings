import { fireEvent, render, screen } from "@testing-library/react";
import WelcomePage from "./WelcomePage";

test("Welcome page go next after click in Begin button", async () => {
  const handleClick = jest.fn();

  render(<WelcomePage onBegin={handleClick} />);

  fireEvent.click(screen.getByText(/begin/i));

  // click on Begin button
  expect(handleClick).toHaveBeenCalledTimes(1);
});
