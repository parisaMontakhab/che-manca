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

export default function DatePickComponent({ openItems, handleClick, title }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const today = dayjs();

  return (
    <div>
      <ListItem
        onClick={() => handleClick(title)}
        className="ads-sideBar__listItem "
      >
        {openItems[title] ? (
          <ExpandLess className="ads-sideBar__itemIcon" />
        ) : (
          <ExpandMore className="ads-sideBar__itemIcon" />
        )}
        <ListItemText
          primary={title}
          disableTypography
          className="ads-sideBar__collapsText"
        />
        {selectedDate &&
          (openItems[title] ? (
            <Button
              onClick={() => setSelectedDate(null)}
              className="ads-sideBar__deletBtn"
            >
              حذف
            </Button>
          ) : (
            <FiberManualRecordRoundedIcon className="ads-sideBar__deletIcon" />
          ))}
      </ListItem>
      <Collapse in={openItems[title]} timeout="auto">
        <Box className="ads-sideBar__priceBox">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                value={selectedDate}
                onChange={(newvalue) => setSelectedDate(newvalue)}
                minDate={today}
                sx={{
                    '& .MuiInputBase-root': {
                      '&.Mui-focused': {
                        borderColor: 'gray', // تغییر رنگ مرز به خاکی (gray) هنگام فوکوس
                        boxShadow: 'none', // حذف سایه
                      },
                      // اضافه کردن استایل برای زمانی که input فوکوس نشده است
                      border: '1px solid #ccc', // مرز معمولی (خاکی روشن) زمانی که فوکوس نیست
                    },
                    // برای حذف outline در هنگام فوکوس
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none', // مرز خاکی رنگ هنگام فوکوس
                    },
                  }}
               
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </Collapse>
      <Divider sx={{ width: "80%", marginTop: 2 }} />
    </div>
  );
}
