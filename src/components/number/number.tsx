import NumberView from "./number-view";

type onClickFunc = () => {};

interface INumberProps {
  number: number;
  onClick: onClickFunc;
}

const Number: React.FunctionComponent<INumberProps> = (props) => {
  return <NumberView number={props.number} onClick={props.onClick} />;
};

export default Number;
