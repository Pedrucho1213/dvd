import React from 'react';
import { ListItemText, ListItem, List, IconButton, Drawer  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    list:{
        width: 250
    },
    fullList:{
        width:"auto"
    }
    
});
export default function TemporaryDrawer(){
     const classes = useStyles();
     const [state, setState] = React.useState({left: false});
     
     const toggleDrawer = (side, open) => event =>{
       setState({...state, [side]: open});
     };

     const sideList = side =>(
         <div
         className={classes.list}
         onClick={toggleDrawer(side, false)}>
             <List>
                 {["Page 1", "Page 2", "Page 3"].map((text)=>(
                     <ListItem button key={text}>
                         <ListItemText primary={text} />
                     </ListItem>
                 ))}
             </List>
         </div>
     );

     return (
         <div>
             <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menuButton" >
             <MenuIcon onClick = {toggleDrawer("left", true)}></MenuIcon>
             </IconButton>
             <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
                 {sideList("left")}
             </Drawer>
         </div>
     );

}

