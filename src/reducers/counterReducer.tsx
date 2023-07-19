const counterReducer = (state: any, action: any) => {
  if (action.type === "INCREMENT") {
    return { age: state.age + 1 };
  } else if (action.type === "DECREMENT") {
    return { age: state.age - 1 };
  }
  throw Error("Unknown action.");
};

export { counterReducer };
