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
  useDisplayDimention,
  useOperationSystemName,
  useProcessorModel,
  useModemType,
  useJoystickType,
  useGameConsoleModel,
  useCarpetTexture,
  useCarpetDimention,
  useElectricConsumption,
  useSexFilter,
  useClothType,
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
  const { data: colorFilter } = useColorFilter();
  const { data: displayDimention } = useDisplayDimention();
  const { data: operationSystemName } = useOperationSystemName();
  const { data: processorModel } = useProcessorModel();
  const { data: modemType } = useModemType();
  const { data: joystickType } = useJoystickType();
  const { data: gameConsoleModel } = useGameConsoleModel();
  const { data: carpetTexture } = useCarpetTexture();
  const { data: carpetDimention } = useCarpetDimention();
  const { data: electricConsumption } = useElectricConsumption();
  const { data: sexFilter } = useSexFilter();
  const { data: clothType } = useClothType();

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
      {
        condition: categoryDetails.hasDisplayDimentionFilter,
        component: (
          <StringComponent
            title="  ابعاد صفحه نمایش "
            options={displayDimention}
            openItems={openItems}
            handleClick={handleClick}
            key="displayDimention"
          />
        ),
      },
      {
        condition: categoryDetails.hasOperationSystemNameFilter,
        component: (
          <StringComponent
            title="    نوع سیستم عامل "
            options={operationSystemName}
            openItems={openItems}
            handleClick={handleClick}
            key="operationSystemName"
          />
        ),
      },
      {
        condition: categoryDetails.hasProcessorModelFilter,
        component: (
          <StringComponent
            title="      مدل پردازنده "
            options={processorModel}
            openItems={openItems}
            handleClick={handleClick}
            key="processorModel"
          />
        ),
      },
      {
        condition: categoryDetails.hasModemOrRouterTypeFilter,
        component: (
          <StringComponent
            title="      نوع مودم  "
            options={modemType}
            openItems={openItems}
            handleClick={handleClick}
            key="modemType"
          />
        ),
      },
      {
        condition: categoryDetails.hasJoystickTypeFilter,
        component: (
          <StringComponent
            title="      نوع دسته بازی   "
            options={joystickType}
            openItems={openItems}
            handleClick={handleClick}
            key="joystickType"
          />
        ),
      },
      {
        condition: categoryDetails.hasGameConsoleModelFilter,
        component: (
          <StringComponent
            title="        نوع کنسول   "
            options={gameConsoleModel}
            openItems={openItems}
            handleClick={handleClick}
            key="gameConsoleModel"
          />
        ),
      },
      {
        condition: categoryDetails.hasTextureFilter,
        component: (
          <StringComponent
            title="       جنس فرش یا موکت  "
            options={carpetTexture}
            openItems={openItems}
            handleClick={handleClick}
            key="carpetTexture"
          />
        ),
      },
      {
        condition: categoryDetails.hasDimentionFilter,
        component: (
          <StringComponent
            title="      ابعاد فرش یا موکت "
            options={carpetDimention}
            openItems={openItems}
            handleClick={handleClick}
            key="carpetDimention"
          />
        ),
      },
      {
        condition: categoryDetails.hasConsumptionFilter,
        component: (
          <StringComponent
            title="     میزان مصرف"
            options={electricConsumption}
            openItems={openItems}
            handleClick={handleClick}
            key="electricConsumption"
          />
        ),
      },
      {
        condition: categoryDetails.hasSexFilter,
        component: (
          <StringComponent
            title=" نوع جنسیت"
            options={sexFilter}
            openItems={openItems}
            handleClick={handleClick}
            key="sexFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasClothTypeFilter,
        component: (
          <StringComponent
            title="  نوع لباس"
            options={clothType}
            openItems={openItems}
            handleClick={handleClick}
            key="clothType"
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
