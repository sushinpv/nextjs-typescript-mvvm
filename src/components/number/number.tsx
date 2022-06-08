import NumberView from "./number-view";

interface INumberProps {
  number: number;
}

const Number: React.FunctionComponent<INumberProps> = (props) => {
  return <NumberView number={props.number} />;
};

export default Number;
