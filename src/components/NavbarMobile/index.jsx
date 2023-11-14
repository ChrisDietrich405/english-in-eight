// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";

// import NounsSubmenuDropdownMobile from "../NounsSubmenuDropdownMobile";
// import PrepositionsSubmenuDropdownMobile from "../PrepositionsSubmenuDropdownMobile";
// import VerbsSubmenuDropdownMobile from "../VerbsSubmenuDropdownMobile";
// import AdjectivesSubmenuDropdownMobile from "../AdjectivesSubmenuDropdownMobile";
// import OtherTopicsSubmenuDropdownMobile from "../OtherTopicsSubmenuDropdownMobile";

// const drawerWidth = 240;
// const navItems = [
//   <NounsSubmenuDropdownMobile />,
//   <PrepositionsSubmenuDropdownMobile />,
//   <VerbsSubmenuDropdownMobile />,
//   <AdjectivesSubmenuDropdownMobile />,
//   <OtherTopicsSubmenuDropdownMobile />,
// ];

// function DrawerAppBar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const myRef = React.useRef(null);

//   const handleDrawerToggle = (e) => {
//     const skipClick = document.querySelectorAll(".skip-click");

//     if (
//       !myRef?.current?.contains(e.target) ||
//       (skipClick && [...skipClick]?.some((item) => item.contains(e.target)))
//     ) {
//       setMobileOpen((prevState) => !prevState);
//     }
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List ref={myRef}>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//           >
//             MUI
//           </Typography>
//           <Box sx={{ display: { xs: "none", sm: "block" } }}>
//             {navItems.map((item) => (
//               <Button key={item} sx={{ color: "#fff" }}>
//                 {item}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// }

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default DrawerAppBar;

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import NounsSubmenuDropdownMobile from "../NounsSubmenuDropdownMobile";
import PrepositionsSubmenuDropdownMobile from "../PrepositionsSubmenuDropdownMobile";
import VerbsSubmenuDropdownMobile from "../VerbsSubmenuDropdownMobile";
import AdjectivesSubmenuDropdownMobile from "../AdjectivesSubmenuDropdownMobile";
import OtherTopicsSubmenuDropdownMobile from "../OtherTopicsSubmenuDropdownMobile";

// const navItems = [
//   <NounsSubmenuDropdownMobile />,
//   <PrepositionsSubmenuDropdownMobile />,
//   <VerbsSubmenuDropdownMobile />,
//   <AdjectivesSubmenuDropdownMobile />,
//   <OtherTopicsSubmenuDropdownMobile />,
// ];

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

export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Nouns</Typography>
        </AccordionSummary>
        {dropdownProps.map((dropdownItem) => {
          return (
            <AccordionDetails>
              <Typography>{dropdownItem.title}</Typography>
            </AccordionDetails>
          );
        })}
      </Accordion>
    </div>
  );
}