import React from "react";
import { render, screen } from "@testing-library/react";
import PlayerPanel from "./PlayerPanel";
import { Player } from "../../types/PlayerType";

const mockPlayer: Player = {
  id: "1",
  name: "Chandra",
  lifeTotal: 20,
};

test("renders Chandra and lifetotal", () => {
  render(<PlayerPanel player={mockPlayer} />);
  const nameElement = screen.getByText(/chandra/i);
  const lifeTotalElement = screen.getByText(/20/i);
  expect(nameElement).toBeInTheDocument();
  expect(lifeTotalElement).toBeInTheDocument();
});
