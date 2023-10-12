"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

import "react-toastify/dist/ReactToastify.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";

import NounsSubmenuDropdown from "../NounsSubmenuDropdown";
import VerbsSubmenuDropdown from "../VerbsSubmenuDropdown";
import AdjectivesSubmenuDropdown from "../AdjectivesSubmenuDropdown";
import OtherTopicsSubmenuDropdown from "../OtherTopicsSubmenuDropdown";

import logo from "../../../public/images/english.svg";

import styles from "../../app/styles/content-page.module.css";

const drawerWidth = 240;
const navItems = [
  <NounsSubmenuDropdown />,
  <VerbsSubmenuDropdown />,
  <AdjectivesSubmenuDropdown />,
  <OtherTopicsSubmenuDropdown />,
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href="/">
        <Image
          className={styles.navbar_logo}
          src={logo}
          width={150}
          height={150}
          alt="Picture of the author"
        />
      </Link>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={`list-item-${index}`} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{ height: "72px" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <Image
              className={styles.navbar_logo}
              src="/images/english.svg"
              width={120}
              height={120}
              alt="Picture of the logo"
              sx={{ display: { xs: "none", sm: "block" } }}
            />
          </Link>

          <Box
            sx={{ display: { xs: "none", sm: "block", marginLeft: "auto" } }}
          >
            {navItems.map((item, index) => (
              <Button key={`button${index}`} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
