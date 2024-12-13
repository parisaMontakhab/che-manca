import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Deposit--PriceList//

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

