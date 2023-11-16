import React, { useState } from "react";
import Link from "next/link";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const NounsSubmenuDropdownMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

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

  return (
    <ul className="dropdown-list-link-container">
      <li className="dropdown-list-link" onClick={handleToggleMenu}>
        Nouns{isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </li>

      {isOpen && (
        <span className="skip-click">
          {dropdownProps.map((item, index) => {
            return (
              <li className="dropdown-list-link">
                <Link href={item.link}>{item.title} </Link>
              </li>
            );
          })}
        </span>
      )}
    </ul>
  );
};

export default NounsSubmenuDropdownMobile;
