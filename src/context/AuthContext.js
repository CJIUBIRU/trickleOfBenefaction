import { createContext, useReducer , useEffect} from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  //JSON.parse()，可以接收 JSON 字串，轉為 Javascript 物件或是值。
  currentUser: JSON.parse(localStorage.getItem("user"))||null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(()=>{
    //JSON.stringify將任何物件轉變為 JSON 字串
    localStorage.setItem("user", JSON.stringify(state.currentUser))
  },[state.currentUser])

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
