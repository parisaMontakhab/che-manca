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

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: 400,
                  backgroundColor: "#f1f1f1",
                  borderRadius: "5px",
                  p: 0.5,
                }}
              >
                
                <InputBase
                  placeholder="جستجو در همهٔ  آگهی‌ها"
                  sx={{
                    mr: 1,
                    flex: 1,
                    fontSize: "16px",
                    fontFamily:'IranYekan'
                  }}
                />
                <SearchIcon sx={{ color: "gray", ml: 1 }}  />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
    </Container>
  );
}
