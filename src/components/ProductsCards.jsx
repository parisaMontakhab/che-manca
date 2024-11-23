import React from "react";
import { Box, Grid2, Typography } from "@mui/material";

import ProductCard from "./ProductCard";

export default function ProductsCards() {
  return (
    <Box>
      <Typography variant="body1" className="productsCards__title">
        {" "}
        انواع آگهی ها و نیازمندی های تهران
      </Typography>
      <Grid2
        container
        spacing={2}
        component="div"
        className="productsCards__grid"
      >
        <ProductCard />
      </Grid2>
    </Box>
  );
}
