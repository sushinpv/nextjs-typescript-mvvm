import { useState } from "react";

/**
 * View Controller for counter
 * @param props
 * @returns
 */
const useCounterViewController = (props: ICounterViewControllerProps) => {
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
export default useCounterViewController;
