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

export default function ToggleComponent({ openItems, handleClick, title }) {
  const activityStatus = { ineffective: 0, active: 1, inactive: 2 };
  const [status, setStatus] = useState(activityStatus.ineffective);
  const handleChange = (event, newStatus) => {
    setStatus(newStatus);
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
        {true &&
          (openItems[title] ? (
            <Button
              //onClick={handleDeletValue}
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
          <ToggleButtonGroup
            
            value={status}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value={activityStatus.ineffective}>
              بی تاثیر
            </ToggleButton>
            <ToggleButton value={activityStatus.active}>فعال</ToggleButton>
            <ToggleButton value={activityStatus.inactive}>
              غیر فعال
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Collapse>
       <Divider sx={{ width: "80%", marginTop: 2 }} />
    </div>
  );
}


