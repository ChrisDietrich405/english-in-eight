"use client";
import * as React from "react";
import Link from "next/link";
// import Image from "next/image";
import PropTypes from "prop-types";
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
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import NounsSubmenuDropdown from "../NounsSubmenuDropdown";
import VerbsSubmenuDropdown from "../VerbsSubmenuDropdown";
import AdjectivesSubmenuDropdown from "../AdjectivesSubmenuDropdown";
import OtherTopicsSubmenuDropdown from "../OtherTopicsSubmenuDropdown";

import styles from "./styles.module.css";



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
      <img
        src="/images/logo.svg"
        width={50}
        height={50}
        alt="Picture of the author"
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
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
      <AppBar component="nav">
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
          <div style={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <img
              src="/images/logo.svg"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>
          <Box style={{ display: "flex", marginLeft: "auto" }}>
            <div className={styles.btn_container}>
              <button className={styles.home_btn}>
                <Link href="/">HOME</Link>
              </button>
            </div>

            <Button>
              <NounsSubmenuDropdown
                sx={{ color: "#fff", marginRight: "20px" }}
              />
            </Button>
            <Button>
              <VerbsSubmenuDropdown sx={{ color: "#fff" }} />
            </Button>
            <Button>
              <AdjectivesSubmenuDropdown sx={{ color: "#fff" }} />
            </Button>
            <Button>
              <OtherTopicsSubmenuDropdown sx={{ color: "#fff" }} />
            </Button>
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
            keepMounted: true, // Better open performance on mobile.
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
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
