interface ICounterViewProps {
  counter: Number | String;
  onClick: any;
  type?: "A" | "B" | "C";
}

const CounterView: React.FunctionComponent<ICounterViewProps> = ({ counter, onClick }) => {
  return (
    <div>
      <p>counter : {counter}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default CounterView;
