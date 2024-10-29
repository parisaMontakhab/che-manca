import React from "react";
import logo from "../assets/images/logo/logo.png";
import Button from "@mui/material/Button";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
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
                <LocationOnRoundedIcon sx={{ margin: 0.5, fontSize: 20 }} />
                تهران
              </Button>
              <Button className="ads-bar_btn">
                دسته ها
                <ArrowDropDownRoundedIcon sx={{ margin: 0.5, fontSize: 22 }} />
              </Button>

              <Box component="div" className="ads-bar_searchBox">
                <InputBase
                  placeholder="جستجو در همهٔ  آگهی‌ها"
                  className="ads-bar_searchInput"
                />
                <SearchIcon className="ads-bar_searchIcon" />
              </Box>
              <Box sx={{ marginRight: 18 }}>
                <Button className="ads-bar_btn">
                  <PersonOutlineRoundedIcon
                    sx={{ margin: 0.5, fontSize: 20 }}
                  />
                  دیوار من
                </Button>
                <Button className="ads-bar_btn">
                  <ChatBubbleOutlineRoundedIcon
                    sx={{ margin: 0.5, fontSize: 20 }}
                  />
                  چت
                </Button>
                <Button className="ads-bar_btn">
                  <SupportRoundedIcon sx={{ margin: 0.5, fontSize: 20 }} />
                  پشتیبانی
                </Button>
                <Button className="ads-bar_btn">
                  <LanguageRoundedIcon sx={{ margin: 0.5, fontSize: 20 }} />
                  Fa
                </Button>
                <Button className="ads-bar_btn">ثبت آگهی</Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
    </Container>
  );
}
