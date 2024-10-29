import React from "react";
import logo from "../assets/images/logo/logo.png";
import Button from "@mui/material/Button";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  TextField,
  InputBase,
} from "@mui/material";

export default function AdsPage() {
  return (
    <Container>
      <header>
        <Box display="flex">
          <AppBar position="fixed" className="ads-bar">
            <Toolbar>
              <img src={logo} alt="logo image" className="ads-bar_logo" />

              <Button className="ads-bar_btn">
                <LocationOnRoundedIcon />
                تهران
              </Button>
              <Button className="ads-bar_btn">
                دسته ها
                <ArrowDropDownRoundedIcon />
              </Button>

              <Box component="div" className="ads-bar_searchBox">
                <InputBase
                  placeholder="جستجو در همهٔ  آگهی‌ها"
                  className="ads-bar_searchInput"
                />
                <SearchIcon className="ads-bar_searchIcon" />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
    </Container>
  );
}
