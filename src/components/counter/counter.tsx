import CounterView from "./counter-view";
import useCounterViewModel from "./counter-view-model";

export interface ICounterProps {}

export function Counter(props: ICounterProps) {
  const { counter, onClick } = useCounterViewModel({});

  return <CounterView counter={counter} onClick={onClick} type="C"/>;
}
