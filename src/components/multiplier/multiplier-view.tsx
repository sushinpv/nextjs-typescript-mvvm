interface IMultiplierViewProps {
  total: Number;
  defaultValue: number;
}

const MultiplierView: React.FunctionComponent<IMultiplierViewProps> = (props) => {
  return (
    <div style={{ backgroundColor: "#fafafa", padding: "2rem", marginTop: "2rem" }}>
      <p>Final Value: {props.total}, This is a VVM component</p>
      <p>This value is from state : {props.defaultValue}</p>
    </div>
  );
};

export default MultiplierView;
