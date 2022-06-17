import Multiplier from "../multiplier";
import Number from "../number";
import CounterView from "./counter-view";
import useCounterViewController from "./counter-view-controller";

const Counter: React.FunctionComponent<ICounterProps> = (props) => {
  const { counter, onClick } = useCounterViewController({});

  return <CounterView counter={counter} onClick={onClick} type="A" components={{ Number, Multiplier }} />;
};

export default Counter;
