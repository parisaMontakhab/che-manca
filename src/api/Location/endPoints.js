export const COUNTRIES_EP = ()=>`/basicinfo/country/getall`;

export const SUBCOUNTRIES_EP = (countryId)=>`/basicinfo/SubCountry/GetAllSubCountryByCountryId?countryId=${countryId}`;

export const CITIES_EP = (subCountryId)=>`/basicinfo/City/GetAllCityBySubCountryId?subCountryId=${subCountryId}`