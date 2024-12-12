import React from "react";
import {
  ListItem,
  ListItemText,
  Button,
  Collapse,
  FormGroup,
  FormControlLabel,
  Typography,
  Switch,
  Divider,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import { Key, Title } from "@mui/icons-material";

export default function SwitchComponent({handleClick,openItems,checked,setChecked,handleDeletChecked,handleCheckedClick,title,children}) {
  const hasCheckedTrue = Object.values(checked).includes(true);
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
        { hasCheckedTrue &&
          (openItems[title] ? (
            <Button
              onClick={handleDeletChecked}
              className="ads-sideBar__deletBtn"
            >
              حذف
            </Button>
          ) : (
            <FiberManualRecordRoundedIcon className="ads-sideBar__deletIcon" />
          ))}
      </ListItem>
      <Collapse in={openItems[title]} timeout="auto" unmountOnExit>
      {
        children
      }
       
      </Collapse>
      <Divider sx={{ width: "80%", marginTop: 2 }} />
    </div>
  );
}

{/* <FormGroup>
<FormControlLabel
  className="ads-sideBar__swichStatus"
  label={
    <Typography className="ads-sideBar__priceBox__title">
      عکس دار
    </Typography>
  }
  control={
    <Switch
      checked={checked.photo}
      onChange={handleCheckedClick}
      name="photo"
    />
  }
/>
<FormControlLabel
  className="ads-sideBar__swichStatus"
  label={
    <Typography className="ads-sideBar__priceBox__title ">
      فوری
    </Typography>
  }
  control={
    <Switch
      checked={checked.force}
      onChange={handleCheckedClick}
      name="force"
    />
  }
/>
</FormGroup> */}