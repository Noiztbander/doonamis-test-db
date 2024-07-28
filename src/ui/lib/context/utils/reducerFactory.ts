const reducerFactory = (state: any, action: any, handlers: any) => {
  const handler = handlers[action.type];

  if (handler) {
    return handler(state, action);
  }

  return state;
};

export default reducerFactory;
