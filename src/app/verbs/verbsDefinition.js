import ContentPage from "../../components/ContentPage";
import PresentTenseVerbDefinition from "./present-verb-tenses/PresentTenseVerbDefinition";
import PastTenseVerbDefinition from "./past-verb-tenses/PastTenseVerbDefinition";
import FutureTenseVerbDefinition from "./future-verb-tenses/FutureTenseVerbDefinition";
import VerbsDef from "./verbs-definition/VerbsDef";

export default function VerbsDefinition() {
  return (
    <ContentPage
      links={[
        {
          title: "Verbs Definition",
          path: "/verbs-definition/verbs-def",
          component: VerbsDef,
        },
        {
          title: "Present Tense Verbs",
          path: "/verbs-definition/present-tense",
          component: PresentTenseVerbDefinition,
        },
        {
          title: "Past Tense Verbs",
          path: "/verbs-definition/past-tense",
          component: PastTenseVerbDefinition,
        },
        {
          title: "Future Tense Verbs",
          path: "/verbs-definition/future-tense",
          component: FutureTenseVerbDefinition,
        },
      ]}
    />
  );
}
