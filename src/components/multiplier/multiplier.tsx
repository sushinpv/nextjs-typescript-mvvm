import * as React from "react";
import MultiplierView from "./multiplier-view";
import { useMultiplier } from "./multiplier-view-model";

interface IMultiplierProps {
  number: number;
}

const Multiplier: React.FunctionComponent<IMultiplierProps> = (props) => {
  const { total } = useMultiplier({ number: props.number });
  return <MultiplierView total={total} />;
};

export default Multiplier;
