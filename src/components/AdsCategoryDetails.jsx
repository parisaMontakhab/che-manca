import React, { Component, useState } from "react";
import { FormGroup, Typography, FormControlLabel, Switch } from "@mui/material";
import { useCategoryDetails } from "../api/CategoriesApi";
import NumeriComponent from "./NumeriComponent";
import {
  useDepositPriceList,
  useRentPriceList,
  useMeterageList,
  useNumberOfRoom,
  useNumberOfUnitsPerFloor,
  useProductStatus,
  useCreatedYear,
  useBrandName,
  useNumberOfSimCart,
  useInternalMemoryCapacity,
  useRamCapacity,
  useColorFilter,
} from "../api/DetailsRangeNumber";
import StringComponent from "./StringComponent";

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
  const { data: meterageList } = useMeterageList();
  const { data: numberOfRoom } = useNumberOfRoom();
  const { data: numberOfUnitsPerFloor } = useNumberOfUnitsPerFloor();
  const { data: productStatus } = useProductStatus();
  const { data: createdYear } = useCreatedYear();
  const { data: brandName } = useBrandName();
  const { data: numberOfSimCart } = useNumberOfSimCart();
  const { data: internalMemoryCapacity } = useInternalMemoryCapacity();
  const { data: ramCapacity } = useRamCapacity();
  const{data:colorFilter} = useColorFilter();
 

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
      {
        condition: categoryDetails.hasMeterageFilter,
        component: (
          <NumeriComponent
            title="متراژ "
            options={meterageList}
            openItems={openItems}
            handleClick={handleClick}
            key="meterage"
          />
        ),
      },
      {
        condition: categoryDetails.hasNumberOfRoomFilter,
        component: (
          <NumeriComponent
            title="تعداد اتاق "
            options={numberOfRoom}
            openItems={openItems}
            handleClick={handleClick}
            key="numberOfRoom"
          />
        ),
      },
      {
        condition: categoryDetails.hasNumberOfUnitsPerFloorFilter,
        component: (
          <NumeriComponent
            title="تعداد واحد در طبقه "
            options={numberOfUnitsPerFloor}
            openItems={openItems}
            handleClick={handleClick}
            key="numberOfUnitsPerfloor"
          />
        ),
      },
      {
        condition: categoryDetails.hasProductStatusFilter,
        component: (
          <StringComponent
            title="وضعیت محصول"
            options={productStatus}
            openItems={openItems}
            handleClick={handleClick}
            key="productStatus"
          />
        ),
      },
      {
        condition: categoryDetails.hasCreatedYearFilter,
        component: (
          <NumeriComponent
            title=" سال ساخت"
            options={createdYear}
            openItems={openItems}
            handleClick={handleClick}
            key="createdYear"
          />
        ),
      },
      {
        condition: categoryDetails.hasBrandNameFilter,
        component: (
          <StringComponent
            title=" انتخاب برند "
            options={brandName}
            openItems={openItems}
            handleClick={handleClick}
            key="brandName"
          />
        ),
      },
      {
        condition: categoryDetails.hasNumberOfSimCartFilter,
        component: (
          <NumeriComponent
            title="  تعداد سیم کارت "
            options={numberOfSimCart}
            openItems={openItems}
            handleClick={handleClick}
            key="numberOfSimCart"
          />
        ),
      },
      {
        condition: categoryDetails.hasInternalMemoryCapacityFilter,
        component: (
          <StringComponent
            title="   میزان حافظه داخلی"
            options={internalMemoryCapacity}
            openItems={openItems}
            handleClick={handleClick}
            key="internalMemoryCapacity"
          />
        ),
      },
      {
        condition: categoryDetails.hasRamCapacityFilter,
        component: (
          <StringComponent
            title="     میزان حافظه Ram"
            options={ramCapacity}
            openItems={openItems}
            handleClick={handleClick}
            key="ramCapacity"
          />
        ),
      },
      {
        condition: categoryDetails.hasColorFilter,
        component: (
          <StringComponent
            title=" انتخاب رنگ "
            options={colorFilter}
            openItems={openItems}
            handleClick={handleClick}
            key="colorFilter"
          />
        ),
      },
    ];
    return (
      <>
        {conditions
          .filter((item) => item.condition)
          .map((item) => item.component)}
      </>
    );
  }
}
