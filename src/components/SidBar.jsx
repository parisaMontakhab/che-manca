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
  Grid2,
  Link,
  FormGroup,
  FormControlLabel,
  Switch,
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
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import Footer from "./Footer";

export default function SidBar() {
  const [openItems, setOpenItems] = useState({});
  const [checked, setChecked] = useState({ photo: false, force: false });

  const handleClick = (item) => {
    setOpenItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const handleCheckedClick = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };
  const handleDeleteClick  = ()=>{
    setChecked((prevChecked)=>{
      const newChecked = {};
      Object.keys(prevChecked).forEach((key) => {
        newChecked[key] = false;
      });
      return newChecked

    })
  }
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
            <ListItem
              onClick={() => handleClick("location")}
              className="ads-sideBar_listItem"
            >
              {openItems["location"] ? (
                <ExpandLess className="ads-sideBar_itemIcon" />
              ) : (
                <ExpandMore className="ads-sideBar_itemIcon" />
              )}
              <ListItemText
                primary="محل"
                disableTypography
                className="ads-sideBar_collapsText"
              />
            </ListItem>
            <Collapse in={openItems["location"]} timeout="auto" unmountOnExit>
              <Button
                endIcon={<KeyboardArrowLeftRoundedIcon />}
                fullWidth
                className="ads-sideBar_btn"
              >
                تعیین محل
              </Button>
            </Collapse>
            <Divider sx={{ width: "80%", marginTop: 2 }} />
            <ListItem
              onClick={() => handleClick("price")}
              className="ads-sideBar_listItem"
            >
              {openItems["price"] ? (
                <ExpandLess className="ads-sideBar_itemIcon" />
              ) : (
                <ExpandMore className="ads-sideBar_itemIcon" />
              )}
              <ListItemText
                primary="قیمت"
                disableTypography
                className="ads-sideBar_collapsText"
              />
            </ListItem>
            <Collapse in={openItems["price"]} timeout="auto" unmountOnExit>
              <Box>

              </Box>
            </Collapse>
            <Divider sx={{ width: "80%", marginTop: 2 }} />
            <ListItem
              onClick={() => handleClick("status")}
              className="ads-sideBar_listItem"
            >
              {openItems["status"] ? (
                <ExpandLess className="ads-sideBar_itemIcon" />
              ) : (
                <ExpandMore className="ads-sideBar_itemIcon" />
              )}
              <ListItemText
                primary="وضعیت آگهی"
                disableTypography
                className="ads-sideBar_collapsText"
              />
              {(checked["photo"] || checked["force"]) &&
                (openItems["status"] ? (
                  <Button
                    onClick={handleDeleteClick  }
                    sx={{
                      fontFamily: "IranYekan",
                      color: "#A62626",
                      marginLeft: "40px",
                    }}
                  >
                    حذف
                  </Button>
                ) : (
                  <FiberManualRecordRoundedIcon
                    sx={{
                      fontFamily: "IranYekan",
                      color: "#A62626",
                      marginLeft: "60px",
                      fontSize: "12px",
                    }}
                  />
                ))}
            </ListItem>
            <Collapse in={openItems["status"]} timeout="auto" unmountOnExit>
              <FormGroup>
                <FormControlLabel
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    direction: "ltr",
                    width: "80%",
                    "& .MuiSwitch-switchBase.Mui-checked": { color: "#A62626" },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#A62626",
                    },
                  }}
                  label={
                    <Typography
                      sx={{
                        fontFamily: "IranYekan",
                        fontSize: "12px",
                      }}
                    >
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
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    direction: "ltr",
                    width: "80%",
                    "& .MuiSwitch-switchBase.Mui-checked": { color: "#A62626" },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#A62626",
                    },
                  }}
                  label={
                    <Typography
                      sx={{
                        fontFamily: "IranYekan",
                        fontSize: "12px",
                      }}
                    >
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
          </List>
          <nav
            style={{
              fontSize: "14px",
              color: "gray",
              maxWidth: "80%",
              marginTop: 10,
            }}
          >
            <Grid2
              container
              rowSpacing={2}
              columnSpacing={4}
              justifyContent="center"
            >
              <Grid2>
                <Link href="#" color="inherit" underline="none">
                  درباره ی دیوار
                </Link>
              </Grid2>
              <Grid2>
                <Link href="#" color="inherit" underline="none">
                  دریافت برنامه
                </Link>
              </Grid2>
              <Grid2>
                <Link href="#" color="inherit" underline="none">
                  اتاق خبر
                </Link>
              </Grid2>
              <Grid2>
                <Link href="#" color="inherit" underline="none">
                  کسب و کارها
                </Link>{" "}
              </Grid2>
              <Grid2>
                <Link href="#" color="inherit" underline="none">
                  گزارش آسیب پذیری
                </Link>
              </Grid2>
              <Grid2>
                <Link href="#" color="inherit" underline="none">
                  پشتیبانی و قوانین
                </Link>
              </Grid2>
            </Grid2>
          </nav>
          <Divider sx={{ width: "80%", marginTop: 2 }} />

          <footer
            style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "80%",
              marginTop: "20px",
            }}
          >
            <Footer />
          </footer>
        </Box>
      </aside>
    </Container>
  );
}
