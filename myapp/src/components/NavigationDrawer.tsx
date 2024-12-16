import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Box } from "@mui/material";
import { Home, Work, PhotoLibrary, ContactMail } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const navItems = [
  { text: "Home", icon: <Home />, link: "/" },
  { text: "Services", icon: <Work />, link: "/services" },
  { text: "Portfolio", icon: <PhotoLibrary />, link: "/portfolio" },
  { text: "Contact Us", icon: <ContactMail />, link: "/contactus" },
];

// Styled Link for Material-UI with RouterLink
const StyledLink = styled(RouterLink)(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",
  display: "flex",
  width: "100%",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const NavigationDrawer = () => (
  <Drawer variant="permanent" sx={{ width: 240, bgcolor: "#1976d2", color: "#fff" }}>
    <Toolbar>
      <Box sx={{ textAlign: "center", width: "100%" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
          Eagle Rock Design
        </Typography>
      </Box>
    </Toolbar>
    <List>
      {navItems.map((item) => (
        <ListItem key={item.text} disablePadding>
          <StyledLink to={item.link}>
            <ListItemIcon sx={{ color: "#ff9800" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </StyledLink>
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default NavigationDrawer;
