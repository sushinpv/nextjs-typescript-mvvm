interface ICounterViewProps {
  counter: number;
  onClick: any;
  type?: "A" | "B" | "C";
  components: {
    Multiplier: React.FunctionComponent<IMultiplierProps>;
    Number: React.FunctionComponent<INumberProps>;
  };
}
