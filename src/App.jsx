import React from 'react';
import './App.css';
import { Box, Container, Grid2, Typography,TextField, Input  } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import logo from './assets/img/logo.png';
import { BorderBottom } from '@mui/icons-material';


function App() {
  const cities =['تهران', 'مشهد', 'کرج', 'شیراز', 'اصفهان', 'اهواز', 'تبریز', 'کرمانشاه', 'قم', 'رشت'];

  return (
    <>

    <Container maxWidth="sm"  >
      <header className='home-header'>
     <Box display='flex' justifyContent='center' alignItems='center'p={2}>
      <img src={logo} alt='chemanca-logo'/>
     </Box>
        <nav className='home-nav'>
        <Grid2 container spacing={6} >
          <Grid2><a href='#'>ثبت آگهی</a></Grid2>
          <Grid2><a href='#'>درباره  ما</a></Grid2>
          <Grid2><a href='#'>دریافت برنامه</a></Grid2>
          <Grid2><a href='#'>اتاق خبر</a> </Grid2>
          <Grid2><a href='#'>پشتیبانی</a></Grid2>
        </Grid2>
        </nav>
      </header>
      <Box textAlign="center" my={4}>
        <Typography className='home-desc'  variant="body1" gutterBottom >
        بزرگترین ،  ﭘﺎﯾﮕﺎه ﺧﺮﯾﺪ و ﻓﺮوش ﺑﯽ‌واﺳﻄﻪ‌!
        </Typography>
        <Typography className='home-desc' variant="body1" gutterBottom >
        اﮔﻪ دﻧﺒﺎل ﭼﯿﺰی ﻫﺴﺘﯽ، ﺷﻬﺮت رو اﻧﺘﺨﺎب ﮐﻦ و ﺗﻮ دﺳﺘﻪ‌ﺑﻨﺪی‌ﻫﺎ ﺑﻪ دﻧﺒﺎﻟﺶ ﺑﮕﺮد. اﮔﺮ ﻫﻢ ﻣﯽ‌ﺧﻮای ﭼﯿﺰی ﺑﻔﺮوﺷﯽ، ﭼﻨﺪ ﺗﺎ ﻋﮑﺲ ﺧﻮب ازش ﺑﮕﯿﺮ و آﮔﻬﯿﺖ رو ﺑﭽﺴﺒﻮن ﺑﻪ ما.
        </Typography>
        
      </Box>
   <Box my={8} >
    <TextField  placeholder=' شهر سرچ کن ! ' type="search" fullWidth className='search-input'
    slotProps={{input:{
      startAdornment:(
        <InputAdornment position='start'>
        <SearchIcon/>
        </InputAdornment>
      )
    }}}
    />
   </Box>
     <Box my={4} className='home-boxCity'>
      <Typography variant='h6' className='home-desc' my={4}>
      شهرهای پربازدید
      </Typography>
      <Grid2 container justifyContent='center' justifyItems='center' spacing={10}  >
        {
          cities.map((city)=>(
            <Grid2 key={city} >
              <Typography className='home-cityItem'>{city}</Typography>
            </Grid2>
          ))
        }
      </Grid2>
     </Box>
     <footer style={{ margin: '140px ' }}>
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

     </footer>
     
    

    </Container>

    </>
     
  )
}

export default App
