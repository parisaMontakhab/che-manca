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
    console.log(response.data)
    return response.data;
}

export const useRentPriceList = ()=>{
    return useQuery({
        queryKey:['rentPriceList'],
        queryFn: fetchRentPriceList
    })
};
