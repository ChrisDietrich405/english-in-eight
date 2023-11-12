import React, { useState } from "react";
import Link from "next/link";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const VerbsSubmenuDropdownMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const dropdownProps = [
    {
      title: "Verb Definition",
      link: "/verbs-definition/home",
    },
    {
      title: "Present Tense Verbs",
      link: "/verbs-definition/present-tense",
    },
    {
      title: "Past Tense Verbs",
      link: "/verbs-definition/past-tense",
    },
    {
      title: "Future Tense Verbs",
      link: "/verbs-definition/future",
    },
  ];

  return (
    <ul className="dropdown-list-link-container">
      <li className="dropdown-list-link" onClick={handleToggleMenu}>
        Verbs{isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
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

export default VerbsSubmenuDropdownMobile;
