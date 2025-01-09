import React from "react";
import { useState } from "react";
import {
  Box,
  Divider,
  ListItem,
  ListItemText,
  Button,
  Collapse,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

const activityStatus = { inEffective: 0, active: 1, inActive: 2 };

export default function ToggleComponent({ openItems, handleClick, title,handleUpdateGetAllAdsModel }) {
  const [status, setStatus] = useState(activityStatus.inEffective);

  const handleChange = (event, newStatus) => {
    setStatus(newStatus);
    handleUpdateGetAllAdsModel(newStatus)
  };

  const handleDelete = () => {
    setStatus(activityStatus.inEffective);
    handleUpdateGetAllAdsModel(null)
  };
  return (
    <div>
      <ListItem
        onClick={() => handleClick(title)}
        className="cursor-pointer flex items-center justify-center text-sm "
      >
        {openItems[title] ? (
          <ExpandLess className="text-customGray min-w-0 ml-2 text-sm" />
        ) : (
          <ExpandMore className="text-customGray min-w-0 ml-2 text-sm" />
        )}
        <ListItemText
          primary={title}
          disableTypography
          className="font-iranYekan font-semibold inline text-right"
        />
        {(status === activityStatus.active ||
          status === activityStatus.inActive) &&
          (openItems[title] ? (
            <Button onClick={handleDelete} className="!font-iranYekan !text-customRed !ml-10">
              حذف
            </Button>
          ) : (
            <FiberManualRecordRoundedIcon className=" text-customRed ml-16 !text-xs" />
          ))}
      </ListItem>
      <Collapse in={openItems[title]} timeout="auto" unmountOnExit>
        <Box className="flex items-center justify-around w-4/5 mb-2">
          <ToggleButtonGroup
            value={status}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            className="border-0 overflow-hidden bg-customBlu !rounded-lg"
          >
            <ToggleButton
              value={activityStatus.inEffective}
              className={
                status === activityStatus.inEffective
                  ? "!font-iranYekan !text-customYellow"
                  : "!font-iranYekan !text-white"
              }
            >
              بی تاثیر
            </ToggleButton>
            <ToggleButton
              value={activityStatus.active}
              className={
                status === activityStatus.active
                  ? "!font-iranYekan !text-customYellow"
                  : "!font-iranYekan !text-white"
              }
            >
              فعال
            </ToggleButton>
            <ToggleButton
              value={activityStatus.inActive}
              className={
                status === activityStatus.inActive
                  ? "!font-iranYekan !text-customYellow"
                  : "!font-iranYekan !text-white"
              }
            >
              غیر فعال
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Collapse>
      <Divider className="!w-4/5 !mt-2" />
    </div>
  );
}

//className of ListItem--> ads-sideBar__listItem
//className of ExpanLess --> ads-sideBar__itemIcon
//className of ExpandMore --> ads-sideBar__itemIcon
//className of ListItemText --> ads-sideBar__collapsText
//className of Button --> ads-sideBar__deletBtn
//className of Fabure...(icon dayere) --> ads-sideBar__deletIcon
//className of Box in Collapse --> ads-sideBar__priceBox
//className of ToggleButtonGroup --> ads-sideBar__toggleGroup
//className of ToggleButton is not active --> "ads-sideBar__toggleBtn" // is active --> "ads-sideBar__toggleBtn--active"