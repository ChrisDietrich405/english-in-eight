import ContentPage from "../../components/ContentPage";
import UncountableAndCountable from "./noun-categories/UncountableAndCountable";
import Collective from "./noun-categories/Collective";
import PossessivePronouns from "./noun-categories/PossessivePronouns";
import NounDefinition from "./noun-categories/NounDefinition";
import NounModifiers from "./noun-categories/NounModifiers";

export default function nounContent() {
  return (
    <ContentPage
      links={[
        {
          title: "Noun Definition",
          path: "/noun-categories/noun-definition",
          component: NounDefinition,
        },
        {
          title: "Countable & Uncountable",
          path: "/noun-categories/uncountable-and-countable",
          component: UncountableAndCountable,
        },
        {
          title: "Collective",
          path: "/noun-categories/collective",
          component: Collective,
        },
        {
          title: "Possessive Pronouns",
          path: "/noun-categories/possessive-pronouns",
          component: PossessivePronouns,
        },
        {
          title: "Modifiers",
          path: "/noun-categories/noun-modifiers",
          component: NounModifiers,
        },
      ]}
    />
  );
}
