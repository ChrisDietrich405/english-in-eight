import React, { useState } from "react";
import Link from "next/link";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const OtherTopicsSubmenuDropdownMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const dropdownProps = [
    {
      title: "Prepositions Definition",
      link: "/prepositions-definition",
    },
    {
      title: "Prepositions of Time",
      link: "/prepositions-definition/prepositions-of-time",
    },
    {
      title: "Prepositions of Movement",
      link: "/prepositions-definition/prepositions-of-movement",
    },
    {
      title: "Prepositions of Place",
      link: "/prepositions-definition/prepositions-of-place",
    },
    {
      title: "Dependent Prepositions",
      link: "/prepositions-definition/dependent-prepositions",
    },
  ];

  return (
    <ul className="dropdown-list-link-container">
      <li className="dropdown-list-link" onClick={handleToggleMenu}>
        Other Topics{" "}
        {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
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

export default OtherTopicsSubmenuDropdownMobile;
