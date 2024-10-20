import React from 'react';
import './App.css'
import { Container, Grid2, Typography,  } from '@mui/material'


function App() {
  

  return (
    <>

    <Container maxWidth="sm"  >
      <header className='home-header'>
        <Typography variant="h2" color="error" gutterBottom>
        دیوار

        </Typography>
        <nav className='home-nav'>
        <Grid2 container spacing={4 } >

          <Grid2><a href='#'>ثبت آگهی</a></Grid2>
          <Grid2><a href='#'>درباره دیوار</a></Grid2>
          <Grid2><a href='#'>دریافت برنامه</a></Grid2>
          <Grid2><a href='#'>اتاق خبر</a> </Grid2>
          <Grid2><a href='#'>پشتیبانی</a></Grid2>

        </Grid2>

        </nav>

      </header>
     
    

    </Container>

    </>
     
  )
}

export default App
