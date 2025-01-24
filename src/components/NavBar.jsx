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

export default function NavBar() {
  return (
    <Container>
      <header>
        <Box display="flex">
          <AppBar position="fixed" className="bg-white shadow-none border-b-2 border-[#efecec] pl-32 pr-32">
            <Toolbar>
              <img src={logo} alt="logo image" className="w-[15%] border-l border-[#efecec]" />

              <Button className="flex items-center p-1 mx-[10px] text-customGray font-iranYekan hover:bg-[#f7f4f4] hover:text-customGrayHover hover:font-bold">
                <LocationOnRoundedIcon className="m-1 text-[20px]" />
                تهران
              </Button>
              <Button className="flex items-center p-1 mx-[10px] text-customGray font-iranYekan hover:bg-[#f7f4f4] hover:text-customGrayHover hover:font-bold">
                دسته ها
                <ArrowDropDownRoundedIcon className="m-1 text-[22px]" />
              </Button>

              <Box component="div" className="flex items-center w-full max-w-[400px] bg-[#f1f1f1] rounded-[5px] p-1">
                <InputBase
                  placeholder="جستجو در همهٔ  آگهی‌ها"
                  className="mr-2 flex-1 text-[16px] font-iranYekan"
                />
                <SearchIcon className="text-customGray ml-2" />
              </Box>
              <Box component="div" className="mr-32" display="flex">
                <Button className="flex items-center p-1 mx-[10px] text-customGray font-iranYekan hover:bg-[#f7f4f4] hover:text-customGrayHover hover:font-bold">
                  <PersonOutlineRoundedIcon
                   className="m-1 text-[20px]"
                  />
                  دیوار من
                </Button>
                <Button className="flex items-center p-1 mx-[10px] text-customGray font-iranYekan hover:bg-[#f7f4f4] hover:text-customGrayHover hover:font-bold">
                  <ChatBubbleOutlineRoundedIcon
                     className="m-1 text-[20px]"
                  />
                  چت
                </Button>
                <Button className="flex items-center p-1 mx-[10px] text-customGray font-iranYekan hover:bg-[#f7f4f4] hover:text-customGrayHover hover:font-bold">
                  <SupportRoundedIcon  className="m-1 text-[20px]" />
                  پشتیبانی
                </Button>
                <Button className="flex items-center p-1 mx-[10px] text-customGray font-iranYekan hover:bg-[#f7f4f4] hover:text-customGrayHover hover:font-bold">
                  <LanguageRoundedIcon className="m-1 text-[20px]" />
                  Fa
                </Button>
                <Button className="flex items-center pl-4 pr-4 ml-2 mr-2 bg-customBlu text-customYellow font-iranYekan hover:bg-customBluHover">ثبت آگهی</Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
    </Container>
  );
}
