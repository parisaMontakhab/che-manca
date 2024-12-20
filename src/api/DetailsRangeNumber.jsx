import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// DepositFilter//

const fetchDepositPriceList = async ()=>{
    const response = await axios.get('https://client.mobile.chemanca.com/api/advertisements/AdsDetail/GetAllGroupedDepositePricesAsync');
    return response.data;
}

export const useDepositPriceList = ()=>{
    return useQuery({
        queryKey:['depositPriceList'],
        queryFn: fetchDepositPriceList
    })
};

//RentPriceFilter//
const fetchRentPriceList = async ()=>{
    const response = await axios.get('https://client.mobile.chemanca.com/api/advertisements/AdsDetail/GetAllGroupedRentPricesAsync');
    
    return response.data;
}

export const useRentPriceList = ()=>{
    return useQuery({
        queryKey:['rentPriceList'],
        queryFn: fetchRentPriceList
    })
};

//MetrageFilter//

const fetchMeterageList = async ()=>{
    const response = await axios.get('https://client.mobile.chemanca.com/api/advertisements/AdsDetail/GetAllGroupedMeterageAsync');
   
    return response.data;
}

export  const useMeterageList = ()=>{
    return useQuery({
        queryKey:['meterageList'],
        queryFn:fetchMeterageList
    })
}

//NumberOfRoomFilter//

const fetchNumberOfRoom = async ()=>{
    const response = await axios.get('https://client.mobile.chemanca.com/api/advertisements/AdsDetail/GetAllGroupedNumberOfRoomPerFloorAsync');
   
    return response.data;
}

export  const useNumberOfRoom = ()=>{
    return useQuery({
        queryKey:['numberOfRoom'],
        queryFn:fetchNumberOfRoom
    })
}

//NumberOfUnitsPerFloorFilter//

const fetchNumberOfUnitsPerFloor = async ()=>{
    const response = await axios.get('https://client.mobile.chemanca.com/api/advertisements/AdsDetail/GetAllGroupedUnitsPerFloorAsync');
   
    return response.data;
}

export  const useNumberOfUnitsPerFloor = ()=>{
    return useQuery({
        queryKey:['numberOfUnitsPerFloor'],
        queryFn:fetchNumberOfUnitsPerFloor
    })
}

//ProductsStatusFilter//

const fetchProductStatus = async ()=>{
    const response = await axios.get('https://client.mobile.chemanca.com/api/products/ProductStatus/GetAllProductStaus');
   
    return response.data;
}

export  const useProductStatus = ()=>{
    return useQuery({
        queryKey:['productStatus'],
        queryFn:fetchProductStatus
    })
}

// hasCreatedYearFilter//
const fetchCreatedYear = async ()=>{
    const response = await axios.get('https://client.mobile.chemanca.com/api/advertisements/AdsDetail/GetAllGroupedCreatedYearAsync');
   
    return response.data;
}

export  const useCreatedYear = ()=>{
    return useQuery({
        queryKey:['createdYear'],
        queryFn:fetchCreatedYear
    })
}

//hasBrandNameFilter //
const fetchBrandName = async ()=>{
    const response = await axios.get('https://client.mobile.chemanca.com/api/products/Brand/GetAllBrand');
   
    return response.data;
}

export  const useBrandName = ()=>{
    return useQuery({
        queryKey:['brandName'],
        queryFn:fetchBrandName
    })
}

//hasNumberOfSimCartFilter//
const fetchNumberOfSimCart = async ()=>{
    const response = await axios.get('https://client.mobile.chemanca.com/api/advertisements/AdsDetail/GetAllGroupedNumberOfSimcartAsync');
   
    return response.data;
}

export  const useNumberOfSimCart = ()=>{
    return useQuery({
        queryKey:['numberOfSimCart'],
        queryFn:fetchNumberOfSimCart
    })
}

//hasInternalMemoryCapacityFilter//
const fetchInternalMemoryCapacity = async ()=>{
    const response = await axios.get('https://client.mobile.chemanca.com/api/products/InternalMemoryCapacity/GetAllInternalMemoryCapacity');
   
    return response.data;
}

export  const useInternalMemoryCapacity = ()=>{
    return useQuery({
        queryKey:['internalMemoryCapacity'],
        queryFn:fetchInternalMemoryCapacity
    })
}

//hasRamCapacityFilter//
const fetchRamCapacity = async ()=>{
    const response = await axios.get('https://client.mobile.chemanca.com/api/products/RamCapacity/GetAllRamCapacity');
   
    return response.data;
}

export  const useRamCapacity = ()=>{
    return useQuery({
        queryKey:['ramCapacity'],
        queryFn:fetchRamCapacity
    })
}
//hasColorFilter//
const fetchColor = async ()=>{
    const response = await axios.get('https://client.mobile.chemanca.com/api/products/Color/GetAllColor');
   
    return response.data;
}

export  const useColorFilter = ()=>{
    return useQuery({
        queryKey:['colorFilter'],
        queryFn:fetchColor
    })
}

//hasDisplaydimentionFilter//
const fetchDisplayDimention = async ()=>{
    const response = await axios.get('https://client.mobile.chemanca.com/api/products/DisplayDimension/GetAllDisplayDimension');
   
    return response.data;
}

export  const useDisplayDimention = ()=>{
    return useQuery({
        queryKey:['displayDimention'],
        queryFn:fetchDisplayDimention
    })
}


