const toast = (state: StateInstance) => (next: Dispatch) => (action: any) => {
  if (action.type === "api/CallFailed") {
    let payload = action.payload;
    if (payload?.data?.message && (payload?.status || 0) != 401 && (payload?.status || 0) != 498) console.log("error", payload);
  } else return next(action);
};

export default toast;
