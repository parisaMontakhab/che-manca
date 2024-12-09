import React from "react";
import { List,ListItem,ListItemText } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function BackArrowCategory({selectedCategory,handleBackClick}) {
  return (
    <List>
      <ListItem onClick={handleBackClick} className="ads-sideBar__listItem">
        <ArrowForwardIcon sx={{ marginLeft: 1, fontSize: 18 }} />
        <ListItemText
          disableTypography
          primary="همه ی آگهی ها"
          className="ads-sideBar__itemText--color"
        />
      </ListItem>
      <ListItem>
        <ListItemText
          disableTypography
          primary={selectedCategory.localizedName}
          className="ads-sideBar__itemText--margin"
        />
      </ListItem>
    </List>
  );
}
