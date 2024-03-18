import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";
import UserReducer, {
  UserAction,
  UserState,
} from "../features/auhtentication/userReducer";

export const initialState = {
  id: "",
  userName: "",
  isLoggedIn: false,
};

export const AppContext = createContext<{
  userState: UserState;
  dispatchUser: Dispatch<UserAction>;
}>({
  userState: initialState,
  dispatchUser: () => null,
});

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [userState, dispatchUser] = useReducer(UserReducer, initialState);

  return (
    <AppContext.Provider value={{ userState, dispatchUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
