import React from 'react';
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


export default function SearchInput({cities}) {
  return (
    <Box my={8}>
          <Autocomplete
            PopperComponent={(props) => (
              <Popper {...props} className="autocomplete-popper" />
            )}
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
          />
        </Box>
  )
}
