import MultiplierView from "./multiplier-view";
import { useMultiplier } from "./multiplier-view-model";

interface IMultiplierProps {
  number: number;
}

const Multiplier: React.FunctionComponent<IMultiplierProps> = (props) => {
  const { total, defaultValue } = useMultiplier({ number: props.number });
  return <MultiplierView total={total} defaultValue={defaultValue} />;
};

export default Multiplier;
