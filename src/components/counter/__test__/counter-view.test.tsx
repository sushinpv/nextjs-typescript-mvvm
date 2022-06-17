import { render } from "@testing-library/react";
import Multiplier from "../../multiplier";
import Number from "../../number";
import CounterView from "../counter-view";

test("on Click of function the counter value should increase", () => {
  const { getByText, getByTestId } = render(<CounterView counter={0} onClick={() => {}} components={{ Multiplier, Number }} />);

  const counter = getByText(/counter/i);
  const click = getByTestId("counter-click");

  expect(counter.textContent).toBe("counter : 0");
  expect(click.textContent).toBe("Click Me");
});
