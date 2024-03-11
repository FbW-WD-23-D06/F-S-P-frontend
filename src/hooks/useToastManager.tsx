import { useIonToast } from "@ionic/react";
import { useEffect } from "react";

export interface ToastInfo {
  message: string;
  color: "danger" | "warning" | "success" | "";
  duration?: number | null;
  buttons?: "dismiss";
}
interface ToastManagerProps {
  toastInfo: ToastInfo;
  setToastInfo: (toastInfo: ToastInfo) => void;
  setIsToastVisible: (isToastVisible: boolean) => void;
}

/**
 * @description // Show toast when toastInfo changes
 * @param toastInfo: ToastInfo object with message, color, duration and buttons properties.
 * @param setIsToastVisible: Function to set isToastVisible state for disabling buttons while toast is visible.
 */

export default function useToastManager({
  toastInfo,
  setToastInfo,
  setIsToastVisible,
}: ToastManagerProps) {
  const [presentToast] = useIonToast();

  useEffect(() => {
    if (toastInfo.message) {
      setIsToastVisible(true);
      presentToast({
        message: toastInfo.message,
        color: toastInfo.color,
        position: "bottom",
        duration:
          toastInfo.duration === null ? undefined : toastInfo.duration || 3000,
        buttons:
          toastInfo.buttons === "dismiss"
            ? [
                {
                  text: "Dismiss",
                  role: "cancel",
                },
              ]
            : undefined,
        onDidDismiss: () => {
          setIsToastVisible(false);
          setToastInfo({ message: "", color: "" });
        },
      });
    }
  }, [toastInfo, presentToast, setIsToastVisible, setToastInfo]);
}
