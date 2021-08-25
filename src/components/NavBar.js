import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function NavBar() {
  const classes = useStyles();
  const history = useHistory();

  function logout() {
    localStorage.clear();
    history.push("/")
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            
          <Link to ="/">
            <h3  style={{textDecoration:"none", color:"white" }}>AZ-TECH</h3>
            </Link>
          </Typography>
          <Link to ="/cart"> 
          <Button style={{textDecoration:"none", color:"white" }}><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg></Button>
          </Link>
          
          <Link to ="/products"> 
          
          <Button style={{textDecoration:"none", color:"white" }} >Products</Button>
          </Link> 
          
          <Link to ="/profile"> 
          {localStorage.getItem("token") && <Button style={{textDecoration:"none", color:"white" }}>Profile</Button>}
          </Link>
          
          <Link to ="/login">
          <Button style={{textDecoration:"none", color:"white" }} >LogIn</Button>
          </Link>
          
          <Link to ="/products">
          {localStorage.getItem("token") &&  <Button onClick={logout} style={{textDecoration:"none", color:"white" } } >LogOut</Button>  }
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}