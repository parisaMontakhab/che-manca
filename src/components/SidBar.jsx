import React, { useState } from "react";

import { Box, Divider, List, Typography, Grid2, Link } from "@mui/material";
import { useCategories } from "../api/categories";

import Footer from "./Footer";

import LoadingText from "../commons/LoadingText";
import ErrorBtn from "../commons/ErrorBtn";
import BackArrowCategory from "./BackArrowCategory";
import CategoryList from "./CategoryList";
import BtnComponent from "./BtnComponent";
import NumeriComponent from "./NumeriComponent";
import SwitchComponent from "./SwitchComponent";

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
      <Grid2 container spacing={2} component="div" className="ads-container">
        <Grid2 component="div" className="ads-sideBar__gridOne">
          <aside>
            <Box component="div" className="ads-sideBar">
              <Typography sx={{ fontFamily: "IranYekan" }}>دسته ها</Typography>
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

                <Divider sx={{ width: "80%" }} />
                <BtnComponent openItems={openItems} handleClick={handleClick} />
                <NumeriComponent
                  openItems={openItems}
                  prices={prices}
                  setPrices={setPrices}
                  handleClick={handleClick}
                  handleDeletPrice={handleDeletPrice}
                />
                <SwitchComponent
                  openItems={openItems}
                  handleClick={handleClick}
                  checked={checked}
                  handleDeletChecked={handleDeletChecked}
                  handleCheckedClick={handleCheckedClick}
                />
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
          <main>{/* <ProductsCards /> */}</main>
        </Grid2>
      </Grid2>
    </div>
  );
}
