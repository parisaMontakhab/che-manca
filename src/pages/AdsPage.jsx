import React from "react";
import logo from "../assets/images/logo/logo.png";
import Button from "@mui/material/Button";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
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
  TextField,
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

              <Button className="ads-bar_btn">
                <LocationOnRoundedIcon />
                تهران
              </Button>
              <Button className="ads-bar_btn">دسته ها
              <ArrowDropDownRoundedIcon/>
              </Button>
              
            </Toolbar>
          </AppBar>
        </Box>
      </header>
    </Box>
  );
}
