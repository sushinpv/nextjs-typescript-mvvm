import MultiplierView from "./multiplier-view";
import useMultiplierController from "./multiplier-view-controller";

interface IMultiplierProps {
  number: number;
}

const Multiplier: React.FunctionComponent<IMultiplierProps> = (props) => {
  const { total, defaultValue } = useMultiplierController({ number: props.number });
  return <MultiplierView total={total} defaultValue={defaultValue} />;
};

export default Multiplier;
