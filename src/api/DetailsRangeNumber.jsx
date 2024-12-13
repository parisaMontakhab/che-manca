import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// DepositPriceList//

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

//RentPriceList//
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
