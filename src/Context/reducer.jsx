const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTIONS":
      return {
        ...state,
        transaction: state.transaction.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "ADD_TRANSACTIONS":
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
      };

    default:
      return state;
  }
};

export default reducer;
