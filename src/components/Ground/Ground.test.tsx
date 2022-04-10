import { render, screen } from "@testing-library/react";
import { questTest, WithGameContext } from "../../test-utils/WithGameContext";
import Ground from "./Ground";

test("Ground components renders with all trollings", async () => {
  render(
    <WithGameContext>
      <Ground trollings={questTest.trollings} />
    </WithGameContext>
  );
  // The ground is renderer with 3 trollings
  expect(await screen.findAllByTitle("trolling")).toHaveLength(3);
  // There are one of each
  expect(await screen.findAllByRole("princess")).toHaveLength(1);
  expect(await screen.findAllByRole("troll")).toHaveLength(1);
});
