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
