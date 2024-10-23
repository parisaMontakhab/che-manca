import React from "react";
import {
  Box,
  Container,
  Grid2,
  Typography,
  TextField,
  IconButton,
  Popper,
  Paper,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "./Logo";
import Footer from "./Footer";
const cities = [
  "تهران",
  "مشهد",
  "کرج",
  "شیراز",
  "اصفهان",
  "اهواز",
  "تبریز",
  "کرمانشاه",
  "قم",
  "رشت",
];

export default function HomePage() {
  return (
    <>
      <Container maxWidth="sm">
        <header className="home-header">
          <Logo />
          <nav className="home-nav">
            <Grid2 container spacing={6}>
              <Grid2>
                <a href="#">ثبت آگهی</a>
              </Grid2>
              <Grid2>
                <a href="#">درباره ما</a>
              </Grid2>
              <Grid2>
                <a href="#">دریافت برنامه</a>
              </Grid2>
              <Grid2>
                <a href="#">اتاق خبر</a>{" "}
              </Grid2>
              <Grid2>
                <a href="#">پشتیبانی</a>
              </Grid2>
            </Grid2>
          </nav>
        </header>
        <Box textAlign="center" my={4}>
          <Typography className="home-desc" variant="body1" gutterBottom>
            بزرگترین ، ﭘﺎﯾﮕﺎه ﺧﺮﯾﺪ و ﻓﺮوش ﺑﯽ‌واﺳﻄﻪ‌!
          </Typography>
          <Typography className="home-desc" variant="body1" gutterBottom>
            اﮔﻪ دﻧﺒﺎل ﭼﯿﺰی ﻫﺴﺘﯽ، ﺷﻬﺮت رو اﻧﺘﺨﺎب ﮐﻦ و ﺗﻮ دﺳﺘﻪ‌ﺑﻨﺪی‌ﻫﺎ ﺑﻪ دﻧﺒﺎﻟﺶ
            ﺑﮕﺮد. اﮔﺮ ﻫﻢ ﻣﯽ‌ﺧﻮای ﭼﯿﺰی ﺑﻔﺮوﺷﯽ، ﭼﻨﺪ ﺗﺎ ﻋﮑﺲ ﺧﻮب ازش ﺑﮕﯿﺮ و آﮔﻬﯿﺖ رو
            ﺑﭽﺴﺒﻮن ﺑﻪ ما.
          </Typography>
        </Box>
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
        <Box my={4} className="home-cityBox">
          <Typography variant="h6" className="home-desc" my={4}>
            شهرهای پربازدید
          </Typography>
          <Grid2
            container
            justifyContent="center"
            justifyItems="center"
            spacing={10}
          >
            {cities.map((city) => (
              <Grid2 key={city}>
                <Typography className="home-cityItem">{city}</Typography>
              </Grid2>
            ))}
          </Grid2>
        </Box>
        <footer>
          <Footer />
        </footer>
      </Container>
    </>
  );
}
