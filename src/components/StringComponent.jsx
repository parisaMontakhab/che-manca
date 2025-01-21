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

export default function StringComponent({
  title,
  options,
  openItems,
  handleClick,
  handleUpdateGetAllAdsModel
}) {
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [idesList, setIdesList] = useState(null);
  //idesList va setIdesList dorost shode baraye inke vaghti user roye optionhaye autocompolete click mikone va string daryaft mikone ma id ono doashte bashim baraye marahele bad dar ba database lazem mishod//

  const handleDeletValue = () => {
    setValue([]);
    setInputValue("");
    handleUpdateGetAllAdsModel(null)
  };

  const handleSelectedId = (newInputValue) => {
    options?.map((option) => {
      if (option.text == newInputValue) {
        setIdesList(option.value);
        handleUpdateGetAllAdsModel(option.value)
      }
    });
  };

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
        {inputValue.trim() !== "" &&
          (openItems[title] ? (
            <Button
              onClick={handleDeletValue}
              className="font-iranYekan text-customRed ml-10"
            >
              حذف
            </Button>
          ) : (
            <FiberManualRecordRoundedIcon className="text-customRed ml-16 text-xs" />
          ))}
      </ListItem>

      <Collapse in={openItems[title]} timeout="auto" unmountOnExit>
        <Box className="flex items-center justify-around w-4/5 mb-2">
          <Autocomplete
            fullWidth
            PaperComponent={(props) => (
              <Paper {...props} className="ads-sideBar__pricePaper" />
            )}
            size="small"
            className=" "
            options={options?.map((option) => option.text) || []}
            getOptionLabel={(option) => String(option)}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);

              handleSelectedId(newInputValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder=" لطفا یه مورد انتخاب کن"
                className="ads-sideBar__priceSpan"
              />
            )}
          />
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