import React from 'react';
import './App.css'
import { Box, Container, Grid2, Typography,TextField  } from '@mui/material'


function App() {
  const cities =['تهران', 'مشهد', 'کرج', 'شیراز', 'اصفهان', 'اهواز', 'تبریز', 'کرمانشاه', 'قم', 'رشت'];

  return (
    <>

    <Container maxWidth="sm"  >
      <header className='home-header'>
        <Typography variant="h2" color="error" gutterBottom>
        دیوار
        </Typography>
        <nav className='home-nav'>
        <Grid2 container spacing={6} >
          <Grid2><a href='#'>ثبت آگهی</a></Grid2>
          <Grid2><a href='#'>درباره دیوار</a></Grid2>
          <Grid2><a href='#'>دریافت برنامه</a></Grid2>
          <Grid2><a href='#'>اتاق خبر</a> </Grid2>
          <Grid2><a href='#'>پشتیبانی</a></Grid2>
        </Grid2>
        </nav>
      </header>
      <Box textAlign="center" my={4}>
        <Typography variant="body1" gutterBottom >
        دﯾﻮار، ﭘﺎﯾﮕﺎه ﺧﺮﯾﺪ و ﻓﺮوش ﺑﯽ‌واﺳﻄﻪ‌!
        </Typography>
        <Typography variant="body1" gutterBottom >
        اﮔﻪ دﻧﺒﺎل ﭼﯿﺰی ﻫﺴﺘﯽ، ﺷﻬﺮت رو اﻧﺘﺨﺎب ﮐﻦ و ﺗﻮ دﺳﺘﻪ‌ﺑﻨﺪی‌ﻫﺎ ﺑﻪ دﻧﺒﺎﻟﺶ ﺑﮕﺮد. اﮔﺮ ﻫﻢ ﻣﯽ‌ﺧﻮای ﭼﯿﺰی ﺑﻔﺮوﺷﯽ، ﭼﻨﺪ ﺗﺎ ﻋﮑﺲ ﺧﻮب ازش ﺑﮕﯿﺮ و آﮔﻬﯿﺖ رو ﺑﭽﺴﺒﻮن ﺑﻪ دﯾﻮار.
        </Typography>
        
      </Box>
     <div className='search-container'>
      <input type='text' placeholder='جستجوی شهر' className='search-input'/>
      <span class="search-icon">&#128269;</span>
     </div>
     <Box my={4}>
      <Typography variant='h6'>
      شهرهای پربازدید
      </Typography>
      <Grid2 container  spacing={12}>
        {
          cities.map((city)=>(
            <Grid2 key={city}>
              <Typography>{city}</Typography>
            </Grid2>
          ))
        }

      </Grid2>

     </Box>
     
    

    </Container>

    </>
     
  )
}

export default App
