import React from "react";
import { Box, Container, Grid2, Typography } from "@mui/material";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import logo from "../assets/images/logo/logo.png";
import Footer from "../components/Footer";
import LocationSearch from "../components/LocationSearch";
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
            <img src={logo} alt="chemanca-logo" className="homePage-logo" />
          </Box>
          <nav className="homePage__menu">
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
          <Typography className="homePage__description" variant="body1">
            بزرگترین ، ﭘﺎﯾﮕﺎه ﺧﺮﯾﺪ و ﻓﺮوش ﺑﯽ‌واﺳﻄﻪ‌!
          </Typography>
          <Typography className="homePage__description" variant="body1">
            اﮔﻪ دﻧﺒﺎل ﭼﯿﺰی ﻫﺴﺘﯽ، ﺷﻬﺮت رو اﻧﺘﺨﺎب ﮐﻦ و ﺗﻮ دﺳﺘﻪ‌ﺑﻨﺪی‌ﻫﺎ ﺑﻪ دﻧﺒﺎﻟﺶ
            ﺑﮕﺮد. اﮔﺮ ﻫﻢ ﻣﯽ‌ﺧﻮای ﭼﯿﺰی ﺑﻔﺮوﺷﯽ، ﭼﻨﺪ ﺗﺎ ﻋﮑﺲ ﺧﻮب ازش ﺑﮕﯿﺮ و آﮔﻬﯿﺖ رو
            ﺑﭽﺴﺒﻮن ﺑﻪ ما.
          </Typography>
        </Box>
        <LocationSearch />
        <Box className="homePage__cityBox">
          <Typography variant="h6" className="homePage__description" my={4}>
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
                <Typography className="homePage__cityItem"><NavLink to='/Ads' color="inherit"  sx={{cursor:'pointer'}} underline="none">{city}</NavLink></Typography>
              </Grid2>
            ))}
          </Grid2>
        </Box>
        <footer style={{ marginTop: "100px" }}>
          <Footer />
        </footer>
      </Container>
    </>
  );
}
