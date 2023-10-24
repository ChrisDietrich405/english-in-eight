"use client";
import * as React from "react";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import Dropdown from "../Dropdown";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import styles from "./styles.module.css";

const MenuPopupState = ({ dropdown, title }) => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });

  return (
    <React.Fragment>
      <div
        disableFocusRipple={true}
        id={title}
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableelevation="true"
        {...bindHover(popupState)}
      >
        {title}
        <KeyboardArrowDownIcon
          className={{
            "menu-chevron": true,
            "menu-chevron--active": popupState.isOpen,
          }}
        />
      </div>
      <HoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Dropdown dropdownProps={dropdown} />
      </HoverMenu>
    </React.Fragment>
  );
};

export default MenuPopupState;
