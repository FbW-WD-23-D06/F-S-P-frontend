import {
  IonButton,
  IonIcon,
  IonInput,
  IonItem,
  IonSpinner,
} from "@ionic/react";
import axios from "axios";
import { eye, lockClosed } from "ionicons/icons";
import { FormEvent, useState } from "react";
import { useAppContext } from "../../contexts/AppContext";
import { endpoints } from "../../data/api";
import useToastManager, { ToastInfo } from "../../hooks/useToastManager";
import { validations } from "./validations";
import { useHistory } from "react-router";
import { paths } from "../navigation/routing/paths";

interface AuthFormProps {
  authType: "register" | "login";
}

export default function AuthForm({ authType }: AuthFormProps) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastInfo, setToastInfo] = useState<ToastInfo>({
    message: "",
    color: "",
  });

  const [isPassword, setIsPassword] = useState(true);
  const { dispatchUser } = useAppContext();

  useToastManager({ toastInfo, setToastInfo, setIsToastVisible });

  const history = useHistory();

  const successSendAction = () => {
    setUsername("");
    setPassword("");
  };

  const isUserNameValid = validations.userName(userName) === true;
  const isPasswordValid = validations.password(password) === true;

  const isRegister = authType === "register";
  const isLogin = authType === "login";

  const buttonText = isRegister ? "Register" : "Login";

  const navigateAfterSuccess = () => {
    setTimeout(() => {
      history.push(paths.profile);
    }, 2000);
  };

  const authUser = async () => {
    const user = {
      userName,
      password,
    };

    const failedMessages = {
      login: "Login failed.",
      register: "Registration failed.",
    };

    const loginHeaders = {
      withCredentials: true,
    };

    try {
      const response = await axios.post(
        isRegister ? endpoints.register : endpoints.login,
        user,
        isRegister ? {} : loginHeaders
      );

      const data = await response.data;
      console.log("🚀 ~ authUser ~ data:", data);
      console.log("response.status:", response.status);
      if (response.status !== 200) {
        throw new Error(
          data.error?.message || data?.message || failedMessages[authType]
        );
      }
      if (isLogin) {
        dispatchUser({ type: "fetch-user-data", value: data.user });
      }
      successSendAction();
      return data;
    } catch (error) {
      console.error("🚀 ~ authentication ~ error:", error);
      throw error;
    }
  };

  const hanldeAuthentication = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authUser();
      setToastInfo({
        message: `${isRegister ? "Registration" : "Login"} successful!`,
        color: "success",
        duration: 2000,
      });
      navigateAfterSuccess();
    } catch (err: any) {
      console.error("Register user error:", err);
      setToastInfo({
        message: err.message,
        color: "danger",
        duration: 10000,
        buttons: "dismiss",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUserNameChange = (e: CustomEvent) => {
    const newUserName = e.detail.value;
    setUsername(newUserName);
  };

  const handlePasswordChange = (e: CustomEvent) => {
    const newPassword = e.detail.value;
    setPassword(newPassword);
  };

  return (
    <form onSubmit={hanldeAuthentication}>
      <IonItem>
        <IonInput
          className={`${isUserNameValid && "ion-valid"} ${
            !isUserNameValid && "ion-invalid"
          }`}
          label="User Name"
          labelPlacement="floating"
          value={userName}
          onIonInput={handleUserNameChange}
          minlength={2}
          maxlength={15}
          required
          counter
          helperText="The user name is required and must contain at least 2 and max. 15 characters."
          errorText="Invalid user name"
        />
      </IonItem>

      <IonItem>
        <IonInput
          className={`${isPasswordValid && "ion-valid"} ${
            !isPasswordValid && "ion-invalid"
          }`}
          label="Password"
          labelPlacement="floating"
          type={isPassword ? "password" : "text"}
          value={password}
          onIonInput={handlePasswordChange}
          minlength={8}
          maxlength={30}
          counter
          required
          helperText="The password must contain at least 1 number, 1 lowercase and uppercase character, one special character and be at least 8 characters long."
          errorText="Invalid password"
        >
          <IonIcon
            icon={isPassword ? eye : lockClosed}
            slot="end"
            onClick={() => setIsPassword(!isPassword)}
          />
        </IonInput>
      </IonItem>

      <IonButton
        className="ion-margin"
        disabled={
          isToastVisible || loading || !isUserNameValid || !isPasswordValid
        }
        type="submit"
        expand="block"
        style={{ marginTop: 20 }}
      >
        {loading ? <IonSpinner /> : buttonText}
      </IonButton>
    </form>
  );
}
