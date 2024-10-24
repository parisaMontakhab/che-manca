import React from 'react';
import { useState } from 'react';
import {
    Box,
    TextField,
    IconButton,
    Popper,
    Paper,
  } from "@mui/material";
  import Autocomplete from "@mui/material/Autocomplete";
  import InputAdornment from "@mui/material/InputAdornment";
  import SearchIcon from "@mui/icons-material/Search";
  import { countries, provinces} from "../data/LocationData";

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
    <Box my={8}  >
       <Autocomplete
       id='country-search'
        options={countries.map((country) => country.label)}
        onChange={handleCountryChange}
        renderInput={(params) => (
          <TextField
          sx={{'& ::placeholder':{fontFamily:'IranYekan'}}}
           {...params}  placeholder="اول کشورتو انتخاب کن" />
        )}
      />
    { selectedCountry && <Autocomplete
      id='province-search'
        options={selectedCountry ? countries.find(c => c.label === selectedCountry).provinces : []}
        onChange={handleProvinceChange}
        renderInput={(params) => (
          <TextField
          sx={{'& ::placeholder':{fontFamily:'IranYekan'}}}
           {...params}  placeholder="حالا استانتو سرچ کن" />
        )}
        disabled={!selectedCountry}
      />}
         {selectedCountry && selectedProvince &&  <Autocomplete
        options={selectedProvince ? provinces[selectedProvince] : []}
        onChange={(event, newCity) => setSelectedCity(newCity)}
        renderInput={(params) => (
          <TextField 
          sx={{'& ::placeholder':{fontFamily:'IranYekan'}}}
          {...params}  placeholder="اینجاهم باید شهرتو انتخاب کنی" />
        )}
        disabled={!selectedProvince}
      />}
        </Box>
  )
}


{/* <Autocomplete
          id='city-search'
            PaperComponent={(props) => (
              <Paper {...props} className="autocomplete-listbox" />
            )}
            options={cities.map((city) => city)}
            renderInput={(params) => (
              <TextField
              sx={{'& ::placeholder':{fontFamily:'IranYekan'}}}
                {...params}
                placeholder=" شهر سرچ کن ! "
                type="search"
                fullWidth
                className="search-input"
                slotProps={{
                  input: {
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            )}
          /> */}