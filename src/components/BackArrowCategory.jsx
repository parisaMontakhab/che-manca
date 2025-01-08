import React from "react";
import { List,ListItem,ListItemText } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function BackArrowCategory({selectedCategory,handleBackClick}) {
  return (
    <List>
      <ListItem onClick={handleBackClick} className="cursor-pointer flex items-center justify-center text-sm">
        <ArrowForwardIcon sx={{ marginLeft: 1, fontSize: 18 }} />
        <ListItemText
          disableTypography
          primary="همه ی آگهی ها"
          className="inline text-right text-black font-iranYekan"
        />
      </ListItem>
      <ListItem>
        <ListItemText
          disableTypography
          primary={selectedCategory.localizedName}
          className="inline text-right text-black font-iranYekan mr-5p" 
        />
      </ListItem>
     
    </List>
  );
}
//calssname of listItem --> ads-sideBar__listItem 
//classname of ListItemText one --> ads-sideBar__itemText--color
//classname of ListItemText two --> ads-sideBar__itemText--margin