import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

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
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        ></AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
            '&:before': {
              position: 'absolute',
              width: '100%',
              height: '100%',
              content: '""',
              display: 'block', 
              background: 'linear-gradient(252.91deg, rgba(116, 235, 213, 0.52) 0.33%, #ACB6E5 96.31%)'
              // opacity: '0.6',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />

          <List>
            <Link
              to="/dashboard"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItem>
                <p className="sidetext">Home </p>
              </ListItem>
            </Link>
            <Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>
              <ListItem>
                <p className="sidetext">Shop</p>
              </ListItem>
            </Link>
            <Link
              to="/events"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItem>
                <p className="sidetext">Events </p>
              </ListItem>
            </Link>
            <Link
              to="/learn"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItem>
                <p className="sidetext">Learn</p>
              </ListItem>
            </Link>
            <Link
              to="/tutorials"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItem>
                <p className="sidetext">Tutorials </p>
              </ListItem>
            </Link>

            <ListItem>
              <p className="sidetext">
                <a
                  target="_blank"
                  href="https://handsign-m4qq6.ondigitalocean.app/"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Practice
                </a>
              </p>
            </ListItem>
          </List>
        </Drawer>
        <Divider />
        {/* <Box
        component="main"
        sx={{ height:'40%' , bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        
      </Box> */}
      </Box>
    </>
  )
}