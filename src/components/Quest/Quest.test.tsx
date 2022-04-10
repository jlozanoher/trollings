import { render, screen, act, waitFor } from "@testing-library/react";
import { questTest } from "../../test-utils/WithGameContext";
import Quest from "./Quest";

test("Quest renders depending of state", async () => {
  jest.useFakeTimers();
  render(<Quest quest={questTest} />);

  const node = await screen.findByRole("quest");
  expect(node).toBeDefined();
  expect(node).toHaveClass("uncompleted");
});
