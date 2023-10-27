import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../slices/student/authslice';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../slices/student/studentApislice';

function Header() {
  const studentInfo = useSelector((state) => state.auth.studentInfo);
  const dispatch = useDispatch();
  const [logoutapicall] = useLogoutMutation();

  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      await logoutapicall().unwrap();
      dispatch(logout());
      navigate('/');
    }
    catch (err) {
      console.log(err);
    }
  }

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
        {studentInfo ? <>
          <Button color="inherit">Profile</Button>
          <Button color="inherit" onClick={logoutHandler}>Logout</Button>
          <Button color="inherit">Contact us</Button>
          <Button color="inherit">About Us</Button>
        </> : <>
          <Button color="inherit">Contact us</Button>
          <Button color="inherit">About Us</Button>
        </>}

      </Toolbar>

    </AppBar >
  );
}

export default Header;