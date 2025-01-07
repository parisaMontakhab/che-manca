import React from "react";
import { List, ListItem,ListItemText } from "@mui/material";

export default function CategoryList({category,handleCategoryClick}) {
  return (
    <List >
      <ListItem
        onClick={() => handleCategoryClick(category)}
        className="ads-sideBar__listItem"
      >
        <ListItemText
          primary={category.localizedName}
          disableTypography
          className={
            category.parentId === null
              ? "ads-sideBar__itemText"
              : "ads-sideBar__itemText--child"
          }
        />
      </ListItem>
    </List>
  );
}
