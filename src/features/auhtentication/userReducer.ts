interface UserState {
  userName: string;
  isLoggedIn: boolean;
}

interface Login {
  type: "login";
  field: keyof UserState;
  value: string;
}

interface FetchuserData {
  type: "fetch-user-data";
  value: UserState;
}

type UserAction = Login | FetchuserData;

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
