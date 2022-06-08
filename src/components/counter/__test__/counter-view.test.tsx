import { render } from "@testing-library/react";
import CounterView from "../counter-view";

test("on Click of function the counter value should increase", () => {
  const { getByText } = render(<CounterView counter={0} onClick={() => {}} />);

  const counter = getByText(/counter/i);
  const click = getByText(/Click Me/i);

  expect(counter.textContent).toBe("counter : 0");
  expect(click.textContent).toBe("Click Me");
});
