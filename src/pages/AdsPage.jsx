import React from "react";
import logo from "../assets/images/logo/logo.png";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid2,
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Container,
  Divider,
  Link,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Category as CategoryIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

export default function AdsPage() {
  return (
    <Box>
      <header>
        <Box display="flex">
          <AppBar position="fixed" className="ads-bar">
            <Toolbar>
              <img src={logo} alt="logo image" className="ads-bar_logo" />

              <Button className="ads-bar_location" >
                <LocationOnIcon />
                <Link underline="none" >
                <Typography >تهران</Typography>
                </Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
    </Box>
  );
}
