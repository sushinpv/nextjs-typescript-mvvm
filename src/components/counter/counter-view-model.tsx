import { useState } from "react";

export interface ICounterViewModelProps {}

/**
 * view model for counter
 * @param props
 * @returns
 */
const useCounterViewModel = (props: ICounterViewModelProps) => {
  const [counter, setCounter] = useState(0);

  /**
   * Function to handle click and update the counter
   */
  const onClick = () => {
    setCounter(counter + 1);
  };

  return {
    onClick,
    counter,
  };
};
export default useCounterViewModel;
