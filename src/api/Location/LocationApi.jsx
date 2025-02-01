import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { COUNTRIES_EP } from "./endPoints";

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

// const fetchCountries = async ()=>{
//     const response = await axios.get('https://client.mobile.chemanca.com/api/basicinfo/country/getall');
//     return response.data;
// }

//country//
 const getCountries = async () => await apiCall({ url: COUNTRIES_EP() });

export const useCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });
};

//subcountry//
 const getSubCountries = async (countryId) =>
  await apiCall({ url: COUNTRIES_EP(countryId) });

// const fetchSubCountries = async (countryId)=>{
//     const response = await axios.get(`https://client.mobile.chemanca.com/api/basicinfo/SubCountry/GetAllSubCountryByCountryId?countryId=${countryId}`);

//     return response.data;
//     }

export const useSubCountries = (countryId) => {
  return useQuery({
    queryKey: ["subCountries", countryId],
    queryFn: () => getSubCountries(countryId),
    enabled: !!countryId,
  });
};

//city//
 const getCities = async (subCountryId) =>
  await apiCall({ url: COUNTRIES_EP(subCountryId) });

// const fetchCities = async (subCountryId) => {
//     const response = await axios.get(
//       `https://client.mobile.chemanca.com/api/basicinfo/City/GetAllCityBySubCountryId?subCountryId=${subCountryId}`
//     );
//     return response.data;
//   };

export const useCities = (subCountryId) => {
  return useQuery({
    queryKey: ["cities", subCountryId],
    queryFn: () => getCities(subCountryId),
    enabled: !!subCountryId,
  });
};
