import React, { useState } from "react";
import Link from "next/link";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const AdjectivesSubmenuDropdownMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const dropdownProps = [
    {
      title: "Adjective Definition",
      link: "/adjectives-definition",
    },
    {
      title: "Possessive Adjectives",
      link: "/adjectives-definition/possessive-adjectives",
    },
    {
      title: "Comparative Adjectives",
      link: "/adjectives-definition/comparative-adjectives",
    },
    {
      title: "Superlative Adjectives",
      link: "/adjectives-definition/superlative-adjectives",
    },
  ];

  return (
    <ul className="dropdown-list-link-container">
      <li className="dropdown-list-link" onClick={handleToggleMenu}>
        Adjectives{isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
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

export default AdjectivesSubmenuDropdownMobile;
