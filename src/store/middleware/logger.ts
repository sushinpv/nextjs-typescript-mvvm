const logger = (param: any) => (store: any) => (next: Dispatch) => (action: any) => {
  // console.log('logger', param);
  return next(action);
};

export default logger;
