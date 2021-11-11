import React from "react";
import { render, screen } from "@testing-library/react";
import PlayerPanelList from "./PlayerPanelList";
import { Player } from "../../types/PlayerType";

const mockPlayers: Player[] = [
  {
    id: "1",
    name: "Chandra",
    lifeTotal: 20,
  },
  {
    id: "2",
    name: "Jace",
    lifeTotal: 30,
  },
];

const mockPlayersTwo: Player[] = [
  {
    id: "1",
    name: "Chandra",
    lifeTotal: 20,
  },
  {
    id: "2",
    name: "Chandra",
    lifeTotal: 20,
  },
];

test("renders without any players", () => {
  render(<PlayerPanelList />);
  expect(screen).toBe(screen);
});

test("renders Chandra and lifetotal", () => {
  render(<PlayerPanelList initPlayers={mockPlayers} />);
  const nameElement = screen.getByText(/chandra/i);
  const lifeTotalElement = screen.getByText(/20/i);
  expect(nameElement).toBeInTheDocument();
  expect(lifeTotalElement).toBeInTheDocument();
});

test("renders Jace and lifetotal", () => {
  render(<PlayerPanelList initPlayers={mockPlayers} />);
  const nameElement = screen.getByText(/jace/i);
  const lifeTotalElement = screen.getByText(/20/i);
  expect(nameElement).toBeInTheDocument();
  expect(lifeTotalElement).toBeInTheDocument();
});

test("renders twice with two players", async () => {
  const { getAllByText } = await render(
    <PlayerPanelList initPlayers={mockPlayersTwo} />
  );
  const allNameElements = getAllByText(/chandra/i);
  expect(allNameElements).toHaveLength(2);
});
