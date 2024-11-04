import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import SportsTennisOutlinedIcon from "@mui/icons-material/SportsTennisOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ChairAltOutlinedIcon from "@mui/icons-material/ChairAltOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

export default function SidBar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Container maxWidth="xl">
      <aside>
        <Box component="div" className="ads-sideBar">
          <Typography sx={{ fontFamily: "IranYekan" }}>دسته ها</Typography>
          <List>
            <ListItem className="ads-sideBar_listItem">
              <ListItemIcon className="ads-sideBar_itemIcon">
                <HomeWorkOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="املاک"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <ListItem className="ads-sideBar_listItem">
              <ListItemIcon className="ads-sideBar_itemIcon">
                <DirectionsCarFilledOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="وسایل نقلیه"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <ListItem className="ads-sideBar_listItem">
              <ListItemIcon className="ads-sideBar_itemIcon">
                <PhoneIphoneOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="کالای دیجیتال"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <ListItem className="ads-sideBar_listItem">
              <ListItemIcon className="ads-sideBar_itemIcon">
                <KitchenOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="خانه و آشپزخانه"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <ListItem className="ads-sideBar_listItem">
              <ListItemIcon className="ads-sideBar_itemIcon">
                <CleaningServicesOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="خدمات"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <ListItem className="ads-sideBar_listItem">
              <ListItemIcon className="ads-sideBar_itemIcon">
                <WatchOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="وسایل شخصی"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <ListItem className="ads-sideBar_listItem">
              <ListItemIcon className="ads-sideBar_itemIcon">
                <SportsTennisOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary=" سرگرمی و فراغت"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <ListItem className="ads-sideBar_listItem">
              <ListItemIcon className="ads-sideBar_itemIcon">
                <GroupsOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="اجتماعی"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <ListItem className="ads-sideBar_listItem">
              <ListItemIcon className="ads-sideBar_itemIcon">
                <ChairAltOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary=" تجهیزات و صنعتی"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <ListItem className="ads-sideBar_listItem">
              <ListItemIcon className="ads-sideBar_itemIcon">
                <BusinessCenterOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="استخدام و کاریابی"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <Divider sx={{ width: "80%" }} />
          <ListItem onClick={handleClick} className="ads-sideBar_listItem">
            {open ? (
              <ExpandLess className="ads-sideBar_itemIcon" />
            ) : (
              <ExpandMore className="ads-sideBar_itemIcon" />
            )}
            <ListItemText
              primary="محل"
              disableTypography
              className="ads-sideBar_itemText"
            />
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Button endIcon={<KeyboardArrowLeftRoundedIcon/>}  fullWidth className="ads-sideBar_btn">تعیین محل</Button>
          </Collapse>
          <Divider sx={{ width: "80%",marginTop:2 }} />
          </List>
         
        </Box>
      </aside>
    </Container>
  );
}
