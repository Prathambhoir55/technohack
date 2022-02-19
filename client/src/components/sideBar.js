import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom'
const drawerWidth = 240;

export default function sideBar() {
  return (

        <>
    {/* <img src={bgpic} style= {{ height: '100vh', marginLeft: '-22px'}}/> */}

    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >

      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        
        <List>
        <Link to="/dashboard" style={{ textDecoration: 'none' , color: 'black'}}>
               <ListItem>
              <ListItemText className="sidetext">
              Home </ListItemText>
            </ListItem>
            </Link>
            <Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>
               <ListItem>
              <ListItemText className="sidetext">
              Shop</ListItemText>
            </ListItem>
            </Link>
            <Link to="/events" style={{ textDecoration: 'none', color: 'black' }} >
               <ListItem>
              <ListItemText className="sidetext">
              Events </ListItemText>
            </ListItem>
            </Link>
            <Link to="/learn" style={{ textDecoration: 'none', color: 'black' }} >
               <ListItem>
              <ListItemText className="sidetext">
              Learn</ListItemText>
            </ListItem>
            </Link>
            <Link to="/tutorials" style={{ textDecoration: 'none' , color: 'black'}} >
               <ListItem>
              <ListItemText className="sidetext">
              Tutorials </ListItemText>
            </ListItem>
            </Link>
            
               <ListItem>
              <ListItemText className="sidetext">
              <a
                  target="_blank"
                  href="https://handsign-m4qq6.ondigitalocean.app/"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Practice
                </a></ListItemText>
            </ListItem>
          
          
        </List>

       
      </Drawer>
      <Divider/>
      <Box
        component="main"
        sx={{ height:'40%' , bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        
      </Box>
    </Box>
    </>
  );
}
