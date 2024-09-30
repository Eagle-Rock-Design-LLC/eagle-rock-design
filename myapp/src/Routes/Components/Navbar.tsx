import React, { useState } from 'react';
import { Box, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavDrawer from './NavDrawer'; // Make sure this path is correct

function NavBar() {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setToggleDrawer(!toggleDrawer);
  };

  return (
    <div>
      <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} bgcolor={'orange'}>
        {/* Placeholder for additional content, logo, etc. */}
        <Box p={1} flexGrow={1}></Box>

        {/* Icon Button to toggle the drawer */}
        <IconButton onClick={handleDrawerToggle} style={{ marginRight: 25 }}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Drawer component to handle the navigation drawer */}
      <Drawer
        anchor="left"
        open={toggleDrawer}
        onClose={handleDrawerToggle} // Close the drawer when clicking outside
      >
        <NavDrawer />
      </Drawer>
    </div>
  );
}

export default NavBar;
