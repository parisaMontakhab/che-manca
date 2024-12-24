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
import LocationSearch from "./LocationSearch";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

export default function LocationComponent({ title, openItems, handleClick }) {
  //states//
  const [countryValueFromChild, setCountryValueFromChild] = useState("");
  const [subCountryValueFromChild, setSubCountryValueFromChild] = useState("");
  const [cityValueFromChild, setCityValueFromChild] = useState("");
  const [countryInputFromChild, setCountryInputFromChild] = useState("");
  const [subCountryInputFromChild, setSubCountryInputFromChild] = useState("");
  const [cityInputFromChild, setCityInputFromChild] = useState("");

  //functions// 
  //values//
  const handleCountryValueFromChild = (data) => {
    setCountryValueFromChild(data);
  };
  const handleSubCountryValueFromChild = (data) => {
    setSubCountryValueFromChild(data);
  };
  const handleCityValueFromChild = (data) => {
    setCityValueFromChild(data);
  };
  //inputs//
  const handleCountryInputFromChild = (data) => {
    setCountryInputFromChild(data);
  };
  const handleSubCountryInputfromChild = (data) => {
    setSubCountryInputFromChild(data);
  };
  const handleCityInputFromChild = (data) => {
    setCityInputFromChild(data);
  };


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
        {false &&
          (openItems[title] ? (
            <Button className="ads-sideBar__deletBtn">حذف</Button>
          ) : (
            <FiberManualRecordRoundedIcon className="ads-sideBar__deletIcon" />
          ))}
      </ListItem>
      <Collapse in={openItems[title]} timeout="auto">
        <LocationSearch title={title} 
        sendCountryValueToParent={handleCountryValueFromChild}
        sendSubcountryValueToParent={handleSubCountryValueFromChild}
        sendCityValueToParent={handleCityValueFromChild}
        sendcountryInputToParent={handleCountryInputFromChild}
        sendSubCountryInputToParent={handleSubCountryInputfromChild}
        sendCityInputToParent={handleCityInputFromChild}
        />
      </Collapse>
      <Divider sx={{ width: "80%", marginTop: 2 }} />
    </div>
  );
}
