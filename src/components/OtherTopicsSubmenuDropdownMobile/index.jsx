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
      title: "Idiomatic Expressions",
      link: "/other-topics/idiomatic-expressions",
    },
    {
      title: "Phrasal Verbs",
      link: "/other-topics/phrasal-verbs",
    },
    {
      title: "Versus",
      link: "/other-topics/versus",
    },
    {
      title: "Blogs",
      link: "/other-topics/blogs",
    },
    {
      title: "Acknowledgements",
      link: "/other-topics/acknowledgements",
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
