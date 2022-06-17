const CounterView: React.FunctionComponent<ICounterViewProps> = ({ counter, onClick, components: { Multiplier, Number } }) => {
  return (
    <div>
      <div style={{ backgroundColor: "#fafafa", padding: "2rem", marginTop: "2rem" }}>
        <p>counter : {counter}</p>
        <button data-testid="counter-click" onClick={onClick}>
          Click Me
        </button>
        <p>This is a MVVM component</p>
      </div>
      <Number number={counter} onClick={onClick} />
      <Multiplier number={counter} />
    </div>
  );
};

export default CounterView;
