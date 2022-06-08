interface INumberViewProps {
  number: number;
}

const NumberView: React.FunctionComponent<INumberViewProps> = (props) => {
  return <div style={{ backgroundColor: "#fafafa", padding: "2rem", marginTop: "2rem" }}>Showing NumberView {props.number}, This is a V component</div>;
};

export default NumberView;
