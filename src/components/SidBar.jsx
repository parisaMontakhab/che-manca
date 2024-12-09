import React, { useState } from "react";
import { priceOptions } from "../data/PriceData";
import {
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  List,
  ListItem,
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
  Paper,
} from "@mui/material";
import { useCategories } from "../api/categories";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import Footer from "./Footer";
import ProductsCards from "./ProductsCards";

import LoadingText from "../commons/LoadingText";
import ErrorBtn from "../commons/ErrorBtn";
import { Category } from "@mui/icons-material";

export default function SidBar() {
  const [selectedCategory, setSelectedCategory] = useState({});
  const [openItems, setOpenItems] = useState({});
  const [checked, setChecked] = useState({ photo: false, force: false });
  const [prices, setPrices] = useState({ minPrice: "", maxPrice: "" });
  const [openCategory, setOpenCategory] = useState(null);

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
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category.uniqueId) {
      
      setOpenCategory((prev) => (prev === category.uniqueId ? null : category.uniqueId));
    }
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
    setOpenCategory(null);
  };
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: categoriesError,
  } = useCategories(selectedCategory?.uniqueId);

  return (
    <div>
      <Grid2 container spacing={2} component="div" className="ads-container">
        <Grid2 component="div" className="ads-sideBar__gridOne">
          <aside>
            <Box component="div" className="ads-sideBar">
              <Typography sx={{ fontFamily: "IranYekan" }}>دسته ها</Typography>
              <List>
                {openCategory != null ? (
                 <List>
                   <ListItem
                    onClick={handleBackClick}
                    className="ads-sideBar__listItem"
                  >
                    <ArrowForwardIcon sx={{ marginLeft: 1, fontSize: 18 }} />
                    <ListItemText
                      disableTypography
                      primary="همه ی آگهی ها"
                      className="ads-sideBar__itemText--color"
                    />
                  </ListItem>
                  <ListItem>
                  <ListItemText
                      disableTypography
                      primary={selectedCategory.localizedName}
                      className="ads-sideBar__itemText--margin"
                    />
                  </ListItem>
                 </List>
                ) : (
                  ""
                )}
                {isCategoriesLoading ? (
                  <LoadingText />
                ) : categoriesError ? (
                  <ErrorBtn />
                ) : (
                  categories?.map((category) => (
                    <div key={category.uniqueId}>
                      <ListItem
                        onClick={() => handleCategoryClick(category)}
                        className="ads-sideBar__listItem"
                      >
                        <ListItemText
                          primary={category.localizedName}
                          disableTypography
                          className={category.parentId === null ? "ads-sideBar__itemText" : "ads-sideBar__itemText--child"}
                        />
                      </ListItem>
                    </div>
                  ))
                )}

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
                    className="ads-sideBar__collapsText"
                  />
                  {(prices.minPrice || prices.maxPrice) &&
                    (openItems["price"] ? (
                      <Button
                        onClick={handleDeletPrice}
                        className="ads-sideBar__deletBtn"
                      >
                        حذف
                      </Button>
                    ) : (
                      <FiberManualRecordRoundedIcon className="ads-sideBar__deletIcon" />
                    ))}
                </ListItem>

                <Collapse in={openItems["price"]} timeout="auto" unmountOnExit>
                  <Box className="ads-sideBar__priceBox">
                    <Typography
                      variant="body1"
                      className="ads-sideBar__priceBox__title"
                    >
                      حداقل
                    </Typography>
                    <Autocomplete
                      PaperComponent={(props) => (
                        <Paper {...props} className="ads-sideBar__pricePaper" />
                      )}
                      size="small"
                      className="ads-sideBar__priceAutocomplete"
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
                          className="ads-sideBar__priceSpan"
                        />
                      )}
                    />
                  </Box>
                  <Box className="ads-sideBar__priceBox">
                    <Typography
                      variant="body1"
                      className="ads-sideBar__priceBox__title"
                    >
                      حداکثر
                    </Typography>
                    <Autocomplete
                      PaperComponent={(props) => (
                        <Paper {...props} className="ads-sideBar__pricePaper" />
                      )}
                      size="small"
                      className="ads-sideBar__priceAutocomplete"
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
                          className="ads-sideBar__priceSpan"
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
              </List>
              <nav className="ads-sideBar__nav">
                <Grid2
                  container
                  rowSpacing={2}
                  columnSpacing={3}
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
                    </Link>
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

              <footer className="ads-sideBar__footer">
                <Footer />
              </footer>
            </Box>
          </aside>
        </Grid2>

        <Grid2 component="div" className="ads-sideBar__gridTwo">
          <main>
            <ProductsCards />
          </main>
        </Grid2>
      </Grid2>
    </div>
  );
}
