import React, { Component, useCallback, useState } from "react";
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
} from "../api/FilterDetailsAds";
import StringComponent from "./StringComponent";
import ToggleComponent from "./ToggleComponent";
import LocationComponent from "./LocationComponent";
import DatePickComponent from "./DatePickComponent";

const initialGetAllAdsModel = [
  {
    key: "hasDepositFilter",
    value: null,
  },
  {
    key: "hasRentPriceFilter",
    value: null,
  },
  {
    key: "hasMeterageFilter",
    value: null,
  },
  {
    key: "hasNumberOfRoomFilter",
    value: null,
  },
  {
    key: "hasNumberOfUnitsPerFloorFilter",
    value: null,
  },
  {
    key: "hasProductStatusFilter",
    value: null,
  },
  {
    key: "hasCreatedYearFilter",
    value: null,
  },
  {
    key: "hasBrandNameFilter",
    value: null,
  },
  {
    key: "hasNumberOfSimCartFilter",
    value: null,
  },
  {
    key: "hasInternalMemoryCapacityFilter",
    value: null,
  },
  {
    key: "hasRamCapacityFilter",
    value: null,
  },
  {
    key: "hasColorFilter",
    value: null,
  },
  {
    key: "hasDisplayDimentionFilter",
    value: null,
  },
  {
    key: "hasOperationSystemNameFilter",
    value: null,
  },
  {
    key: "hasProcessorModelFilter",
    value: null,
  },
  {
    key: "hasModemOrRouterTypeFilter",
    value: null,
  },
  {
    key: "hasJoystickTypeFilter",
    value: null,
  },
  {
    key: "hasGameConsoleModelFilter",
    value: null,
  },
  {
    key: "hasTextureFilter",
    value: null,
  },
  {
    key: "hasDimentionFilter",
    value: null,
  },
  {
    key: "hasConsumptionFilter",
    value: null,
  },
  {
    key: "hasSexFilter",
    value: null,
  },
  {
    key: "hasClothTypeFilter",
    value: null,
  },
  {
    key: "hasClockTypeFilter",
    value: null,
  },
  {
    key: "hasJewelryTypeFilter",
    value: null,
  },
  {
    key: "hasJewelryMaterialFilter",
    value: null,
  },
  {
    key: "hasCarOperationFilter",
    value: null,
  },
  {
    key: "hasCarBodyStatusFilter",
    value: null,
  },
  {
    key: "hasCarChassisStatusFilter",
    value: null,
  },
  {
    key: "hasCarFuelFilter",
    value: null,
  },
  {
    key: "hasCarGearboxTypeFilter",
    value: null,
  },
  {
    key: "hasCarEngineStatusFilter",
    value: null,
  },
  {
    key: "hasCarInsuranceStatusFilter",
    value: null,
  },
  {
    key: "hasKilogramWeightFilter",
    value: null,
  },
  {
    key: "hasChooseRoommateGenderFilter",
    value: null,
  },
  {
    key: "hasBedTypeFilter",
    value: null,
  },
  {
    key: "hasNearUniversityFilter",
    value: null,
  },
  {
    key: "hasRoomTypeFilter",
    value: null,
  },
  {
    key: "hasRentJustForFilter",
    value: null,
  },
  {
    key: "hasElevatorFilter",
    value: null,
  },
  {
    key: "hasParkingFilter",
    value: null,
  },
  {
    key: "hasWarehouseFilter",
    value: null,
  },
  {
    key: "hasRenovatedFilter",
    value: null,
  },
  {
    key: "hasCoolingFilter",
    value: null,
  },
  {
    key: "hasWarmingFilter",
    value: null,
  },
  {
    key: "hasWCFilter",
    value: null,
  },
  {
    key: "hasBidelFilter",
    value: null,
  },
  {
    key: "hasHouseContractFilter",
    value: null,
  },
  {
    key: "isPossibleToBuyInInstallmentFilter",
    value: null,
  },
  {
    key: "isChargableFilter",
    value: null,
  },
  {
    key: "hasChargableFilter",
    value: null,
  },
  {
    key: "hasTouchableDisplayFilter",
    value: null,
  },
  {
    key: "hasHDMIPortFilter",
    value: null,
  },
  {
    key: "hasUSBPortFilter",
    value: null,
  },
  {
    key: "hasLANPortFilter",
    value: null,
  },
  {
    key: "hasGameEquipmentFilter",
    value: null,
  },
  {
    key: "hasSeparableFilter",
    value: null,
  },
  {
    key: "hasIncludePackageOfDocumentsFilter",
    value: null,
  },
  {
    key: "hasDirectFlightFilter",
    value: null,
  },
  {
    key: "hasGoodAccessPointFilter",
    value: null,
  },
  {
    key: "hasInsideCityFilter",
    value: null,
  },
  {
    key: "hasAllIncludeBillFilter",
    value: null,
  },
  {
    key: "hasObligationNotBeAtHomeFilter",
    value: null,
  },
  {
    key: "hasOriginFilter",
    value: null,
  },
  {
    key: "hasDestinationFilter",
    value: null,
  },
  {
    key: "hasDepartureDateFilter",
    value: null,
  },
];

export default function AdsCategoryDetails({
  openItems,
  selectedCategory,
  handleClick,
}) {
  //state//
  const [getAllAdsModel, setGetAllAdsModel] = useState(initialGetAllAdsModel);

  //from api//
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
  //functions//
  //on numeric component//
  const handleUpdateHasDeposit = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasDepositFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasRentPrice = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasRentPriceFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasMeterage = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasMeterageFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasNumberOfRoom = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasNumberOfRoomFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasNumberOfUnitsPerFloor = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasNumberOfUnitsPerFloorFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasCreatedYear = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasCreatedYearFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasNumberOfsimCart = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasNumberOfSimCartFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  //on string component//
  const handleUpdateHasProductStatus = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasProductStatusFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasBrandName = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasBrandNameFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasInternalMemoryCapacity = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasInternalMemoryCapacityFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasRamCapacity = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasRamCapacityFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasColor = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasColorFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasDisplayDimention = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasDisplayDimentionFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasOperationSystemName = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasOperationSystemNameFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasProcessorModel = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasProcessorModelFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasModemType = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasModemOrRouterTypeFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasJoystickType = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasJoystickTypeFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasGameConsoleModel = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasGameConsoleModelFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasTexture = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasTextureFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasDimention = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasDimentionFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasConsumption = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasConsumptionFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasSex = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasSexFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasClothType = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasClothTypeFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasClockType = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasClockTypeFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasJewelryType = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasJewelryTypeFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasJewelryMaterial = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasJewelryMaterialFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasCarOperation = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasCarOperationFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasCarBodyStatus = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasCarBodyStatusFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasCarChassisStatus = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasCarChassisStatusFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasCarFuel = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasCarFuelFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasCarGearBoxType = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasCarGearboxTypeFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasCarEngineStatus = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasCarEngineStatusFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasCarInsuranceStatus = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasCarInsuranceStatusFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasKilogramWeight = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasKilogramWeightFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasChooseRoommateGender = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasChooseRoommateGenderFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasBedType = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasBedTypeFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasNearUniversity = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasNearUniversityFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasRoomType = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasRoomTypeFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasRentJustFor = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasRentJustForFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  //on togglecomponent//
  const handleUpdtaeHasElevator = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasElevatorFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasParking = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasParkingFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdataHasWarehouse = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasWarehouseFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasRenovated = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasRenovatedFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasCooling = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasCoolingFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasWarming = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasWarmingFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasWc = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasWCFilter" ? {...model,value} : model
      )
    
    );
  }, []);
  const handleUpdateHasBidel = useCallback((value) => {
    setGetAllAdsModel((prevModel) => 
      prevModel.map((model)=>
        model.key == "hasBidelFilter" ? {...model,value} : model
      )
    
    );
  }, []);


 
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
            handleUpdateGetAllAdsModel={handleUpdateHasDeposit}
            key="hasDepositFilter"
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
            handleUpdateGetAllAdsModel={handleUpdateHasRentPrice}
            key="hasRentPriceFilter"
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
            handleUpdateGetAllAdsModel={handleUpdateHasMeterage}
            key="hasMeterageFilter"
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
            handleUpdateGetAllAdsModel={handleUpdateHasNumberOfRoom}
            key="hasNumberOfRoomFilter"
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
            handleUpdateGetAllAdsModel={handleUpdateHasNumberOfUnitsPerFloor}
            key="hasNumberOfUnitsPerFloorFilter"
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
            handleUpdateGetAllAdsModel={handleUpdateHasProductStatus}
            key="hasProductStatusFilter"
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
            handleUpdateGetAllAdsModel={handleUpdateHasCreatedYear}
            key="hasCreatedYearFilter"
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
            handleUpdateGetAllAdsModel={handleUpdateHasBrandName}
            key="hasBrandNameFilter"
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
            handleUpdateGetAllAdsModel={handleUpdateHasNumberOfsimCart}
            key="hasNumberOfSimCartFilter"
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
            handleUpdateGetAllAdsModel={handleUpdateHasInternalMemoryCapacity}
            key="hasInternalMemoryCapacityFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasRamCapacityFilter,
        component: (
          <StringComponent
            title=" میزان حافظه Ram"
            options={ramCapacity}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasRamCapacity}
            key="hasRamCapacityFilter"
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
            handleUpdateGetAllAdsModel={handleUpdateHasColor}
            key="hasColorFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasDisplayDimentionFilter,
        component: (
          <StringComponent
            title=" ابعاد صفحه نمایش "
            options={displayDimention}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasDisplayDimention}
            key="hasDisplayDimentionFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasOperationSystemNameFilter,
        component: (
          <StringComponent
            title=" نوع سیستم عامل "
            options={operationSystemName}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasOperationSystemName}
            key="hasOperationSystemNameFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasProcessorModelFilter,
        component: (
          <StringComponent
            title=" مدل پردازنده "
            options={processorModel}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasProcessorModel}
            key="hasProcessorModelFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasModemOrRouterTypeFilter,
        component: (
          <StringComponent
            title=" نوع مودم "
            options={modemType}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasModemType}
            key="hasModemOrRouterTypeFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasJoystickTypeFilter,
        component: (
          <StringComponent
            title=" نوع دسته بازی "
            options={joystickType}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasJoystickType}
            key="hasJoystickTypeFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasGameConsoleModelFilter,
        component: (
          <StringComponent
            title=" نوع کنسول "
            options={gameConsoleModel}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasGameConsoleModel}
            key="hasGameConsoleModelFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasTextureFilter,
        component: (
          <StringComponent
            title=" جنس فرش یا موکت  "
            options={carpetTexture}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasTexture}
            key="hasTextureFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasDimentionFilter,
        component: (
          <StringComponent
            title="  ابعاد فرش یا موکت "
            options={carpetDimention}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasDimention}
            key="hasDimentionFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasConsumptionFilter,
        component: (
          <StringComponent
            title=" میزان مصرف"
            options={electricConsumption}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasConsumption}
            key="hasConsumptionFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasSexFilter,
        component: (
          <StringComponent
            title="نوع جنسیت"
            options={sexFilter}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasSex}
            key="hasSexFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasClothTypeFilter,
        component: (
          <StringComponent
            title=" نوع لباس"
            options={clothType}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasClothType}
            key="hasClothTypeFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasClockTypeFilter,
        component: (
          <StringComponent
            title=" نوع ساعت"
            options={clockType}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasClockType}
            key="hasClockTypeFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasJewelryTypeFilter,
        component: (
          <StringComponent
            title=" نوع جواهر و بدلیجات"
            options={jewelryType}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasJewelryType}
            key="hasJewelryTypeFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasJewelryMaterialFilter,
        component: (
          <StringComponent
            title=" جنسیت جواهرات و بدلیجات "
            options={jewelryMaterial}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasJewelryMaterial}
            key="hasJewelryMaterialFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasCarOperationFilter,
        component: (
          <StringComponent
            title=" کیلومتر خودرو  "
            options={carOperation}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasCarOperation}
            key="hasCarOperationFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasCarBodyStatusFilter,
        component: (
          <StringComponent
            title=" وضعیت بدنه خودرو  "
            options={carBodyStatus}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasCarBodyStatus}
            key="hasCarBodyStatusFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasCarChassisStatusFilter,
        component: (
          <StringComponent
            title=" وضعیت شاسی خودرو "
            options={carChassisStatus}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasCarChassisStatus}
            key="hasCarChassisStatusFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasCarFuelFilter,
        component: (
          <StringComponent
            title=" نوع سوخت خودرو"
            options={carFuel}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasCarFuel}
            key="hasCarFuelFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasCarGearboxTypeFilter,
        component: (
          <StringComponent
            title=" نوع گیربکس خودرو "
            options={carGearboxType}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasCarGearBoxType}
            key="hasCarGearboxTypeFilter"
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
            handleUpdateGetAllAdsModel={handleUpdateHasCarEngineStatus}
            key="hasCarEngineStatusFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasCarInsuranceStatusFilter,
        component: (
          <StringComponent
            title=" وضعیت بیمه خودرو "
            options={carInsuranceStatus}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasCarInsuranceStatus}
            key="hasCarInsuranceStatusFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasKilogramWeightFilter,
        component: (
          <StringComponent
            title=" میزان وزن"
            options={kilogramWeight}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasKilogramWeight}
            key="hasKilogramWeightFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasChooseRoommateGenderFilter,
        component: (
          <StringComponent
            title="جنسیت هم اتاقی "
            options={chooseRoommateGender}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasChooseRoommateGender}
            key="hasChooseRoommateGenderFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasBedTypeFilter,
        component: (
          <StringComponent
            title=" نوع تخت خواب "
            options={bedType}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasBedType}
            key="hasBedTypeFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasNearUniversityFilter,
        component: (
          <StringComponent
            title="  نزدیک دانشگاه "
            options={nearUniversity}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasNearUniversity}
            key="hasNearUniversityFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasRoomTypeFilter,
        component: (
          <StringComponent
            title=" نوع اتاق خواب "
            options={roomType}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasRoomType}
            key="hasRoomTypeFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasRentJustForFilter,
        component: (
          <StringComponent
            title=" اجاره داده میشه فقط به "
            options={rentJustFor}
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasRentJustFor}
            key="hasRentJustForFilter"
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
            handleUpdateGetAllAdsModel={handleUpdtaeHasElevator}
            key="hasElevatorFilter"
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
            handleUpdateGetAllAdsModel={handleUpdateHasParking}
            key="hasParkingFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasWarehouseFilter,
        component: (
          <ToggleComponent
            title="  انباری"
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdataHasWarehouse}
            key="hasWarehouseFilter"
          />
        ),
      },
      {
        condition: categoryDetails.hasRenovatedFilter,
        component: (
          <ToggleComponent
            title="  بازسازی"
            openItems={openItems}
            handleClick={handleClick}
            handleUpdateGetAllAdsModel={handleUpdateHasRenovated}
            key="hasRenovatedFilter"
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
            handleUpdateGetAllAdsModel={handleUpdateHasCooling}
            key="hasCoolingFilter"
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
            handleUpdateGetAllAdsModel={handleUpdateHasWarming}
            key="hasWarmingFilter"
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
            handleUpdateGetAllAdsModel={handleUpdateHasWc}
            key="hasWCFilter"
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
            handleUpdateGetAllAdsModel={handleUpdateHasBidel}
            key="hasBidelFilter"
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
            key="hasHouseContractFilter"
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
            key="isPossibleToBuyInInstallmentFilter"
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
            key="isChargableFilter"
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
            key="hasChargableFilter"
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
            key="hasTouchableDisplayFilter"
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
            key="hasHDMIPortFilter"
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
            key="hasUSBPortFilter"
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
            key="hasLANPortFilter"
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
            key="hasGameEquipmentFilter"
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
            key="hasSeparableFilter"
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
            key="hasIncludePackageOfDocumentsFilter"
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
            key="hasDirectFlightFilter"
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
            key="hasGoodAccessPointFilter"
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
            key="hasInsideCityFilter"
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
            key="hasAllIncludeBillFilter"
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
            key="hasObligationNotBeAtHomeFilter"
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
