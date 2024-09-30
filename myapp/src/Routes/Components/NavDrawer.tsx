import React from 'react';
import { Drawer, List, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

const NavDrawer: React.FC = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {/* Home Link */}
        <ListItemButton component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        {/* Services Link */}
        <ListItemButton component={Link} to="/services">
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItemButton>

        {/* Contact Us Link */}
        <ListItemButton component={Link} to="/contact">
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItemButton>

        {/* About Us Link */}
        <ListItemButton component={Link} to="/about-us">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default NavDrawer;
