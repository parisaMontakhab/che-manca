import React from "react";
import { FormGroup, Typography, FormControlLabel, Switch } from "@mui/material";
import { useCategoryDetails } from "../api/categories";
import BtnComponent from "./BtnComponent";
import NumeriComponent from "./NumeriComponent";
import SwitchComponent from "./SwitchComponent";

export default function AdsCategoryDetails({
  openItems,
  setOpenItems,
  checked,
  setChecked,
  selectedCategory,
  setSelectedCategory,
  prices,
  setPrices,
  handleClick,
  handleDeletPrice,
  handleDeletChecked,
  handleCheckedClick,
}) {
  const { data: categoryDetails } = useCategoryDetails(
    selectedCategory?.uniqueId
  );

  if (categoryDetails) {
    return (
      <div>
        {categoryDetails.hasLocationFilter ? (
          <SwitchComponent
            title='فیلتر مکان'
            handleClickTitle='hasLocationFilter'
            openItems={openItems}
            handleClick={handleClick}
            checked={checked}
            handleDeletChecked={handleDeletChecked}
            handleCheckedClick={handleCheckedClick}
          >
            <FormGroup>
              <FormControlLabel
                className="ads-sideBar__swichStatus"
                label={
                  <Typography className="ads-sideBar__priceBox__title">
                    داره
                  </Typography>
                }
                control={
                  <Switch
                    checked={checked.photo}
                    onChange={handleCheckedClick}
                    name='photo'
                  />
                }
              />
              <FormControlLabel
                className="ads-sideBar__swichStatus"
                label={
                  <Typography className="ads-sideBar__priceBox__title ">
                    نداره
                  </Typography>
                }
                control={
                  <Switch
                    checked={checked.force}
                    onChange={handleCheckedClick}
                    name=""
                  />
                }
              />
            </FormGroup>
          </SwitchComponent>
        ) : (
          "salam"
        )}
      </div>
    );
  }
}

{
  /* <NumeriComponent
            openItems={openItems}
            prices={prices}
            setPrices={setPrices}
            handleClick={handleClick}
            handleDeletPrice={handleDeletPrice}
          /> */
}
