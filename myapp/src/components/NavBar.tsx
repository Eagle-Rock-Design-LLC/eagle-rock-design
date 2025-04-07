import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Eagle Rock Design LLC
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box sx={{ width: 250 }}>
                <List>
                  {navLinks.map((link, index) => (
                    <ListItemButton
                      key={index}
                      component={Link}
                      to={link.path}
                      onClick={() => setDrawerOpen(false)}
                    >
                      <ListItemText primary={link.label} />
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          navLinks.map((link, index) => (
            <Button
              color="inherit"
              component={Link}
              to={link.path}
              key={index}
            >
              {link.label}
            </Button>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;