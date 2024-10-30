import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import SportsTennisOutlinedIcon from '@mui/icons-material/SportsTennisOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ChairAltOutlinedIcon from '@mui/icons-material/ChairAltOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';



export default function SidBar() {
  return (
  <Container maxWidth='xl' >
    <aside>
        <Box sx={{marginRight:'1px',marginTop:'90px',width:'25%'}}>
            <Typography sx={{fontFamily:'IranYekan'}}>دسته ها</Typography>

        </Box>
    </aside>
  </Container>
  )
}
