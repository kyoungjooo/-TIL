const userReducer = (state = [{ id: 1, name: "경주" }], action) => {
  switch (action.type) {
    case "add_user":
      return [...state, action.payload];
    case "delete_user":
      return state.filter((el) => el.id !== action.payload.id);
    default:
      return state;
  }
};
export default userReducer;
