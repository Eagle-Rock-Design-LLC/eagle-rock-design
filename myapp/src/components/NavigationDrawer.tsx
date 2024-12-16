import { Drawer, List, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavigationDrawer = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <Toolbar />
      <Typography variant="h6" sx={{ textAlign: "center", margin: "16px" }}>
        Eagle Rock Design
      </Typography>
      <List>
        {["Home", "Services", "Portfolio", "Contact Us"].map((text) => (
          <ListItemButton 
            key={text}
            component={Link} 
            to={`/${text.replace(" ", "").toLowerCase()}`}
          >
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default NavigationDrawer;
