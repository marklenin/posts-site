import { createContext, useContext, useEffect, useReducer } from "react";
import { API } from "../helpers/consts";
import axios from "axios";

export const postContext = createContext();
export const usePost = () => useContext(postContext);

const INIT_STATE = {
  posts: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};

function PostContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getPosts = async () => {
    let { data } = await axios(API);
    dispatch({
      type: "GET_POSTS",
      payload: data,
    });
  };
  const values = { getPosts, posts: state.posts };
  return <postContext.Provider value={values}>{children}</postContext.Provider>;
}

export default PostContextProvider;
