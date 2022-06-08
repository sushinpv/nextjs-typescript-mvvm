import * as React from "react";

interface IMultiplierViewProps {
  total: Number;
}

const MultiplierView: React.FunctionComponent<IMultiplierViewProps> = (props) => {
  return <div style={{ backgroundColor: "#fafafa", padding: "2rem", marginTop: "2rem" }}>Final Value: {props.total}, This is a VVM component</div>;
};

export default MultiplierView;
