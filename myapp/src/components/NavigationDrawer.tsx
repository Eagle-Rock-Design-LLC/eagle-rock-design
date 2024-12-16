import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { Home, Work, PhotoLibrary, ContactMail } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const drawerWidth = 240;

const navItems = [
  { text: "Home", icon: <Home />, link: "/" },
  { text: "Services", icon: <Work />, link: "/services" },
  { text: "Portfolio", icon: <PhotoLibrary />, link: "/portfolio" },
  { text: "Contact Us", icon: <ContactMail />, link: "/contactus" },
];

const NavigationDrawer = ({ open, toggleDrawer }: { open: boolean; toggleDrawer: () => void }) => (
  <Drawer
    variant="temporary"
    open={open}
    onClose={toggleDrawer}
    sx={{
      "& .MuiDrawer-paper": { width: drawerWidth },
    }}
  >
    <Toolbar>
      <Typography variant="h6">Eagle Rock Design</Typography>
    </Toolbar>
    <List>
      {navItems.map((item) => (
        <ListItem
          component={RouterLink as React.ElementType} // Fix type error here
          to={item.link}
          key={item.text}
          onClick={toggleDrawer} // Close drawer when clicking a menu item
          sx={{
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default NavigationDrawer;
