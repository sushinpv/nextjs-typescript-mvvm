import { renderHook, act } from "@testing-library/react-hooks";
import useCounterViewModel from "../counter-view-controller";

test("on Click of function the counter value should increase", () => {
  const { result } = renderHook(() => useCounterViewModel({}));

  act(() => {
    result.current.onClick();
  });

  expect(result.current.counter).toBe(1);
});
