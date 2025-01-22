import React from "react";
import { List, ListItem,ListItemText } from "@mui/material";

export default function CategoryList({category,handleCategoryClick}) {
  return (
    <List >
      <ListItem
        onClick={() => handleCategoryClick(category)}
        className="cursor-pointer flex items-center justify-center text-sm hover:text-customGrayHover hover:font-bold"
      >
        <ListItemText
          primary={category.localizedName}
          disableTypography
          className={
            category.parentId === null
              ? "font-iranYekan inline text-right text-customGray"
              : "font-iranYekan inline text-right text-customGray mr-[10%]"
          }
        />
      </ListItem>
    </List>
  );
}
//classname of listItem -- > ads-sideBar__listItem
//classname of ListItemText --> ads-sideBar__itemText or ads-sideBar__itemText--child 
