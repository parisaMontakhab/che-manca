import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  BRANDNAME_EP,
  CARBODYSTATUS_EP,
  CARCHASSISTSTATUS_EP,
  CARFUEL_EP,
  CARGEARBOBTYPE_EP,
  CAROPERATION_EP,
  CARPETDIMENTION_EP,
  CARPETTEXTURE_EP,
  CLOCKTYPE_EP,
  CLOTHTYPE_EP,
  COLOR_EP,
  CREATEDYEAR_EP,
  DEPOSITPRICELIST_EP,
  DISPLAYDIMENTION_EP,
  ELECTRICCONSUMPTION_EP,
  GAMECONSOLEMODEL_EP,
  INTERNALMEMORYCAPACITY_EP,
  JEWELRYMATERIAL_EP,
  JEWELRYTYPE_EP,
  JOYSTICKTYPE_EP,
  METERAGELIST_EP,
  MODEMTYPE_EP,
  NUMBEROFROOM_EP,
  NUMBEROFSIMCART_EP,
  NUMBEROFUNITSPERFLOOR_EP,
  OPERATIONSYSTEMNAME_EP,
  PROCESSORMODEL_EP,
  PRODUCTSTATUS_EP,
  RAMCAPACITY_EP,
  RENTPRICELIST_EP,
  SEX_EP,
} from "./endPoints";

const baseURL = import.meta.env.VITE_CHEMANCHA_BASE_URL;

async function apiCall({ url, options = { method: "get" } }) {
  try {
    const response = await axios[options.method](`${baseURL}${url}`);
    return response.data;
  } catch (error) {
    console.error("Error occurred during API call:", error.message);

    throw error;
  }
}

// DepositFilter//
export const getDepositePriceList = async () =>
  await apiCall({ url: DEPOSITPRICELIST_EP() });

export const useDepositPriceList = () => {
  return useQuery({
    queryKey: ["depositPriceList"],
    queryFn: getDepositePriceList,
  });
};

//RentPriceFilter//
export const getRentPriceList = async () =>
  await apiCall({ url: RENTPRICELIST_EP() });

export const useRentPriceList = () => {
  return useQuery({
    queryKey: ["rentPriceList"],
    queryFn: getRentPriceList,
  });
};

//MetrageFilter//

export const getMeterageList = async () =>
  await apiCall({ url: METERAGELIST_EP() });

export const useMeterageList = () => {
  return useQuery({
    queryKey: ["meterageList"],
    queryFn: getMeterageList,
  });
};

//NumberOfRoomFilter//

export const getNumberOfRoom = async () =>
  await apiCall({ url: NUMBEROFROOM_EP() });

export const useNumberOfRoom = () => {
  return useQuery({
    queryKey: ["numberOfRoom"],
    queryFn: getNumberOfRoom,
  });
};

//NumberOfUnitsPerFloorFilter//

export const getNumberOfUnitsPerFloor = async () =>
  await apiCall({ url: NUMBEROFUNITSPERFLOOR_EP() });

export const useNumberOfUnitsPerFloor = () => {
  return useQuery({
    queryKey: ["numberOfUnitsPerFloor"],
    queryFn: getNumberOfUnitsPerFloor,
  });
};

//ProductsStatusFilter//

export const getProductStatus = async () =>
  await apiCall({ url: PRODUCTSTATUS_EP() });

export const useProductStatus = () => {
  return useQuery({
    queryKey: ["productStatus"],
    queryFn: getProductStatus,
  });
};

// hasCreatedYearFilter//
export const getCreatedYear = async () =>
  await apiCall({ url: CREATEDYEAR_EP() });

export const useCreatedYear = () => {
  return useQuery({
    queryKey: ["createdYear"],
    queryFn: getCreatedYear,
  });
};

//hasBrandNameFilter //
export const getBrandName = async () => await apiCall({ url: BRANDNAME_EP() });

export const useBrandName = () => {
  return useQuery({
    queryKey: ["brandName"],
    queryFn: getBrandName,
  });
};

//hasNumberOfSimCartFilter//
export const getNumberOfSimCart = async () =>
  await apiCall({ url: NUMBEROFSIMCART_EP() });

export const useNumberOfSimCart = () => {
  return useQuery({
    queryKey: ["numberOfSimCart"],
    queryFn: getNumberOfSimCart,
  });
};

//hasInternalMemoryCapacityFilter//
export const getInternalMemoryCapacity = async () =>
  await apiCall({ url: INTERNALMEMORYCAPACITY_EP() });

export const useInternalMemoryCapacity = () => {
  return useQuery({
    queryKey: ["internalMemoryCapacity"],
    queryFn: getInternalMemoryCapacity,
  });
};

//hasRamCapacityFilter//
export const getRamCapacity = async () =>
  await apiCall({ url: RAMCAPACITY_EP() });

export const useRamCapacity = () => {
  return useQuery({
    queryKey: ["ramCapacity"],
    queryFn: getRamCapacity,
  });
};
//hasColorFilter//
export const getColor = async () => await apiCall({ url: COLOR_EP() });

export const useColorFilter = () => {
  return useQuery({
    queryKey: ["colorFilter"],
    queryFn: getColor,
  });
};

//hasDisplaydimentionFilter//
export const getDisplayDimention = async () =>
  await apiCall({ url: DISPLAYDIMENTION_EP() });

export const useDisplayDimention = () => {
  return useQuery({
    queryKey: ["displayDimention"],
    queryFn: getDisplayDimention,
  });
};

//hasOperationSystemNameFilter//
export const getOperationsystemName = async () =>
  await apiCall({ url: OPERATIONSYSTEMNAME_EP() });

export const useOperationSystemName = () => {
  return useQuery({
    queryKey: ["operationSystemName"],
    queryFn: getOperationsystemName,
  });
};

//hasProcessorModelFilter//
export const getProcessorModel = async () =>
  await apiCall({ url: PROCESSORMODEL_EP() });

export const useProcessorModel = () => {
  return useQuery({
    queryKey: ["processorModel"],
    queryFn: getProcessorModel,
  });
};
//hasModemOrrouterTypefilter//
export const getModemType = async () => await apiCall({ url: MODEMTYPE_EP() });

export const useModemType = () => {
  return useQuery({
    queryKey: ["modemType"],
    queryFn: getModemType,
  });
};
//hasJoystickTypefilter//
export const getJoystickType = async () =>
  await apiCall({ url: JOYSTICKTYPE_EP() });

export const useJoystickType = () => {
  return useQuery({
    queryKey: ["joystickType"],
    queryFn: getJoystickType,
  });
};
//hasGameConsoleModelFilter//
export const getGameConsoleModel = async () =>
  await apiCall({ url: GAMECONSOLEMODEL_EP() });

export const useGameConsoleModel = () => {
  return useQuery({
    queryKey: ["gameConsoleModel"],
    queryFn: getGameConsoleModel,
  });
};
//hasTextureFilter//
export const getCarpetTexture = async () =>
  await apiCall({ url: CARPETTEXTURE_EP() });

export const useCarpetTexture = () => {
  return useQuery({
    queryKey: ["carpetTexture"],
    queryFn: getCarpetTexture,
  });
};
//hasDimentionFilter//
export const getCarpetDimention = async () =>
  await apiCall({ url: CARPETDIMENTION_EP() });

export const useCarpetDimention = () => {
  return useQuery({
    queryKey: ["carpetDimention"],
    queryFn: getCarpetDimention,
  });
};
//hasConsumptionFilter//
export const getElectricConsumption = async () =>
  await apiCall({ url: ELECTRICCONSUMPTION_EP() });

export const useElectricConsumption = () => {
  return useQuery({
    queryKey: ["electricConsumption"],
    queryFn: getElectricConsumption,
  });
};
//hasSexfilter//
export const getSexFilter = async () =>
  await apiCall({ url: SEX_EP() });

export const useSexFilter = () => {
  return useQuery({
    queryKey: ["sexFilter"],
    queryFn: getSexFilter,
  });
};
//hasClothTypeFilter//
export const getClothType = async () =>
  await apiCall({ url: CLOTHTYPE_EP() });

export const useClothType = () => {
  return useQuery({
    queryKey: ["clothType"],
    queryFn: getClothType,
  });
};
//hasClockTypeFilter//
export const getClockType = async () =>
  await apiCall({ url: CLOCKTYPE_EP() });

export const useClockType = () => {
  return useQuery({
    queryKey: ["clockType"],
    queryFn: getClockType,
  });
};
//hasJewelryTypeFilter//
export const getJewelryType = async () =>
  await apiCall({ url: JEWELRYTYPE_EP() });

export const useJewelryType = () => {
  return useQuery({
    queryKey: ["jewelryType"],
    queryFn: getJewelryType,
  });
};
//hasJewelryMaterialFilter//
export const getJewelryMaterial = async () =>
  await apiCall({ url: JEWELRYMATERIAL_EP() });

export const useJewelryMaterial = () => {
  return useQuery({
    queryKey: ["jewelryMaterial"],
    queryFn: getJewelryMaterial,
  });
};
//hasCarOperationFilter//
export const getCarOperation = async () =>
  await apiCall({ url: CAROPERATION_EP() });

export const useCarOperation = () => {
  return useQuery({
    queryKey: ["carOperation"],
    queryFn: getCarOperation,
  });
};
//hasCarBodyStatusFilter//
export const getCarBodyStatus = async () =>
  await apiCall({ url: CARBODYSTATUS_EP() });

export const useCarBodyStatus = () => {
  return useQuery({
    queryKey: ["carBodyStatus"],
    queryFn: getCarBodyStatus,
  });
};
//hasCarChassisStatusFilter//
export const getCarChassisStatus = async () =>
  await apiCall({ url: CARCHASSISTSTATUS_EP() });

export const useCarChassisStatus = () => {
  return useQuery({
    queryKey: ["carChassisStatus"],
    queryFn: getCarChassisStatus,
  });
};
//hasCarFuelFilter//
export const getCarFuel = async () =>
  await apiCall({ url: CARFUEL_EP() });

export const useCarFuel = () => {
  return useQuery({
    queryKey: ["carFuel"],
    queryFn: getCarFuel,
  });
};
//hasCarGearboxTypeFilter//
export const getCarGearboxType = async () =>
  await apiCall({ url: CARGEARBOBTYPE_EP() });

export const useCarGearboxType = () => {
  return useQuery({
    queryKey: ["carGearboxType"],
    queryFn: getCarGearboxType,
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
