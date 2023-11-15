"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
import PrepositionsSubmenuDropdown from "../PrepositionsSubmenuDropdown";
import VerbsSubmenuDropdown from "../VerbsSubmenuDropdown";
import AdjectivesSubmenuDropdown from "../AdjectivesSubmenuDropdown";
import OtherTopicsSubmenuDropdown from "../OtherTopicsSubmenuDropdown";

import { links } from "@/links";

import logo from "../../../public/images/english-logo.svg";

import styles from "./styles.module.css";

// import styles from "../../app/styles/content-page.module.css";

const drawerWidth = 240;
const navItems = [
  <NounsSubmenuDropdown />,
  <PrepositionsSubmenuDropdown />,
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

  const closeDropdown = () => {
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href="/">
        <Image
          priority
          className={styles.navbar_logo}
          src={logo}
          width={150}
          height={150}
          alt="Picture of the author"
        />
      </Link>
      <Divider />

      <List>
        {links.map((link, index) => {
          return (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.heading}>
                  {link.heading}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  className={styles.accordion_list}
                  component="p"
                  sx={{ textDecoration: "none" }}
                >
                  {link.subcategories.map((item, index) => {
                    return (
                      <Link
                        sx={{ textDecoration: "none" }}
                        href={item.link}
                        key={index}
                        className={styles.accordion_link}
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
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
            onMouseLeave={closeDropdown}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <Image
              priority
              className={styles.navbar_logo}
              src={logo}
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
