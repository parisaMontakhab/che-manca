import React from "react";
import { Box, Card, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ShoesAdidas from "../assets/images/image/shoes.jpg";

export default function ProductCard() {
  return (
    <Grid2>
        <Card className="productCard__card ">
      <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
        <CardContent>
          <Typography
            component="div"
            sx={{
              fontFamily: "IranYekan",
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            کفش کتونی اصل آدیداس
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary", fontFamily: "IranYekan" }}
          >
            در حد نو
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary", fontFamily: "IranYekan" }}
          >
            2،500 تومان
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: 2,
          }}
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
