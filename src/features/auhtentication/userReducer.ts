import { initialState } from "../../contexts/AppContext";
interface UserState {
  _id: string;
  userName: string;
  avatarImg: string;
  isLoggedIn: boolean;
}

interface Login {
  type: "login";
  field: keyof UserState;
  value: string;
}

interface Logout {
  type: "logout";
}

interface FetchuserData {
  type: "fetch-user-data";
  value: UserState;
}

type UserAction = Login | Logout | FetchuserData;

export default function UserReducer(state: UserState, action: UserAction) {
  console.log(action);
  switch (action.type) {
    case "login":
      return {
        ...state,
        // set username:
        [action.field]: action.value,
        isLoggedIn: true,
      };
    case "logout":
      return {
        ...initialState,
      };
    case "fetch-user-data":
      const newState = action.value;
      return {
        ...newState,
        isLoggedIn: true,
      };
    default:
      break;
  }
  return state;
}

export type { UserState, UserAction };
