import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Grid , Button} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    background: '#f5f5f5',
    color: "#111",
  },
  cartLink: {
    alignSelf: "center",
    textAlign: "right"
  },
  appBar: {
    zIndex: 1000
  },
  
}));

export default function Dashboard() {
  const classes = useStyles();
  const items = useSelector(state=>state.cart.items)
 
  return (
    <div className={classes.grow}>
      <AppBar  className={classes.appBar} position="relative">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Grid item xs>
          <Link style={{textDecoration:"none"}} to='/'>

            <Button  to="/">
              <Typography variant="h4">
                Omar Store
              </Typography>
            </Button>
          </Link>
          </Grid>
          
          <div key={16516} className={classes.grow} />
          <div key={1651621}>
          <Link to='/checkout'>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={items.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
