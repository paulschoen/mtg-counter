import React from "react";

interface PlayerLifeTotalProps {
  lifeTotal: number;
}

const PlayerLifeTotal = (props: PlayerLifeTotalProps) => {
  const { lifeTotal } = props;
  return <h2>{lifeTotal}</h2>;
};

export default PlayerLifeTotal;
