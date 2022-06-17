import NumberView from "./number-view";

const Number: React.FunctionComponent<INumberProps> = (props) => {
  return <NumberView number={props.number} onClick={props.onClick} />;
};

export default Number;
