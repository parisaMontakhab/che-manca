import React, { useState } from "react";
import { priceOptions } from "../data/PriceData";
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
  Autocomplete,
  InputAdornment,
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
  const [prices, setPrices] = useState({ minPrice: "", maxPrice: "" });

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
  const handleDeletChecked = () => {
    setChecked((prevChecked) => {
      const newChecked = {};
      Object.keys(prevChecked).forEach((key) => {
        newChecked[key] = false;
      });
      return newChecked;
    });
  };
  const handleDeletPrice = () => {
    setPrices({ minPrice: "", maxPrice: "" });
  };

  return (
    <Container maxWidth="xl">
      <aside>
        <Box component="div" className="ads-sideBar">
          <Typography sx={{ fontFamily: "IranYekan" }}>دسته ها</Typography>
          <List>
            <ListItem className="ads-sideBar__listItem">
              <ListItemIcon className="ads-sideBar__itemIcon">
                <HomeWorkOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="املاک"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <ListItem className="ads-sideBar__listItem">
              <ListItemIcon className="ads-sideBar__itemIcon">
                <DirectionsCarFilledOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="وسایل نقلیه"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <ListItem className="ads-sideBar__listItem">
              <ListItemIcon className="ads-sideBar__itemIcon">
                <PhoneIphoneOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="کالای دیجیتال"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <ListItem className="ads-sideBar__listItem">
              <ListItemIcon className="ads-sideBar__itemIcon">
                <KitchenOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="خانه و آشپزخانه"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <ListItem className="ads-sideBar__listItem">
              <ListItemIcon className="ads-sideBar__itemIcon">
                <CleaningServicesOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="خدمات"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <ListItem className="ads-sideBar__listItem">
              <ListItemIcon className="ads-sideBar__itemIcon">
                <WatchOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="وسایل شخصی"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <ListItem className="ads-sideBar__listItem">
              <ListItemIcon className="ads-sideBar__itemIcon">
                <SportsTennisOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary=" سرگرمی و فراغت"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <ListItem className="ads-sideBar__listItem">
              <ListItemIcon className="ads-sideBar__itemIcon">
                <GroupsOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="اجتماعی"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <ListItem className="ads-sideBar__listItem">
              <ListItemIcon className="ads-sideBar__itemIcon">
                <ChairAltOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary=" تجهیزات و صنعتی"
                disableTypography
                className="ads-sideBar_itemText"
              />
            </ListItem>
            <ListItem className="ads-sideBar__listItem">
              <ListItemIcon className="ads-sideBar__itemIcon">
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
              className="ads-sideBar__listItem "
            >
              {openItems["price"] ? (
                <ExpandLess className="ads-sideBar__itemIcon" />
              ) : (
                <ExpandMore className="ads-sideBar__itemIcon" />
              )}
              <ListItemText
                primary="قیمت"
                disableTypography
                className="ads-sideBar_collapsText"
              />
              {(prices.minPrice || prices.maxPrice) &&
                (openItems["price"] ? (
                  <Button
                    onClick={handleDeletPrice}
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

            <Collapse in={openItems["price"]} timeout="auto" unmountOnExit>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "80%",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "IranYekan", fontSize: "12px" }}
                >
                  حداقل
                </Typography>
                <Autocomplete
                  size="small"
                  sx={{
                    width: "70%",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "gray",
                        border: "1px solid gray",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "gray",
                        border: "1px solid gray",
                      },
                    },
                  }}
                  freeSolo
                  options={priceOptions}
                  inputValue={prices.minPrice}
                  onInputChange={(event, newValue) => {
                    setPrices({ ...prices, minPrice: newValue });
                  }}
                  forcePopupIcon={!prices.minPrice ? true : false}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="وارد کردن مقدار دلخواه"
                      sx={{
                        "& .MuiInputBase-input::placeholder": {
                          fontFamily: "IranYekan",
                          fontSize: "12px",
                        },
                      }}
                    />
                  )}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "80%",
                  marginTop: "10px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "IranYekan", fontSize: "12px" }}
                >
                  حداکثر
                </Typography>
                <Autocomplete
                  size="small"
                  sx={{
                    width: "70%",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "gray",
                        border: "1px solid gray",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "gray",
                        border: "1px solid gray",
                      },
                    },
                  }}
                  freeSolo
                  options={priceOptions}
                  inputValue={prices.maxPrice}
                  onInputChange={(event, newValue) => {
                    setPrices({ ...prices, maxPrice: newValue });
                  }}
                  forcePopupIcon={!prices.maxPrice ? true : false}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="وارد کردن مقدار دلخواه"
                      sx={{
                        "& .MuiInputBase-input::placeholder": {
                          fontFamily: "IranYekan",
                          fontSize: "12px",
                        },
                      }}
                    />
                  )}
                />
              </Box>
            </Collapse>
            <Divider sx={{ width: "80%", marginTop: 2 }} />
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
                className="ads-sideBar_collapsText"
              />
              {(checked["photo"] || checked["force"]) &&
                (openItems["status"] ? (
                  <Button
                    onClick={handleDeletChecked}
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
