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
      <Divider sx={{ width: "80%", marginTop: 2 }} />
    </div>
  );
}
