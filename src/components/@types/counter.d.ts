interface ICounterViewProps {
  counter: number;
  onClick: any;
  type?: "A" | "B" | "C";
  components: {
    Multiplier: React.FunctionComponent<IMultiplierViewProps>;
    Number: React.FunctionComponent<INumberViewProps>;
  };
}
