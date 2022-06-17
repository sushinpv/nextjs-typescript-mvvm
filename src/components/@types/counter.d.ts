interface ICounterViewProps {
  counter: number;
  onClick: any;
  type?: "A" | "B" | "C";
  components: {
    Multiplier: React.FunctionComponent<any>;
    Number: React.FunctionComponent<any>;
  };
}
