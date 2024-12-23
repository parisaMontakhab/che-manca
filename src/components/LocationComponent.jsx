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
import LocationSearch from './LocationSearch'
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

export default function LocationComponent({ title, openItems, handleClick }) {
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState("");
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
        {inputValue.trim() !== "" &&
          (openItems[title] ? (
            <Button
              onClick={handleDeletValue}
              className="ads-sideBar__deletBtn"
            >
              حذف
            </Button>
          ) : (
            <FiberManualRecordRoundedIcon className="ads-sideBar__deletIcon" />
          ))}
      </ListItem>
      <Collapse in={openItems[title]} timeout="auto" unmountOnExit>
     
        <LocationSearch title={title}/>

     
      
      </Collapse>
    </div>
  );
}
