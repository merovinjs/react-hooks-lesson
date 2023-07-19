export const colorReducer = (state: any, action: any) => {
  switch (action.type) {
    case "black":
      return { backgroundColor: "#000" };
    case "red":
      return { backgroundColor: "#f00" };
    case "turner":
      if (state.backgroundColor === "#000") {
        return { backgroundColor: "#f00" };
      } else {
        return { backgroundColor: "#000" };
      }
    default:
      return state;
  }
};
