import React from "react";
import { FormGroup, Typography, FormControlLabel, Switch } from "@mui/material";
import { useCategoryDetails } from "../api/CategoriesApi";
import BtnComponent from "./BtnComponent";
import NumeriComponent from "./NumeriComponent";
import SwitchComponent from "./SwitchComponent";
import { useDepositPriceList } from "../api/DetailsRangeNumber";

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
  const { data: depositPriceList } = useDepositPriceList();
  console.log(depositPriceList);

  if (categoryDetails) {
    return (
      <div>
        {categoryDetails.hasDepositeFilter ? (
          "deposit"
        ) : (
          <NumeriComponent
            title="مبلغ بیعانه"
            options={depositPriceList}
            openItems={openItems}
            prices={prices}
            setPrices={setPrices}
            handleClick={handleClick}
            handleDeletPrice={handleDeletPrice}
          />
        )}
      </div>
    );
  }
}
