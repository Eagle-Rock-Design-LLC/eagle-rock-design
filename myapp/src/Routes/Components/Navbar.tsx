import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link, RelativeRoutingType, RouterProvider, To } from 'react-router-dom';
import NavDrawer from './NavDrawer';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {

    const [toggleDrawer, setToggleDrawer] = useState(false)

  return (
    <div>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} bgcolor={'orange'}>
            <Box  p={1} flexGrow={1}>
                
            </Box>
            <IconButton onClick={() => setToggleDrawer(!toggleDrawer)}  style={{marginRight: 25}}>
                <MenuIcon/>
            </IconButton>
            <NavDrawer openEvent={toggleDrawer}/>
        </Box>
    </div>
  );
}

export default NavBar;
