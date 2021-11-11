import React from "react";
import { render, screen } from "@testing-library/react";
import LifeTotal from "./LifeTotal";

test("renders 20", () => {
  render(<LifeTotal lifeTotal={20} />);
  const lifeTotalElement = screen.getByText(/20/i);
  expect(lifeTotalElement).toBeInTheDocument();
});

test("renders 0", () => {
  render(<LifeTotal lifeTotal={0} />);
  const lifeTotalElement = screen.getByText(/0/i);
  expect(lifeTotalElement).toBeInTheDocument();
});
