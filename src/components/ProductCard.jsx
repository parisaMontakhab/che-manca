import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ShoesAdidas from "../assets/images/image/shoes.jpg";

export default function ProductCard() {
  return (
    <Grid2>
      <Card className="productCard__card ">
        <Box component="div" className="productCard__mainBox">
          <CardContent>
            <Typography component="div" className="productCard__title ">
              کفش کتونی اصل آدیداس
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              className="productCard__desc"
            >
              در حد نو
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              className="productCard__desc"
            >
              2،500 تومان
            </Typography>
          </CardContent>
          <Box
           component='div'
           className="productCard__iconBox"
          
          >
            <Typography
              component="div"
              sx={{ fontFamily: "IranYekan", fontSize: 12, color: "gray" }}
            >
              لحظاتی پیش در اقدسیه
            </Typography>

            <ChatBubbleOutlineRoundedIcon sx={{ color: "gray" }} />
          </Box>
        </Box>
        <CardMedia
          component="img"
          image={ShoesAdidas}
          sx={{ width: 150, padding: 1.5, borderRadius: "16px" }}
        />
      </Card>
    </Grid2>
  );
}
