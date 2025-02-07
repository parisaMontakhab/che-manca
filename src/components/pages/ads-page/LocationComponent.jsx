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
import LocationSearch from "../share/LocationSearch";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

export default function LocationComponent({
  title,
  openItems,
  handleClick,
  handleUpdateGetAllAdsModel,
}) {
  //states//
  const [resetKey, setResetKey] = useState(0);
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
  //handleDeleteBtn//

  const handleDeleteBtn = () => {
    setCityInputFromChild("");
    setResetKey((prevKey) => prevKey + 1);
    handleUpdateGetAllAdsModel(null);
  };

  return (
    <div>
      <ListItem
        onClick={() => handleClick(title)}
        className="cursor-pointer flex items-center justify-center text-sm "
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
        {cityInputFromChild &&
          (openItems[title] ? (
            <Button onClick={handleDeleteBtn} className="font-iranYekan text-customRed ml-10">
              حذف
            </Button>
          ) : (
            <FiberManualRecordRoundedIcon className="text-customRed ml-16 text-xs" />
          ))}
      </ListItem>
      <Collapse in={openItems[title]} timeout="auto">
        <LocationSearch
          key={resetKey}
          title={title}
          sendCountryValueToParent={handleCountryValueFromChild}
          sendSubcountryValueToParent={handleSubCountryValueFromChild}
          sendCityValueToParent={handleCityValueFromChild}
          sendcountryInputToParent={handleCountryInputFromChild}
          sendSubCountryInputToParent={handleSubCountryInputfromChild}
          sendCityInputToParent={handleCityInputFromChild}
          handleUpdateGetAllAdsModel={handleUpdateGetAllAdsModel}
        />
      </Collapse>
      <Divider className="w-4/5 mt-2" />
    </div>
  );
}
