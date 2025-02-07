import React from "react";
import {
  ListItem,
  ListItemText,
  Button,
  Collapse,
  Divider,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

export default function SwitchComponent({
  handleClick,
  openItems,
  checked,
  handleDeletChecked,
  title,
  children,
}) {
  const hasCheckedTrue = Object.values(checked).includes(true);
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
        {hasCheckedTrue &&
          (openItems[title] ? (
            <Button
              onClick={handleDeletChecked}
              className="font-iranYekan text-customRed ml-10"
            >
              حذف
            </Button>
          ) : (
            <FiberManualRecordRoundedIcon className="text-customRed ml-16 text-xs" />
          ))}
      </ListItem>
      <Collapse in={openItems[title]} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
      <Divider className="w-4/5 mt-2" />
    </div>
  );
}

//className of ListItem --> ads-sideBar__listItem 
//className of ExpanLess --> ads-sideBar__itemIcon
//className of ExpandMore --> ads-sideBar__itemIcon
//className of ListItemText --> ads-sideBar__collapsText
//className of Button --> ads-sideBar__deletBtn
//className of FiberManualRecordRoundedIcon --> ads-sideBar__deletIcon"