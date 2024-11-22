import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import LivefromSpace from "../assets/images/image/live-from-space.jpg";

export default function ProductsCards() {
  return (
    <Box>
      <Typography variant="body1" className="ads-productsCards__title">
        {" "}
        انواع آگهی ها و نیازمندی های تهران
      </Typography>
      <Grid2
        container
        spacing={2}
        sx={{ overflowY: "auto", justifyContent: "center" }}
      >
        
      </Grid2>
    </Box>
  );
}
