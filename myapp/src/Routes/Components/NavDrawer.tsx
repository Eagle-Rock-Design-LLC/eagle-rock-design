
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Drawer } from '@mui/material';
import React, { useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

 function NavDrawer (props: {openEvent: boolean}) {

    useEffect(() => {
      setOpen(props.openEvent)
    }, [props.openEvent])

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };

    return (
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItem key={'Home'} disablePadding>
          <Link to='/'>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                    Home
              </ListItemButton>
              </Link>

            </ListItem>
            <ListItem key={'Home'} disablePadding>
            <Link to='/test'>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                  
                    Test
              </ListItemButton>
              </Link>

            </ListItem>
        </List>
      </Drawer>
    )
 }

export default NavDrawer