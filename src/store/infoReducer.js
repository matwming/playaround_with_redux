import axios from "axios";
const initialState = {
  info: {
    title: null
  },
  loading: false
};

//action
export const getValue = () => {
  return {
    type: "GetInfo",
    payload: 1
  };
};

export const showValue = value => {
  return {
    type: "ShowValue",
    payload: value
  };
};
const showLoading = value => {
  return {
    type: "Loading",
    payload: value
  };
};
export const getValueFromServer = () => {
  return (dispatch, getState) => {
    dispatch(showLoading(true));
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(json => {
        console.log(json),
          dispatch(showValue(json), dispatch(showLoading(false)));
      });
  };
};
//reducer
export const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GetInfo":
      return {
        ...state,
        title: action.payload
      };
    case "ShowValue":
      return {
        info: {
          ...state.info,
          title: action.payload.title
        }
      };
    case "Loading":
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
