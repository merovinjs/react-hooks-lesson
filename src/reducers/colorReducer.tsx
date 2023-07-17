export const colorReducer = (state: any, action: any) => {
  switch (action.type) {
    case "black":
      return { backGroundColor: "#000" };
    case "red":
      return { backGroundColor: "#f00" };
    case "turner":
      if (state.backGroundColor === "#000") {
        return { backGroundColor: "#f00" };
      } else {
        return { backGroundColor: "#000" };
      }
    default:
      return state;
  }
};
