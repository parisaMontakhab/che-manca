import React from 'react';
import {Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid2, Typography} from "@mui/material";

export default function ProductsCards() {
  return (
   <Box >
    <Typography variant='body1' className='ads-products__title'> انواع آگهی ها و نیازمندی های  تهران</Typography>
     <Grid2 container spacing={2} sx={{overflowY:'auto',justifyContent:'center'}} >
       
       <Grid2   >
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
       </Grid2>
       

    
   </Grid2>
   </Box>
  )
}
