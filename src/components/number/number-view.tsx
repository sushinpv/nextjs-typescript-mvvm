interface INumberViewProps {
  number: number;
  onClick: () => {};
}

const NumberView: React.FunctionComponent<INumberViewProps> = ({ number, onClick }) => {
  return (
    <div style={{ backgroundColor: "#fafafa", padding: "2rem", marginTop: "2rem" }}>
      <p>Showing NumberView {number}, This is a V component</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default NumberView;
