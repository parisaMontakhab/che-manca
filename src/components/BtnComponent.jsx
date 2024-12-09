import React from "react";
import { ListItem,ListItemText,Collapse,Button,Divider } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

export default function BtnComponent ({openItems,handleClick}) {
  return(
    <div>
      <ListItem
                  onClick={() => handleClick("location")}
                  className="ads-sideBar__listItem"
                >
                  {openItems["location"] ? (
                    <ExpandLess className="ads-sideBar__itemIcon" />
                  ) : (
                    <ExpandMore className="ads-sideBar__itemIcon" />
                  )}
                  <ListItemText
                    primary="محل"
                    disableTypography
                    className="ads-sideBar__collapsText"
                  />
                </ListItem>
                <Collapse
                  in={openItems["location"]}
                  timeout="auto"
                  unmountOnExit
                >
                  <Button
                    endIcon={<KeyboardArrowLeftRoundedIcon />}
                    fullWidth
                    className="ads-sideBar__locBtn"
                  >
                    تعیین محل
                  </Button>
                </Collapse>
                <Divider sx={{ width: "80%", marginTop: 2 }} />
  </div>

  ) 
  
}
