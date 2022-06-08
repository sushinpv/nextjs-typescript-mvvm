export interface IMultiplierProps {
  number: number;
}

export function useMultiplier(props: IMultiplierProps) {
  const total: number = props.number * 10;
  return { total };
}
