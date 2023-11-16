import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import NounsSubmenuDropdownMobile from "../NounsSubmenuDropdownMobile";
import PrepositionsSubmenuDropdownMobile from "../PrepositionsSubmenuDropdownMobile";
import VerbsSubmenuDropdownMobile from "../VerbsSubmenuDropdownMobile";
import AdjectivesSubmenuDropdownMobile from "../AdjectivesSubmenuDropdownMobile";
import OtherTopicsSubmenuDropdownMobile from "../OtherTopicsSubmenuDropdownMobile";

const navItems = [
  <NounsSubmenuDropdownMobile />,
  <PrepositionsSubmenuDropdownMobile />,
  <VerbsSubmenuDropdownMobile />,
  <AdjectivesSubmenuDropdownMobile />,
  <OtherTopicsSubmenuDropdownMobile />,
];

const dropdownProps = [
  {
    title: "Noun Definition",
    link: "/nouns-definition",
  },
  {
    title: " Uncountable & Countable Nouns",
    link: "/nouns-definition/uncountable-countable-nouns",
  },
  {
    title: " Collective Nouns",
    link: "/nouns-definition/collective-nouns",
  },
  {
    title: "Noun Modifiers",
    link: "/nouns-definition/noun-modifiers",
  },
  {
    title: " Possessive Pronouns",
    link: "/nouns-definition/possessive-pronouns",
  },
];

export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Nouns</Typography>
        </AccordionSummary>
        {dropdownProps.map((dropdownItem) => {
          return (
            <AccordionDetails>           
              <Typography>{dropdownItem.title}</Typography>
            </AccordionDetails>
          );
        })}
      </Accordion>
    </div>
  );
}
