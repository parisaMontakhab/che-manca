import React from "react";
import { useCategoryDetails } from "../api/categories";
import BtnComponent from "./BtnComponent";

export default function AdsCategoryDetails({
  openItems,
  setOpenItems,
  checked,
  setChecked,
  selectedCategory,
  setSelectedCategory,
}) {
  const { data: categoryDetails } = useCategoryDetails(
    selectedCategory?.uniqueId
  );
 
  if (categoryDetails) {
    return (
        <div>
            {
              categoryDetails.hasLocationFilter ? ("dare")  :('salam')
            }
        </div>
      );
  }

  
}
