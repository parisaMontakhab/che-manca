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

export default function SwitchComponent({handleClick,openItems,checked,handleDeletChecked,handleCheckedClick}) {
  return (
    <div>
      <ListItem
        onClick={() => handleClick("status")}
        className="ads-sideBar__listItem "
      >
        {openItems["status"] ? (
          <ExpandLess className="ads-sideBar__itemIcon" />
        ) : (
          <ExpandMore className="ads-sideBar__itemIcon" />
        )}
        <ListItemText
          primary="وضعیت آگهی"
          disableTypography
          className="ads-sideBar__collapsText"
        />
        {(checked["photo"] || checked["force"]) &&
          (openItems["status"] ? (
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
      <Collapse in={openItems["status"]} timeout="auto" unmountOnExit>
        <FormGroup>
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
        </FormGroup>
      </Collapse>
      <Divider sx={{ width: "80%", marginTop: 2 }} />
    </div>
  );
}
