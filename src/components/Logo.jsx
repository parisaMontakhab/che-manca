import React from "react";
import logo from "../assets/img/logo.png";
import { Box } from "@mui/material";

export default function Logo() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={2}>
      <img src={logo} alt="chemanca-logo" />
    </Box>
  );
}
