import ContentPage from "../../components/ContentPage";
// import UncountableAndCountable from "./noun-categories/UncountableAndCountable";
// import Collective from "./noun-categories/Collective";
// import PossessivePronouns from "./noun-categories/PossessivePronouns";
import NounDefinition from "./categories/definition/page";
// import NounModifiers from "./noun-categories/NounModifiers";

export default function Noun() {
  return (
    <ContentPage
      links={[
        {
          title: "Noun Definition",
          path: "/categories/definition",
          component: NounDefinition,
        },
        // {
        //   title: "Countable & Uncountable",
        //   path: "/noun-categories/uncountable-and-countable",
        //   component: UncountableAndCountable,
        // },
        // {
        //   title: "Collective",
        //   path: "/noun-categories/collective",
        //   component: Collective,
        // },
        // {
        //   title: "Possessive Pronouns",
        //   path: "/noun-categories/possessive-pronouns",
        //   component: PossessivePronouns,
        // },
        // {
        //   title: "Modifiers",
        //   path: "/noun-categories/noun-modifiers",
        //   component: NounModifiers,
        // },
      ]}
    />
  );
}
