import React from 'react';
import {AppBar, Typography, Toolbar, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './menuDrawer';

const useStyles = makeStyles(theme =>({
  root:{
      flexGrow: 1,
  },
  menuButton:{
    marginRight: theme.spacing(0),
  },
  title:{
    flexGrow:1,
  },
}));

export default function Appbar(){
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <AppBar position= "static">
      <Toolbar variant="dense">
        <Menu/>
      <Typography variant="h6" className={classes.title}>
        DVD
      </Typography>
      <Button color="inherit">Connexion</Button>
      </Toolbar>
    </AppBar>
    </div>
  );
}