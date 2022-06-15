interface Dispatch<A extends Action = AnyAction> {
  <T extends A>(action: T): T;
}
