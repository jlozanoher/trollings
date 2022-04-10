import { render, screen, act, waitFor } from "@testing-library/react";
import { questTest } from "../../test-utils/WithGameContext";
import Trolling from "./Trolling";

test("Trolling component renders and changes position over time", async () => {
  jest.useFakeTimers();
  render(<Trolling trolling={questTest.trollings[0]} />);

  // The ground is renderer with 3 trollings
  expect(await screen.findAllByTitle("trolling")).toHaveLength(1);
  // There are one of each
  expect(await screen.findAllByRole("orc")).toHaveLength(1);

  expect(await screen.findByRole("orc")).toHaveStyle("left: 10%; top: 10%;");

  // The position changes every second, so, has to be changed in 1.2s
  act(() => {
    jest.advanceTimersByTime(1200);
  });

  // Here, the position has to be different than the initial one
  expect(await screen.findByRole("orc")).not.toHaveStyle(
    "left: 10%; top: 10%;"
  );
});
