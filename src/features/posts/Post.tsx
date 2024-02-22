import { IonItem, IonLabel, IonText, IonNote, IonIcon } from "@ionic/react";
import { chevronForward } from "ionicons/icons";
import {} from "react";
import { format } from "date-fns";

interface PostProps {
  title: string;
  content: string;
  createdAt: string;
  style?: Partial<CSSStyleDeclaration>;
}

export default function Post({ title, content, createdAt, style }: PostProps) {
  const maxCharacters = 50;
  const truncateContent = (text: string, maxCharacters: number) => {
    if (text.length > maxCharacters) {
      return text.slice(0, maxCharacters) + "...";
    }
    return text;
  };

  const truncatedContent = truncateContent(content, maxCharacters);

  const formattedDate = (date: string) =>
    format(new Date(date), "dd MMMM yyyy, hh:mm");

  return (
    <IonItem button={true} detail={false} style={style}>
      <IonLabel>
        <IonText>{title}</IonText>
        <br />
        <IonNote color="medium" className="ion-text-wrap">
          {truncatedContent}
        </IonNote>
      </IonLabel>
      <div className="metadata-end-wrapper" slot="end">
        <IonNote color="medium">
          <small>{formattedDate(createdAt)}</small>
        </IonNote>
        <IonIcon color="medium" icon={chevronForward}></IonIcon>
      </div>
    </IonItem>
  );
}
