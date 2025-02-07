import React from "react";
import { Box, Container, Grid2, Typography } from "@mui/material";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import logo from "../assets/images/logo/logo.png";
import Footer from "../components/pages/share/Footer";
import LocationSearch from "../components/pages/share/LocationSearch";
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
        <header>
          <Box display="flex" justifyContent="center" alignItems="center" p={2}>
            <img src={logo} alt="chemanca-logo" className="max-w-[70%] block h-auto" />
          </Box>
          <nav className="grid justify-center justify-items-center border-b border-customGray pt-8 pb-4 text-customGray">
            <Grid2 container spacing={6}>
              <Grid2>
                <NavLink href="#" color="inherit" underline="none">
                  ثبت آگهی
                </NavLink>
              </Grid2>
              <Grid2>
                <NavLink href="#" color="inherit" underline="none">
                  درباره ما
                </NavLink>
              </Grid2>
              <Grid2>
                <NavLink href="#" color="inherit" underline="none">
                  دریافت برنامه
                </NavLink>
              </Grid2>
              <Grid2>
                <NavLink href="#" color="inherit" underline="none">
                  اتاق خبر
                </NavLink>{" "}
              </Grid2>
              <Grid2>
                <NavLink href="#" color="inherit" underline="none">
                  پشتیبانی
                </NavLink>
              </Grid2>
            </Grid2>
          </nav>
        </header>
        <Box textAlign="center" my={2}>
          <Typography className="text-customGray font-iranYekan leading-8" variant="body1">
            بزرگترین ، ﭘﺎﯾﮕﺎه ﺧﺮﯾﺪ و ﻓﺮوش ﺑﯽ‌واﺳﻄﻪ‌!
          </Typography>
          <Typography className="text-customGray font-iranYekan leading-8" variant="body1">
            اﮔﻪ دﻧﺒﺎل ﭼﯿﺰی ﻫﺴﺘﯽ، ﺷﻬﺮت رو اﻧﺘﺨﺎب ﮐﻦ و ﺗﻮ دﺳﺘﻪ‌ﺑﻨﺪی‌ﻫﺎ ﺑﻪ دﻧﺒﺎﻟﺶ
            ﺑﮕﺮد. اﮔﺮ ﻫﻢ ﻣﯽ‌ﺧﻮای ﭼﯿﺰی ﺑﻔﺮوﺷﯽ، ﭼﻨﺪ ﺗﺎ ﻋﮑﺲ ﺧﻮب ازش ﺑﮕﯿﺮ و آﮔﻬﯿﺖ رو
            ﺑﭽﺴﺒﻮن ﺑﻪ ما.
          </Typography>
        </Box>
        <LocationSearch />
        <Box className="border-b border-customGray pb-4">
          <Typography variant="h6" className="text-customGray font-iranYekan leading-8" my={4}>
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
                <Typography className="text-customGray font-iranYekan">
                  <NavLink
                    to="/Ads"
                    color="inherit"
                    className="cursor-pointer"
                    underline="none"
                  >
                    {city}
                  </NavLink>
                </Typography>
              </Grid2>
            ))}
          </Grid2>
        </Box>
        <footer className="mt-[100px]">
          <Footer />
        </footer>
       
      </Container>
    </>
  );
}
