import React from 'react';
import logo from "../assets/images/logo/logo.png";
import { AppBar, Toolbar, IconButton, Typography, Grid2, Paper, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Container, Divider } from '@mui/material';
import { Menu as MenuIcon, Home as HomeIcon, Category as CategoryIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';




export default function AdsPage() {
  return (
    <Box >
     <header>
      <Box display='flex'>
        <AppBar position='fixed' className='app-bar' >
          <Toolbar>
            <Box>
              <img src={logo} alt='logo image' className='adsPage-logo'/>
            </Box>
            


          </Toolbar>

        </AppBar>

      </Box>

     </header>
    </Box>
  )
}
