import React from "react";
import { Box, Grid2, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
  return (
    <Box >
      <Grid2
        container
        spacing={4}
        justifyContent="center"
        justifyItems="center"
      >
        <Grid2>
          <Link href="#">
            <LinkedInIcon className="text-customGray" />
          </Link>
        </Grid2>
        <Grid2>
          <Link href="#">
            <TelegramIcon className="text-customGray" />
          </Link>
        </Grid2>
        <Grid2>
          <Link href="#">
            <InstagramIcon className="text-customGray" />
          </Link>
        </Grid2>
      </Grid2>
    </Box>
  );
}
//classname of Icons --> social-icon 