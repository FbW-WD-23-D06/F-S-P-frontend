import { IonItem, IonLabel, IonText, IonNote, IonIcon } from "@ionic/react";
import { chevronForward } from "ionicons/icons";
import {} from "react";
import { format } from "date-fns";

interface PostProps {
  title: string;
  content: string;
  updatedAt: string;
  style?: Partial<CSSStyleDeclaration>;
}

export default function Post({ title, content, updatedAt, style }: PostProps) {
  const maxCharacters = 72;
  const truncateContent = (text: string, maxCharacters: number) => {
    if (text.length > maxCharacters) {
      return text.slice(0, maxCharacters) + "...";
    }
    return text;
  };

  const truncatedContent = truncateContent(content, maxCharacters);

  const formattedDate = (date: string) =>
    format(new Date(date), "dd MMMM yyyy, hh:mm a");

  return (
    <IonItem button={true} detail={false} style={style}>
      <IonLabel>
        <IonText>{title}</IonText>
        <br />
        <IonNote color="medium" className="ion-text-wrap">
          {truncatedContent}
        </IonNote>
        <br />
        <br />
        <IonNote color="medium">
          <small>{formattedDate(updatedAt)}</small>
        </IonNote>
      </IonLabel>
      <div slot="end">
        <IonIcon color="medium" icon={chevronForward} />
      </div>
    </IonItem>
  );
}
