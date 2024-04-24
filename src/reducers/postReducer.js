const postReducer = (state, action) => {
  switch (action.type) {
    case "fillPost":
      return {
        ...state,
        post: action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;
