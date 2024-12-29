import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// DepositFilter//

const fetchDepositPriceList = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/advertisements/AdsDetail/GetAllGroupedDepositePricesAsync"
  );
  return response.data;
};

export const useDepositPriceList = () => {
  return useQuery({
    queryKey: ["depositPriceList"],
    queryFn: fetchDepositPriceList,
  });
};

//RentPriceFilter//
const fetchRentPriceList = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/advertisements/AdsDetail/GetAllGroupedRentPricesAsync"
  );

  return response.data;
};

export const useRentPriceList = () => {
  return useQuery({
    queryKey: ["rentPriceList"],
    queryFn: fetchRentPriceList,
  });
};

//MetrageFilter//

const fetchMeterageList = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/advertisements/AdsDetail/GetAllGroupedMeterageAsync"
  );

  return response.data;
};

export const useMeterageList = () => {
  return useQuery({
    queryKey: ["meterageList"],
    queryFn: fetchMeterageList,
  });
};

//NumberOfRoomFilter//

const fetchNumberOfRoom = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/advertisements/AdsDetail/GetAllGroupedNumberOfRoomPerFloorAsync"
  );

  return response.data;
};

export const useNumberOfRoom = () => {
  return useQuery({
    queryKey: ["numberOfRoom"],
    queryFn: fetchNumberOfRoom,
  });
};

//NumberOfUnitsPerFloorFilter//

const fetchNumberOfUnitsPerFloor = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/advertisements/AdsDetail/GetAllGroupedUnitsPerFloorAsync"
  );

  return response.data;
};

export const useNumberOfUnitsPerFloor = () => {
  return useQuery({
    queryKey: ["numberOfUnitsPerFloor"],
    queryFn: fetchNumberOfUnitsPerFloor,
  });
};

//ProductsStatusFilter//

const fetchProductStatus = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/ProductStatus/GetAllProductStaus"
  );

  return response.data;
};

export const useProductStatus = () => {
  return useQuery({
    queryKey: ["productStatus"],
    queryFn: fetchProductStatus,
  });
};

// hasCreatedYearFilter//
const fetchCreatedYear = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/advertisements/AdsDetail/GetAllGroupedCreatedYearAsync"
  );

  return response.data;
};

export const useCreatedYear = () => {
  return useQuery({
    queryKey: ["createdYear"],
    queryFn: fetchCreatedYear,
  });
};

//hasBrandNameFilter //
const fetchBrandName = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/Brand/GetAllBrand"
  );

  return response.data;
};

export const useBrandName = () => {
  return useQuery({
    queryKey: ["brandName"],
    queryFn: fetchBrandName,
  });
};

//hasNumberOfSimCartFilter//
const fetchNumberOfSimCart = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/advertisements/AdsDetail/GetAllGroupedNumberOfSimcartAsync"
  );

  return response.data;
};

export const useNumberOfSimCart = () => {
  return useQuery({
    queryKey: ["numberOfSimCart"],
    queryFn: fetchNumberOfSimCart,
  });
};

//hasInternalMemoryCapacityFilter//
const fetchInternalMemoryCapacity = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/InternalMemoryCapacity/GetAllInternalMemoryCapacity"
  );

  return response.data;
};

export const useInternalMemoryCapacity = () => {
  return useQuery({
    queryKey: ["internalMemoryCapacity"],
    queryFn: fetchInternalMemoryCapacity,
  });
};

//hasRamCapacityFilter//
const fetchRamCapacity = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/RamCapacity/GetAllRamCapacity"
  );

  return response.data;
};

export const useRamCapacity = () => {
  return useQuery({
    queryKey: ["ramCapacity"],
    queryFn: fetchRamCapacity,
  });
};
//hasColorFilter//
const fetchColor = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/Color/GetAllColor"
  );

  return response.data;
};

export const useColorFilter = () => {
  return useQuery({
    queryKey: ["colorFilter"],
    queryFn: fetchColor,
  });
};

//hasDisplaydimentionFilter//
const fetchDisplayDimention = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/DisplayDimension/GetAllDisplayDimension"
  );

  return response.data;
};

export const useDisplayDimention = () => {
  return useQuery({
    queryKey: ["displayDimention"],
    queryFn: fetchDisplayDimention,
  });
};

//hasOperationSystemNameFilter//
const fetchOperationsystemName = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/OperationSystem/GetAllOperationSystem"
  );

  return response.data;
};

export const useOperationSystemName = () => {
  return useQuery({
    queryKey: ["operationSystemName"],
    queryFn: fetchOperationsystemName,
  });
};

//hasProcessorModelFilter//
const fetchProcessorModel = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/ProcessorModel/GetAllProcessorModel"
  );

  return response.data;
};

export const useProcessorModel = () => {
  return useQuery({
    queryKey: ["processorModel"],
    queryFn: fetchProcessorModel,
  });
};
//hasModemOrrouterTypefilter//
const fetchModemType = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/ModemRouterBrand/GetAllModemRouterBrand"
  );

  return response.data;
};

export const useModemType = () => {
  return useQuery({
    queryKey: ["modemType"],
    queryFn: fetchModemType,
  });
};
//hasJoystickTypefilter//
const fetchJoystickType = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/JoyStickType/GetAllJoyStickType"
  );

  return response.data;
};

export const useJoystickType = () => {
  return useQuery({
    queryKey: ["joystickType"],
    queryFn: fetchJoystickType,
  });
};
//hasGameConsoleModelFilter//
const fetchGameConsoleModel = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/GameConsoleModel/GetAllGameConsoleModel"
  );

  return response.data;
};

export const useGameConsoleModel = () => {
  return useQuery({
    queryKey: ["gameConsoleModel"],
    queryFn: fetchGameConsoleModel,
  });
};
//hasTextureFilter//
const fetchCarpetTexture = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/CarpetTexture/GetAllCarpetTexture"
  );

  return response.data;
};

export const useCarpetTexture = () => {
  return useQuery({
    queryKey: ["carpetTexture"],
    queryFn: fetchCarpetTexture,
  });
};
//hasDimentionFilter//
const fetchCarpetDimention = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/CarpetDimension/GetAllCarpetDimension"
  );

  return response.data;
};

export const useCarpetDimention = () => {
  return useQuery({
    queryKey: ["carpetDimention"],
    queryFn: fetchCarpetDimention,
  });
};
//hasConsumptionFilter//
const fetchElectricConsumption = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/ElectricConsumption/GetAllElectricConsumption"
  );

  return response.data;
};

export const useElectricConsumption = () => {
  return useQuery({
    queryKey: ["electricConsumption"],
    queryFn: fetchElectricConsumption,
  });
};
//hasSexfilter//
const fetchSexFilter = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/Gender/GetAllGender"
  );

  return response.data;
};

export const useSexFilter = () => {
  return useQuery({
    queryKey: ["sexFilter"],
    queryFn: fetchSexFilter,
  });
};
//hasClothTypeFilter//
const fetchClothType = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/ClothType/GetAllClothType"
  );

  return response.data;
};

export const useClothType = () => {
  return useQuery({
    queryKey: ["clothType"],
    queryFn: fetchClothType,
  });
};
//hasClockTypeFilter//
const fetchClockType = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/ClockType/GetAllClockType"
  );

  return response.data;
};

export const useClockType = () => {
  return useQuery({
    queryKey: ["clockType"],
    queryFn: fetchClockType,
  });
};
//hasJewelryTypeFilter//
const fetchJewelryType = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/JewelryType/GetAllJewelryType"
  );

  return response.data;
};

export const useJewelryType = () => {
  return useQuery({
    queryKey: ["jewelryType"],
    queryFn: fetchJewelryType,
  });
};
//hasJewelryMaterialFilter//
const fetchJewelryMaterial = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/JewelryMaterial/GetAllJewelryMaterial"
  );

  return response.data;
};

export const useJewelryMaterial = () => {
  return useQuery({
    queryKey: ["jewelryMaterial"],
    queryFn: fetchJewelryMaterial,
  });
};
//hasCarOperationFilter//
const fetchCarOperation = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/CarOperationKilometer/GetAllCarOperationKilometer"
  );

  return response.data;
};

export const useCarOperation = () => {
  return useQuery({
    queryKey: ["carOperation"],
    queryFn: fetchCarOperation,
  });
};
//hasCarBodyStatusFilter//
const fetchCarBodyStatus = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/CarBodyStatus/GetAllCarBodyStatus"
  );

  return response.data;
};

export const useCarBodyStatus = () => {
  return useQuery({
    queryKey: ["carBodyStatus"],
    queryFn: fetchCarBodyStatus,
  });
};
//hasCarChassisStatusFilter//
const fetchCarChassisStatus = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/CarChassisStatus/GetAllCarChassisStatus"
  );

  return response.data;
};

export const useCarChassisStatus = () => {
  return useQuery({
    queryKey: ["carChassisStatus"],
    queryFn: fetchCarChassisStatus,
  });
};
//hasCarFuelFilter//
const fetchCarFuel = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/CarFuelStatus/GetAllCarFuelStatus"
  );

  return response.data;
};

export const useCarFuel = () => {
  return useQuery({
    queryKey: ["carFuel"],
    queryFn: fetchCarFuel,
  });
};
//hasCarGearboxTypeFilter//
const fetchCarGearboxType = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/CarGearboxType/GetAllCarGearboxType"
  );

  return response.data;
};

export const useCarGearboxType = () => {
  return useQuery({
    queryKey: ["carGearboxType"],
    queryFn: fetchCarGearboxType,
  });
};
//hasCarEngineStatusFilter//
const fetchCarEngineStatus = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/CarEngineStatus/GetAllCarEngineStatus"
  );

  return response.data;
};

export const useCarEngineStatus = () => {
  return useQuery({
    queryKey: ["carEngineStatus"],
    queryFn: fetchCarEngineStatus,
  });
};
//hasCarInsuranceStatusFilter//
const fetchCarInsuranceStatus = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/CarInsuranceStatus/GetAllCarInsuranceStatus"
  );

  return response.data;
};

export const useCarInsuranceStatus = () => {
  return useQuery({
    queryKey: ["carInsuranceStatus"],
    queryFn: fetchCarInsuranceStatus,
  });
};
//hasKilogramWeightFilter//
const fetchKilogramWeight = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/Kilogram/GetAllKilogram"
  );

  return response.data;
};

export const useKilogramWeight = () => {
  return useQuery({
    queryKey: ["kilogramWeight"],
    queryFn: fetchKilogramWeight,
  });
};
//hasChooseRoommateGenderFilter//
const fetchChooseRoommateGender = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/Gender/GetAllGender"
  );

  return response.data;
};

export const useChooseRoommateGender = () => {
  return useQuery({
    queryKey: ["chooseRoommateGender"],
    queryFn: fetchChooseRoommateGender,
  });
};
//hasBedTypeFilter//
const fetchBedType = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/BedType/GetAllBedType"
  );

  return response.data;
};

export const useBedtype = () => {
  return useQuery({
    queryKey: ["bedType"],
    queryFn: fetchBedType,
  });
};
//hasNearUniversityFilter//
const fetchNearUniversity = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/basicInfo/University/GetAllUniversity"
  );

  return response.data;
};

export const useNearUniversity = () => {
  return useQuery({
    queryKey: ["nearUniversity"],
    queryFn: fetchNearUniversity,
  });
};
//hasRoomTypeFilter//
const fetchRoomType = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/RoomType/GetAllRoomType"
  );

  return response.data;
};

export const useRoomType = () => {
  return useQuery({
    queryKey: ["roomType"],
    queryFn: fetchRoomType,
  });
};
//hasRentJustForFilter//
const fetchRentJustFor = async () => {
  const response = await axios.get(
    "https://client.mobile.chemanca.com/api/products/Gender/GetAllGender"
  );

  return response.data;
};

export const useRentJustFor = () => {
  return useQuery({
    queryKey: ["rentJustFor"],
    queryFn: fetchRentJustFor,
  });
};



