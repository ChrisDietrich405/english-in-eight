import * as React from "react";
import { styled, alpha } from "@mui/material/styles";

import SubmenuDropdown from "../SubmenuDropdown";
import Menu from "@mui/material/Menu";


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
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

  return <SubmenuDropdown dropdown={dropdownProps} title="Other Topics" />;
}
