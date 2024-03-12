interface UserState {
  userName: string | null;
  isLoggedIn: boolean;
}

interface UserAction {
  type: "login";
  field: keyof UserState;
  value: string;
}

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
    default:
      break;
  }
  return state;
}

export type { UserState, UserAction };
