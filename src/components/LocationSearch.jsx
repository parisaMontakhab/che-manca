import React from "react";
import { useState } from "react";
import { Box, TextField,  Paper } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { countries, provinces } from "../data/LocationData";

export default function LocationSearch() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCountryChange = (event, newCountry) => {
    setSelectedCountry(newCountry);
    setSelectedProvince(null);
    setSelectedCity(null);
  };

  const handleProvinceChange = (event, newProvince) => {
    setSelectedProvince(newProvince);
    setSelectedCity(null);
  };

  return (
    <Box my={8}>
      <Autocomplete
        PaperComponent={(props) => (
          <Paper {...props} className="autocomplete-listbox" />
        )}
        id="country-search"
        options={countries.map((country) => country.label)}
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
          options={
            selectedCountry
              ? countries.find((c) => c.label === selectedCountry).provinces
              : []
          }
          onChange={handleProvinceChange}
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
      {selectedCountry && selectedProvince && (
        <Autocomplete
          PaperComponent={(props) => (
            <Paper {...props} className="autocomplete-listbox" />
          )}
          id="city-search"
          options={
            selectedProvince
              ? provinces.find((p) => p.province === selectedProvince).cities
              : []
          }
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
          disabled={!selectedProvince}
        />
      )}
    </Box>
  );
}
