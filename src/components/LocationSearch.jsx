import React from "react";
import { useState } from "react";
import { Box, TextField, Paper } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useCountries } from "../api/location";
import { useSubCountries } from "../api/location";
import { useCities } from "../api/location";

export default function LocationSearch() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedSubCountry, setselectedSubCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const {
    data: countries,
    isLoading: isCountriesLoading,
    error: countriesError,
  } = useCountries();
  const {
    data: subCountries,
    isLoading: isSubCountriesLoading,
    error: subCountriesError,
  } = useSubCountries(selectedCountry?.id);
  const {
    data: cities,
    isLoading: isCitiesLoading,
    error: citiesError,
  } = useCities(selectedSubCountry?.id);

  const handleCountryChange = (event, newCountry) => {
    setSelectedCountry(newCountry);
    setselectedSubCountry(null);
    setSelectedCity(null);
  };

  const handlesubCountryChange = (event, newSubCountry) => {
    setselectedSubCountry(newSubCountry);
    setSelectedCity(null);
  };
  //Error//
  if (countriesError) return <div>Error loading countries!</div>;
  if (subCountriesError) return <div>Error loading provinces!</div>;
  if (citiesError) return <div>Error loading cities!</div>;
  //Loading//
  if (isCountriesLoading) return <div>Loading countries...</div>;
  if (isSubCountriesLoading) return <div>Loading provinces...</div>;
  if (isCitiesLoading) return <div>Loading cities...</div>;

  return (
    <Box my={8}>
      <Autocomplete
        PaperComponent={(props) => (
          <Paper {...props} className="autocomplete-listbox" />
        )}
        id="country-search"
        options={countries?.map((country) => ({
          label: country.text,
          id: country.value,
        }))}
        value={selectedCountry}
        onChange={handleCountryChange}
        renderInput={(params) => (
          <TextField
            className="locationSearch-input"
            type="search"
            sx={{ "& ::placeholder": { fontFamily: "IranYekan" } }}
            {...params}
            placeholder="اول کشورتو انتخاب کن"
          />
        )}
      />
      {selectedCountry && (
        <Autocomplete
          PaperComponent={(props) => (
            <Paper {...props} className="autocomplete-listbox" />
          )}
          id="province-search"
          options={subCountries?.map((subCountry) => ({
            label: subCountry.text,
            id: subCountry.value,
          }))}
          value={selectedSubCountry}
          onChange={handlesubCountryChange}
          renderInput={(params) => (
            <TextField
              className="locationSearch-input"
              type="search"
              sx={{ "& ::placeholder": { fontFamily: "IranYekan" } }}
              {...params}
              placeholder="حالا استانتو سرچ کن"
            />
          )}
          disabled={!selectedCountry}
        />
      )}
      {selectedCountry && selectedSubCountry && (
        <Autocomplete
          PaperComponent={(props) => (
            <Paper {...props} className="autocomplete-listbox" />
          )}
          id="city-search"
          options={cities?.map((city) => ({ label: city.text, id: city.value }))}
          value={selectedCity}
          onChange={(event, newCity) => setSelectedCity(newCity)}
          renderInput={(params) => (
            <TextField
              className="locationSearch-input"
              type="search"
              sx={{ "& ::placeholder": { fontFamily: "IranYekan" } }}
              {...params}
              placeholder="اینجاهم باید شهرتو انتخاب کنی"
            />
          )}
          disabled={!selectedSubCountry}
        />
      )}
    </Box>
  );
}
