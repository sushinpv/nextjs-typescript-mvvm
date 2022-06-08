import NumberView from "./number-view";

interface INumberProps {
  number: number;
  onClick: () => {};
}

const Number: React.FunctionComponent<INumberProps> = (props) => {
  return <NumberView number={props.number} onClick={props.onClick} />;
};

export default Number;
