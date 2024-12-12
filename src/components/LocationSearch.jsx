import React from "react";
import { useState } from "react";
import { Box, TextField, Paper, Skeleton } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useCountries } from "../api/LocationApi";
import { useSubCountries } from "../api/LocationApi";
import { useCities } from "../api/LocationApi";

import ErrorBtn from "../commons/ErrorBtn";
import LoadingText from "../commons/LoadingText";

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

  return (
    <Box my={8}>
      {" "}
      {isCountriesLoading ? (
        <LoadingText />
      ) : countriesError ? (
        <ErrorBtn />
      ) : (
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
      )}
      {selectedCountry &&
        (isSubCountriesLoading ? (
          <LoadingText />
        ) : subCountriesError ? (
          <ErrorBtn />
        ) : (
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
        ))}
      {selectedCountry &&
        selectedSubCountry &&
        (isCitiesLoading ? (
          <LoadingText />
        ) : citiesError ? (
          <ErrorBtn />
        ) : (
          <Autocomplete
            PaperComponent={(props) => (
              <Paper {...props} className="autocomplete-listbox" />
            )}
            id="city-search"
            options={cities?.map((city) => ({
              label: city.text,
              id: city.value,
            }))}
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
        ))}
    </Box>
  );
}
