const initialState = {
  counter: 100
};

//action
export const Increment = () => {
  return {
    type: "Increment",
    payload: 1
  };
};
export const Decrement = () => {
  return {
    type: "Decrement",
    payload: 1
  };
};
export const AddAmount = () => {
  return {
    type: "Add",
    payload: 5
  };
};
export const DeductAmount = () => {
  return {
    type: "Subtract",
    payload: 5
  };
};
//reducer
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case "Decrement":
      return {
        ...state,
        counter: state.counter - action.payload
      };
    case "Add":
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case "Subtract":
      return {
        ...state,
        counter: state.counter - action.payload
      };

    default:
      return state;
  }
};
