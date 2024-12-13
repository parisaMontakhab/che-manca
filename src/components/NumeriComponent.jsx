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

export default function NumeriComponent({
  title,
  options,
  openItems,
  handleClick,
}) {
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleDeletValue = ()=>{
    setValue([]);
    setInputValue('');
  }

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
        <Box className="ads-sideBar__priceBox">
          <Autocomplete
            fullWidth
            PaperComponent={(props) => (
              <Paper {...props} className="ads-sideBar__pricePaper" />
            )}
            size="small"
            className="ads-sideBar__priceAutocomplete"
            options={options || []}
            getOptionLabel={(option) => String(option)}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
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
      <Divider sx={{ width: "80%", marginTop: 2 }} />
    </div>
  );
}
