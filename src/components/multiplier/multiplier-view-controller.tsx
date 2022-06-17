import { useEffect, useState } from "react";

const useMultiplierController = (props: IMultiplierControllerProps) => {
  const total: number = props.number * 10;
  const [defaultValue, setDefaultValue] = useState(1);

  useEffect(() => {
    setDefaultValue(props.number * 5);
  }, [props.number]);

  return { total, defaultValue };
};

export default useMultiplierController;
