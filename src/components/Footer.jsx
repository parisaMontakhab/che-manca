import React from 'react';
import { Box, Container, Grid2,  } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Footer() {
  return (
    <Box className='footer-box'>
         <Grid2 container spacing={4} justifyContent='center' justifyItems='center'>
        <Grid2><a href='#'>
          <LinkedInIcon className='social-icon'/>
          </a></Grid2>
          <Grid2><a href='#'>
          <TelegramIcon className='social-icon'/>
          </a></Grid2>
          <Grid2><a href='#'>
          <InstagramIcon className='social-icon'/>
          </a></Grid2>
      </Grid2>
    </Box>
  )
}
