import React from "react";
import { Player } from "../../types/PlayerType";
import LifeTotal from "./LifeTotal";
import Name from "./Name";

const PlayerPanel = (props: { player: Player }) => {
  const { player } = props;
  return (
    <div>
      <Name name={player.name} />
      <LifeTotal lifeTotal={player.lifeTotal} />
    </div>
  );
};

export default PlayerPanel;
