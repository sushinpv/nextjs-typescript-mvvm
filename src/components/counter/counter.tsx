import CounterView from "./counter-view";
import useCounterViewModel from "./counter-view-model";

export interface ICounterProps {}

type CounterFunc = (props: ICounterProps) => void;

const Counter: CounterFunc = (props) => {
  const { counter, onClick } = useCounterViewModel({});

  return <CounterView counter={counter} onClick={onClick} type="A" />;
};

export default Counter;
