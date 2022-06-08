import { useEffect, useState } from "react";

export interface IMultiplierProps {
  number: number;
}

export function useMultiplier(props: IMultiplierProps) {
  const total: number = props.number * 10;
  const [defaultValue, setDefaultValue] = useState(1);

  useEffect(() => {
    setDefaultValue(props.number * 5);
  }, [props.number]);

  return { total, defaultValue };
}
