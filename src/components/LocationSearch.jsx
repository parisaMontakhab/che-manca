import React from "react";
import { useState } from "react";
import { Box, TextField, Paper, Skeleton } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useCountries } from "../api/LocationApi";
import { useSubCountries } from "../api/LocationApi";
import { useCities } from "../api/LocationApi";

import ErrorBtn from "../commons/ErrorBtn";
import LoadingText from "../commons/LoadingText";

export default function LocationSearch({ title, setValueFromChild }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedSubCountry, setselectedSubCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [countryInputValue, setCountryInputValue] = useState("");
  const [subCountryInputValue, setSubCountryInputValue] = useState("");
  const [cityInputValue, setCityInputValue] = useState("");
 
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
    setSubCountryInputValue("");
    setCityInputValue("");
  };

  const handlesubCountryChange = (event, newSubCountry) => {
    setselectedSubCountry(newSubCountry);
    setSelectedCity(null);
    setCityInputValue("");
  };

  const handleCityChange = (event, newCity) => {
    setSelectedCity(newCity);
    if (setValueFromChild !== undefined) {
      setValueFromChild(newCity);
    }
  };

  return (
    <Box my={title ? "" : 8} className={title ? "ads-sideBar__box" : ""}>
      {" "}
      {isCountriesLoading ? (
        <LoadingText />
      ) : countriesError ? (
        <ErrorBtn />
      ) : (
        <Autocomplete
          size={title ? "small" : ""}
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
          inputValue={countryInputValue}
          onInputChange={(event, newInputValue) =>
            setCountryInputValue(newInputValue)
          }
          renderInput={(params) => (
            <TextField
              className={
                title ? "locationSearch-input--size" : "locationSearch-input"
              }
              type="search"
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
            size={title ? "small" : ""}
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
            inputValue={subCountryInputValue}
            onInputChange={(event, newInputValue) =>
              setSubCountryInputValue(newInputValue)
            }
            renderInput={(params) => (
              <TextField
                className={
                  title ? "locationSearch-input--size" : "locationSearch-input"
                }
                type="search"
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
            size={title ? "small" : ""}
            PaperComponent={(props) => (
              <Paper {...props} className="autocomplete-listbox" />
            )}
            id="city-search"
            options={cities?.map((city) => ({
              label: city.text,
              id: city.value,
            }))}
            value={selectedCity}
            onChange={handleCityChange}
            inputValue={cityInputValue}
            onInputChange={(event, newInputValue) =>
              setCityInputValue(newInputValue)
            }
            renderInput={(params) => (
              <TextField
                className={
                  title ? "locationSearch-input--size" : "locationSearch-input"
                }
                type="search"
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
