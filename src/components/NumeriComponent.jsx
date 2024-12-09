import React from "react";
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
import { priceOptions } from "../data/PriceData";

export default function NumeriComponent({
  openItems,
  handleClick,
  prices,
  handleDeletPrice,
  setPrices,
}) {
  return (
    <div>
      <ListItem
        onClick={() => handleClick("price")}
        className="ads-sideBar__listItem "
      >
        {openItems["price"] ? (
          <ExpandLess className="ads-sideBar__itemIcon" />
        ) : (
          <ExpandMore className="ads-sideBar__itemIcon" />
        )}
        <ListItemText
          primary="قیمت"
          disableTypography
          className="ads-sideBar__collapsText"
        />
        {(prices.minPrice || prices.maxPrice) &&
          (openItems["price"] ? (
            <Button
              onClick={handleDeletPrice}
              className="ads-sideBar__deletBtn"
            >
              حذف
            </Button>
          ) : (
            <FiberManualRecordRoundedIcon className="ads-sideBar__deletIcon" />
          ))}
      </ListItem>

      <Collapse in={openItems["price"]} timeout="auto" unmountOnExit>
        <Box className="ads-sideBar__priceBox">
          <Autocomplete
            fullWidth
            PaperComponent={(props) => (
              <Paper {...props} className="ads-sideBar__pricePaper" />
            )}
            size="small"
            className="ads-sideBar__priceAutocomplete"
            options={priceOptions}
            inputValue={prices.minPrice}
            onInputChange={(event, newValue) => {
              setPrices({ ...prices, minPrice: newValue });
            }}
            forcePopupIcon={!prices.minPrice ? true : false}
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
