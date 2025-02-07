import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  Button,
  Collapse,
  Box,
  Typography,
  Autocomplete,
  TextField,
  Divider,
  Paper,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function DatePickComponent({ openItems, handleClick, title,handleUpdateGetAllAdsModel }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const today = dayjs();

  const epokConverter = (data)=>{
    const epokDate = Math.floor(new Date(data).getTime()/1000.0);
   handleUpdateGetAllAdsModel(epokDate);
  }

  return (
    <div>
      <ListItem
        onClick={() => handleClick(title)}
        className="cursor-pointer flex items-center justify-center text-sm"
      >
        {openItems[title] ? (
          <ExpandLess className="text-customGray min-w-0 ml-2 text-2xl" />
        ) : (
          <ExpandMore className="text-customGray min-w-0 ml-2 text-2xl" />
        )}
        <ListItemText
          primary={title}
          disableTypography
          className="font-iranYekan font-semibold inline text-right"
        />
        {selectedDate &&
          (openItems[title] ? (
            <Button
              onClick={() => 
               {
                setSelectedDate(null);
                handleUpdateGetAllAdsModel(null);
               }
              }
              className="font-iranYekan text-customRed ml-10"
            >
              حذف
            </Button>
          ) : (
            <FiberManualRecordRoundedIcon className="text-customRed ml-16 text-xs" />
          ))}
      </ListItem>
      <Collapse in={openItems[title]} timeout="auto">
        <Box className="flex items-center justify-around w-4/5 mb-2">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                value={selectedDate}
                onChange={(newvalue) => 
                 {
                  setSelectedDate(newvalue);
                  epokConverter(newvalue);
                 }
                }
                minDate={today}
               
                className="custom-autocomplete-adSide"
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </Collapse>
      <Divider className="w-4/5 mt-2" />
    </div>
  );
}

//classname of ListItem --> ads-sideBar__listItem
//classname of ExpandLess and ExpandMore --> ads-sideBar__itemIcon
//classname of ListItemText --> ads-sideBar__collapsText
// classname of Button --> ads-sideBar__deletBtn
//classname of FiberManualRecordRoundedIcon --> ads-sideBar__deletIcon
//classname of Box --> ads-sideBar__priceBox
//classname of Autocomplete --> ads-sideBar__priceAutocomplete
//classname of TextField --> ads-sideBar__priceSpan