import React, { useState } from "react";
import PlayerPanel from "../PlayerPanel";
import { Player } from "../../types/PlayerType";

interface InitPropsTypes {
  initPlayers?: Player[];
}

const PlayerPanelList = (props: InitPropsTypes) => {
  const { initPlayers } = props;
  const [players, setPlayers] = useState<Player[]>(initPlayers ?? []);
  return (
    <div>
      {players.map((player) => (
        <PlayerPanel key={player.id} player={player} />
      ))}
    </div>
  );
};

export default PlayerPanelList;
