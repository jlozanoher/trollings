import { render, screen } from "@testing-library/react";
import {
  playerTest,
  questTest,
  WithGameContext,
} from "../../test-utils/WithGameContext";
import Header from "./Header";

test("Renders correctely header component, with player and quest data", async () => {
  render(
    <WithGameContext>
      <Header />
    </WithGameContext>
  );

  expect(await screen.findByText(questTest.name)).toBeInTheDocument();
  expect(await screen.findByText(playerTest.title!.name)).toBeInTheDocument();
  expect(
    await screen.findByText(playerTest.title!.description)
  ).toBeInTheDocument();
});
