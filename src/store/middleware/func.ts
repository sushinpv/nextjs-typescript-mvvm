const func =
  ({ dispatch, getState }: MiddlewareArgs) =>
  (next: Dispatch) =>
  (next: Dispatch) =>
  (action: any) => {
    if (typeof action === "function") action(dispatch, getState);
    else next(action);
  };

export default func;
