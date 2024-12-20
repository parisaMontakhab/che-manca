import { useQuery } from "@tanstack/react-query";
import axios from "axios";


//country//

const fetchCountries = async ()=>{
    const response = await axios.get('https://client.mobile.chemanca.com/api/basicinfo/country/getall');
    return response.data;
}

export const useCountries = ()=>{
    return useQuery({
        queryKey:['countries'],
        queryFn:fetchCountries,
    });
}

//subcountry//
const fetchSubCountries = async (countryId)=>{
    const response = await axios.get(`https://client.mobile.chemanca.com/api/basicinfo/SubCountry/GetAllSubCountryByCountryId?countryId=${countryId}`);
    
    return response.data;
    }


    
    export const useSubCountries = (countryId)=>{
        return useQuery({
            queryKey:['subCountries',countryId],
            queryFn:() => fetchSubCountries(countryId),
            enabled: !!countryId,
        });
    
    }


    //city//
    const fetchCities = async (subCountryId) => {
        const response = await axios.get(
          `https://client.mobile.chemanca.com/api/basicinfo/City/GetAllCityBySubCountryId?subCountryId=${subCountryId}`
        );
        return response.data;
      };
      
      export const useCities = (subCountryId) => {
        return useQuery({
          queryKey: ["cities", subCountryId],
          queryFn: () => fetchCities(subCountryId),
          enabled: !!subCountryId,
        });
      };
      