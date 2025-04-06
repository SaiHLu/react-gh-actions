import React from "react";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders name", async () => {
  render(<App />);

  expect(screen.getByText("Vite + React")).toBeDefined;
});
