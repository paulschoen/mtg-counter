import React from "react";
import { render, screen } from "@testing-library/react";
import Name from "./Name";

test("renders Chandra", () => {
  render(<Name name={"Chandra"} />);
  const nameElement = screen.getByText(/chandra/i);
  expect(nameElement).toBeInTheDocument();
});

test("renders Jace", () => {
  render(<Name name={"Jace"} />);
  const nameElement = screen.getByText(/jace/i);
  expect(nameElement).toBeInTheDocument();
});
