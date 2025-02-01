import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BRANDNAME_EP, COLOR_EP, CREATEDYEAR_EP, DEPOSITPRICELIST_EP,INTERNALMEMORYCAPACITY_EP,METERAGELIST_EP,NUMBEROFROOM_EP,NUMBEROFSIMCART_EP,NUMBEROFUNITSPERFLOOR_EP,PRODUCTSTATUS_EP,RAMCAPACITY_EP,RENTPRICELIST_EP } from "./endPoints";

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
export const getBrandName = async () =>
  await apiCall({ url: BRANDNAME_EP() });

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
export const getColor = async () =>
  await apiCall({ url: COLOR_EP() });

export const useColorFilter = () => {
  return useQuery({
    queryKey: ["colorFilter"],
    queryFn: getColor,
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



