import React from "react";
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
  handleCheckedClick
}) {
  const { data: categoryDetails } = useCategoryDetails(
    selectedCategory?.uniqueId
  );

  if (categoryDetails) {
    return (
      <div>
        {categoryDetails.hasLocationFilter ? (
          <SwitchComponent
            openItems={openItems}
            handleClick={handleClick}
            checked={checked}
            handleDeletChecked={handleDeletChecked}
            handleCheckedClick={handleCheckedClick}
          />
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
