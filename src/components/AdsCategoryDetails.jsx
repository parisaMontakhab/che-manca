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
        {categoryDetails.hasDepositeFilter ? ("deposit"
         
        ) : (
          "salam"
        )}
      </div>
    );
  }
}


