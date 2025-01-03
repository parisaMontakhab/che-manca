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
        {(status === activityStatus.active ||
          status === activityStatus.inActive) &&
          (openItems[title] ? (
            <Button onClick={handleDelete} className="ads-sideBar__deletBtn">
              حذف
            </Button>
          ) : (
            <FiberManualRecordRoundedIcon className="ads-sideBar__deletIcon" />
          ))}
      </ListItem>
      <Collapse in={openItems[title]} timeout="auto" unmountOnExit>
        <Box className="ads-sideBar__priceBox">
          <ToggleButtonGroup
            value={status}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            className="ads-sideBar__toggleGroup"
          >
            <ToggleButton
              value={activityStatus.inEffective}
              className={
                status === activityStatus.inEffective
                  ? "ads-sideBar__toggleBtn--active"
                  : "ads-sideBar__toggleBtn"
              }
            >
              بی تاثیر
            </ToggleButton>
            <ToggleButton
              value={activityStatus.active}
              className={
                status === activityStatus.active
                  ? "ads-sideBar__toggleBtn--active"
                  : "ads-sideBar__toggleBtn"
              }
            >
              فعال
            </ToggleButton>
            <ToggleButton
              value={activityStatus.inActive}
              className={
                status === activityStatus.inActive
                  ? "ads-sideBar__toggleBtn--active"
                  : "ads-sideBar__toggleBtn"
              }
            >
              غیر فعال
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Collapse>
      <Divider sx={{ width: "80%", marginTop: 2 }} />
    </div>
  );
}
