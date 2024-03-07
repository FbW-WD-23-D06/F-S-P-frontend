import { createContext, useContext, useReducer, ReactNode } from "react";

const initialState = {
    userName: null,
    password: null,
    isLoggedIn: false,
};

export const UserContext = createContext<{
    userState: UserState;
    dispatch: React.Dispatch<UserAction>;
  }>({
    userState: initialState,
    dispatch: () => null,
  });
  
export const useUserContext = () => useContext(UserContext);

interface UserState {
    userName: string | null;
    password: string | null;
    isLoggedIn: boolean;
  }
  
  type UserAction = {
    type: "login";
    field: keyof UserState;
    value: string;
  };

function UserReducer(state: UserState, action: UserAction) {
    console.log(action);
  switch (action.type) {
    case "login":
      return {
        ...state,
        // set username:
        [action.field]: action.value,
        isLoggedIn: true,
      };
    default:
      break;
    }
  return state;
}

const UserContextProvider = ({ children } : { children: ReactNode }) => {
    const [userState, dispatch] = useReducer(UserReducer, initialState);
  
    return (
      <UserContext.Provider value={{ userState, dispatch }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export default UserContextProvider;