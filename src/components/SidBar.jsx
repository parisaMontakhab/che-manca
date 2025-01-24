import React, { useState } from "react";

import {
  Box,
  Divider,
  List,
  Typography,
  Grid2,
  Link,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { useCategories } from "../api/CategoriesApi";
import { priceOptions } from "../data/PriceData";

import Footer from "./Footer";

import LoadingText from "../commons/LoadingText";
import ErrorBtn from "../commons/ErrorBtn";
import BackArrowCategory from "./BackArrowCategory";
import CategoryList from "./CategoryList";
import NumeriComponent from "./NumeriComponent";
import SwitchComponent from "./SwitchComponent";
import AdsCategoryDetails from "./AdsCategoryDetails";
import ToggleComponent from "./ToggleComponent";

export default function SidBar() {
  const [selectedCategory, setSelectedCategory] = useState({});
  const [openItems, setOpenItems] = useState({});
  const [checked, setChecked] = useState({});
  const [openCategory, setOpenCategory] = useState(null);

  const handleClick = (item) => {
    setOpenItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const handleCheckedClick = (event) => {
    setChecked((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category.uniqueId) {
      setOpenCategory((prev) =>
        prev === category.uniqueId ? null : category.uniqueId
      );
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
      <Grid2 container spacing={2} component="div" className="grid">
         <Grid2 component="div" className="mt-20 w-1/4 mr-16 h-screen "> {/*fixed inja bode  */}
          <aside>
            <Box component="div" className="w-2/3 mr-auto overflow-auto">
              <Typography className="font-iranYekan">دسته ها</Typography>
              <List>
                {openCategory != null ? (
                  <BackArrowCategory
                    selectedCategory={selectedCategory}
                    handleBackClick={handleBackClick}
                  />
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
                      <CategoryList
                        category={category}
                        handleCategoryClick={handleCategoryClick}
                      />
                    </div>
                  ))
                )}

                <Divider  class="w-4/5" />
                {selectedCategory?.isLeaf != true ? (
                  <>
                    <NumeriComponent
                      title="قیمت"
                      options={priceOptions}
                      openItems={openItems}
                      handleClick={handleClick}
                    />
                    <SwitchComponent
                      title="وضعیت آگهی"
                      openItems={openItems}
                      handleClick={handleClick}
                      checked={checked}
                      setChecked={setChecked}
                      handleDeletChecked={handleDeletChecked}
                      handleCheckedClick={handleCheckedClick}
                    >
                      <FormGroup>
                        <FormControlLabel
                          className="  flex justify-between  w-4/5  [direction:ltr] custom-switchChecked "
                          label={
                            <Typography className="font-iranYekan text-[12px]">
                              عکس دار
                            </Typography>
                          }
                          control={
                            <Switch
                              checked={checked.adsStatusPhoto || false}
                              onChange={handleCheckedClick}
                              name="adsStatusPhoto"
                            />
                          }
                        />
                        <FormControlLabel
                          className="flex justify-between  w-4/5  [direction:ltr] custom-switchChecked"
                          label={
                            <Typography className="font-iranYekan text-[12px] ">
                              فوری
                            </Typography>
                          }
                          control={
                            <Switch
                              checked={checked.adsStatusForce || false}
                              onChange={handleCheckedClick}
                              name="adsStatusForce"
                            />
                          }
                        />
                      </FormGroup>
                    </SwitchComponent>
                   
                  </>
                ) : (
                  <AdsCategoryDetails
                    openItems={openItems}
                    setOpenItems={setOpenItems}
                    checked={checked}
                    setChecked={setChecked}
                    handleDeletChecked={handleDeletChecked}
                    handleCheckedClick={handleCheckedClick}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    handleClick={handleClick}
                  />
                )}
              </List>
              <nav className="text-[14px] text-customGray max-w-72 mt-2">
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
              <Divider className="w-4/5 mt-2" />

              <footer className="flex justify-center max-w-72 mt-5">
                <Footer />
              </footer>
            </Box>
          </aside>
        </Grid2>

         <Grid2 component="div" className="mt-[90px] w-3/5 overflow-auto mr-[30%]"> {/*inja ads-sideBar__gridTwo bode */}
          <main>{/* <ProductsCards /> */}</main>
        </Grid2>
      </Grid2>
    </div>
  );
}

//classname of 