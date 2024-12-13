import React, { Component } from "react";
import { FormGroup, Typography, FormControlLabel, Switch } from "@mui/material";
import { useCategoryDetails } from "../api/CategoriesApi";
import NumeriComponent from "./NumeriComponent";
import {
  useDepositPriceList,
  useRentPriceList,
} from "../api/DetailsRangeNumber";

export default function AdsCategoryDetails({
  openItems,
  selectedCategory,
  handleClick,
}) {
  const { data: categoryDetails } = useCategoryDetails(
    selectedCategory?.uniqueId
  );
  const { data: depositPriceList } = useDepositPriceList();
  const { data: rentPriceList } = useRentPriceList();

 
 
 
 
 
  if (categoryDetails) {
    const conditions = [
      {
        condition: categoryDetails.hasDepositFilter,
        component: (
          <NumeriComponent
            title="مبلغ بیعانه"
            options={depositPriceList}
            openItems={openItems}
            handleClick={handleClick}
            key="deposit"
          />
        ),
      },
      {
        condition: categoryDetails.hasRentPriceFilter,
        component: (
          <NumeriComponent
            title="مبلغ اجاره"
            options={rentPriceList}
            openItems={openItems}
            handleClick={handleClick}
            key="rent"
          />
        ),
      },
    ];
    return(
      <>
      {
        conditions.filter(item => item.condition).map(item=> item.component)
      }
      </>
    )
  }
}





{
  /*
          <NumeriComponent
          title="مبلغ بیعانه"
          options={depositPriceList}
          openItems={openItems}
          handleClick={handleClick}
          key="deposit"
        /> */
}
//   <NumeriComponent
//   title="مبلغ اجاره"
//   options={rentPriceList}
//   openItems={openItems}
//   handleClick={handleClick}
//   key="deposit"
// />
