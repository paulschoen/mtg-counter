import React from "react";

interface PlayerNameTotalProps {
  name: string;
}

const Name = (props: PlayerNameTotalProps) => {
  const { name } = props;
  return <h2>{name}</h2>;
};

export default Name;
