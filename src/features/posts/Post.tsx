import { IonIcon, IonItem, IonLabel, IonNote, IonText } from "@ionic/react";
import { formatDate } from "date-fns";
import { chevronForward } from "ionicons/icons";
import { truncateContent } from "../../utils/text";

interface PostProps {
  title: string;
  content: string;
  updatedAt: string;
  style?: Partial<CSSStyleDeclaration>;
}

export default function Post({ title, content, updatedAt, style }: PostProps) {
  const maxCharacters = 72;
  const truncatedContent = truncateContent(content, maxCharacters);

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
          <small>{updatedAt}</small>
        </IonNote>
      </IonLabel>
      <div slot="end">
        <IonIcon color="medium" icon={chevronForward} />
      </div>
    </IonItem>
  );
}
