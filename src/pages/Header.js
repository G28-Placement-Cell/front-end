import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="sticky" style={{ backgroundColor: "#2B2442" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
          <Link to="/">
            Placement Cell
          </Link>
        </Typography>
        <Link to="/">
          <Button color="inherit">Home</Button>
        </Link>
        <Button color="inherit">Contact us</Button>
        <Button color="inherit">About Us</Button>
      </Toolbar>

    </AppBar >
  );
}

export default Header;