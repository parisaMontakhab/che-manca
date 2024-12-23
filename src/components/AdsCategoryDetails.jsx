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
  useClockType,
  useJewelryType,
  useJewelryMaterial,
  useCarOperation,
  useCarBodyStatus,
  useCarChassisStatus,
  useCarFuel,
  useCarGearboxType,
  useCarEngineStatus,
  useCarInsuranceStatus,
  useKilogramWeight,
  useChooseRoommateGender,
  useBedtype,
  useNearUniversity,
  useRoomType,
  useRentJustFor,
} from "../api/DetailsRangeNumber";
import StringComponent from "./StringComponent";
import ToggleComponent from "./ToggleComponent";
import LocationComponent from "./LocationComponent";
import DatePickComponent from "./DatePickComponent";

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
  const { data: clockType } = useClockType();
  const { data: jewelryType } = useJewelryType();
  const { data: jewelryMaterial } = useJewelryMaterial();
  const { data: carOperation } = useCarOperation();
  const { data: carBodyStatus } = useCarBodyStatus();
  const { data: carChassisStatus } = useCarChassisStatus();
  const { data: carFuel } = useCarFuel();
  const { data: carGearboxType } = useCarGearboxType();
  const { data: carEngineStatus } = useCarEngineStatus();
  const { data: carInsuranceStatus } = useCarInsuranceStatus();
  const { data: kilogramWeight } = useKilogramWeight();
  const { data: chooseRoommateGender } = useChooseRoommateGender();
  const { data: bedType } = useBedtype();
  const { data: nearUniversity } = useNearUniversity();
  const { data: roomType } = useRoomType();
  const { data: rentJustFor } = useRentJustFor();

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
      {
        condition: categoryDetails.hasClockTypeFilter,
        component: (
          <StringComponent
            title="   نوع ساعت"
            options={clockType}
            openItems={openItems}
            handleClick={handleClick}
            key="clockType"
          />
        ),
      },
      {
        condition: categoryDetails.hasJewelryTypeFilter,
        component: (
          <StringComponent
            title="    نوع جواهر و بدلیجات"
            options={jewelryType}
            openItems={openItems}
            handleClick={handleClick}
            key="jewelryType"
          />
        ),
      },
      {
        condition: categoryDetails.hasJewelryMaterialFilter,
        component: (
          <StringComponent
            title="      جنسیت جواهرات و بدلیجات "
            options={jewelryMaterial}
            openItems={openItems}
            handleClick={handleClick}
            key="jewelryMaterial"
          />
        ),
      },
      {
        condition: categoryDetails.hasCarOperationFilter,
        component: (
          <StringComponent
            title="        کیلومتر خودرو  "
            options={carOperation}
            openItems={openItems}
            handleClick={handleClick}
            key="carOperation"
          />
        ),
      },
      {
        condition: categoryDetails.hasCarBodyStatusFilter,
        component: (
          <StringComponent
            title="         وضعیت بدنه خودرو  "
            options={carBodyStatus}
            openItems={openItems}
            handleClick={handleClick}
            key="carBodyStatus"
          />
        ),
      },
      {
        condition: categoryDetails.hasCarChassisStatusFilter,
        component: (
          <StringComponent
            title="         وضعیت شاسی خودرو "
            options={carChassisStatus}
            openItems={openItems}
            handleClick={handleClick}
            key="carChassisStatus"
          />
        ),
      },
      {
        condition: categoryDetails.hasCarFuelFilter,
        component: (
          <StringComponent
            title="         نوع سوخت خودرو"
            options={carFuel}
            openItems={openItems}
            handleClick={handleClick}
            key="carFuel"
          />
        ),
      },
      {
        condition: categoryDetails.hasCarGearboxTypeFilter,
        component: (
          <StringComponent
            title="           نوع گیربکس خودرو "
            options={carGearboxType}
            openItems={openItems}
            handleClick={handleClick}
            key="carGearboxType"
          />
        ),
      },
      {
        condition: categoryDetails.hasCarEngineStatusFilter,
        component: (
          <StringComponent
            title=" وضعیت موتور خودرو"
            options={carEngineStatus}
            openItems={openItems}
            handleClick={handleClick}
            key="carEngineStatus"
          />
        ),
      },
      {
        condition: categoryDetails.hasCarInsuranceStatusFilter,
        component: (
          <StringComponent
            title="   وضعیت بیمه خودرو "
            options={carInsuranceStatus}
            openItems={openItems}
            handleClick={handleClick}
            key="carInsuranceStatus"
          />
        ),
      },
      {
        condition: categoryDetails.hasKilogramWeightFilter,
        component: (
          <StringComponent
            title="   میزان وزن"
            options={kilogramWeight}
            openItems={openItems}
            handleClick={handleClick}
            key="kilogramWeight"
          />
        ),
      },
      {
        condition: categoryDetails.hasChooseRoommateGenderFilter,
        component: (
          <StringComponent
            title="    جنسیت هم اتاقی "
            options={chooseRoommateGender}
            openItems={openItems}
            handleClick={handleClick}
            key="chooseRoommateGender"
          />
        ),
      },
      {
        condition: categoryDetails.hasBedTypeFilter,
        component: (
          <StringComponent
            title="    نوع تخت خواب "
            options={bedType}
            openItems={openItems}
            handleClick={handleClick}
            key="bedType"
          />
        ),
      },
      {
        condition: categoryDetails.hasNearUniversityFilter,
        component: (
          <StringComponent
            title="    نزدیک دانشگاه "
            options={nearUniversity}
            openItems={openItems}
            handleClick={handleClick}
            key="nearUniversity"
          />
        ),
      },
      {
        condition: categoryDetails.hasRoomTypeFilter,
        component: (
          <StringComponent
            title="    نوع اتاق خواب "
            options={roomType}
            openItems={openItems}
            handleClick={handleClick}
            key="roomType"
          />
        ),
      },
      {
        condition: categoryDetails.hasRentJustForFilter,
        component: (
          <StringComponent
            title="   اجاره داده میشه فقط به "
            options={rentJustFor}
            openItems={openItems}
            handleClick={handleClick}
            key="rentJustFor"
          />
        ),
      },
      {
        condition: categoryDetails.hasElevatorFilter,
        component: (
          <ToggleComponent
            title="  آسانسور "
            openItems={openItems}
            handleClick={handleClick}
            key="hasElevator"
          />
        ),
      },
      {
        condition: categoryDetails.hasParkingFilter,
        component: (
          <ToggleComponent
            title="  پارکینگ "
            openItems={openItems}
            handleClick={handleClick}
            key="hasParking"
          />
        ),
      },
      {
        condition: categoryDetails.hasWarehouseFilter,
        component: (
          <ToggleComponent
            title="  انباری "
            openItems={openItems}
            handleClick={handleClick}
            key="hasWarehouse"
          />
        ),
      },
      {
        condition: categoryDetails.hasRenovatedFilter,
        component: (
          <ToggleComponent
            title="  بازسازی  "
            openItems={openItems}
            handleClick={handleClick}
            key="hasRenovated"
          />
        ),
      },
      {
        condition: categoryDetails.hasCoolingFilter,
        component: (
          <ToggleComponent
            title="  سرمایشی  "
            openItems={openItems}
            handleClick={handleClick}
            key="hasCooling"
          />
        ),
      },
      {
        condition: categoryDetails.hasWarmingFilter,
        component: (
          <ToggleComponent
            title="  گرمایشی  "
            openItems={openItems}
            handleClick={handleClick}
            key="hasWarming"
          />
        ),
      },
      {
        condition: categoryDetails.hasWCFilter,
        component: (
          <ToggleComponent
            title="  سرویس بهداشتی  "
            openItems={openItems}
            handleClick={handleClick}
            key="hasWC"
          />
        ),
      },
      {
        condition: categoryDetails.hasBidelFilter,
        component: (
          <ToggleComponent
            title="   بیده  "
            openItems={openItems}
            handleClick={handleClick}
            key="hasBidel"
          />
        ),
      },
      {
        condition: categoryDetails.hasHouseContractFilter,
        component: (
          <ToggleComponent
            title="   قرارداد خونه  "
            openItems={openItems}
            handleClick={handleClick}
            key="hasHouseContract"
          />
        ),
      },
      {
        condition: categoryDetails.isPossibleToBuyInInstallmentFilter,
        component: (
          <ToggleComponent
            title="    قابل خرید اقساطی  "
            openItems={openItems}
            handleClick={handleClick}
            key="isPossibleToBuyInInstallment"
          />
        ),
      },
      {
        condition: categoryDetails.isChargableFilter,
        component: (
          <ToggleComponent
            title="    قابل  شارژ  "
            openItems={openItems}
            handleClick={handleClick}
            key="isChargable"
          />
        ),
      },
      {
        condition: categoryDetails.hasChargableFilter,
        component: (
          <ToggleComponent
            title="      شارژ  "
            openItems={openItems}
            handleClick={handleClick}
            key="hasChargable"
          />
        ),
      },
      {
        condition: categoryDetails.hasTouchableDisplayFilter,
        component: (
          <ToggleComponent
            title="      صفحه نمایشگر لمسی  "
            openItems={openItems}
            handleClick={handleClick}
            key="hasTouchableDisplay"
          />
        ),
      },
      {
        condition: categoryDetails.hasHDMIPortFilter,
        component: (
          <ToggleComponent
            title="  پورت HDMI "
            openItems={openItems}
            handleClick={handleClick}
            key="hasHDMIPort"
          />
        ),
      },
      {
        condition: categoryDetails.hasUSBPortFilter,
        component: (
          <ToggleComponent
            title="  پورت USB "
            openItems={openItems}
            handleClick={handleClick}
            key="hasUSBPort"
          />
        ),
      },
      {
        condition: categoryDetails.hasLANPortFilter,
        component: (
          <ToggleComponent
            title="  پورت LAN "
            openItems={openItems}
            handleClick={handleClick}
            key="hasLANPort"
          />
        ),
      },
      {
        condition: categoryDetails.hasGameEquipmentFilter,
        component: (
          <ToggleComponent
            title="  تجهیزات بازی  "
            openItems={openItems}
            handleClick={handleClick}
            key="hasGameEquipment"
          />
        ),
      },
      {
        condition: categoryDetails.hasSeparableFilter,
        component: (
          <ToggleComponent
            title=" بار قابل تفکیک  "
            openItems={openItems}
            handleClick={handleClick}
            key="hasSeparable"
          />
        ),
      },
      {
        condition: categoryDetails.hasIncludePackageOfDocumentsFilter,
        component: (
          <ToggleComponent
            title=" قبول مدارک  "
            openItems={openItems}
            handleClick={handleClick}
            key="hasIncludePackageOfDocuments"
          />
        ),
      },
      {
        condition: categoryDetails.hasDirectFlightFilter,
        component: (
          <ToggleComponent
            title="  پرواز مستقیم  "
            openItems={openItems}
            handleClick={handleClick}
            key="hasDirectFlight"
          />
        ),
      },
      {
        condition: categoryDetails.hasGoodAccessPointFilter,
        component: (
          <ToggleComponent
            title="   دسترسی خوب  "
            openItems={openItems}
            handleClick={handleClick}
            key="hasGoodAccessPoint"
          />
        ),
      },
      {
        condition: categoryDetails.hasInsideCityFilter,
        component: (
          <ToggleComponent
            title=" داخل شهر  "
            openItems={openItems}
            handleClick={handleClick}
            key="hasInsideCity"
          />
        ),
      },
      {
        condition: categoryDetails.hasAllIncludeBillFilter,
        component: (
          <ToggleComponent
            title="  قبض آل اینکلود  "
            openItems={openItems}
            handleClick={handleClick}
            key="hasAllIncludeBill"
          />
        ),
      },
      {
        condition: categoryDetails.hasObligationNotBeAtHomeFilter,
        component: (
          <ToggleComponent
            title=" عدم حضور در منزل  "
            openItems={openItems}
            handleClick={handleClick}
            key="hasObligationNotBeAtHome"
          />
        ),
      },
      {
        condition: categoryDetails.hasOriginFilter,
        component: (
          <LocationComponent
            title=" مبدا پرواز  "
            openItems={openItems}
            handleClick={handleClick}
            key="hasOriginFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasDestinationFilter,
        component: (
          <LocationComponent
            title="مقصد پرواز "
            openItems={openItems}
            handleClick={handleClick}
            key="hasDestinationFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasDepartureDateFilter,
        component: (
          <DatePickComponent
            title=" تاریخ پرواز "
            openItems={openItems}
            handleClick={handleClick}
            key="hasDepartureDateFilter"
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
