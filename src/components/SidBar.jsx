import React from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import SportsTennisOutlinedIcon from "@mui/icons-material/SportsTennisOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ChairAltOutlinedIcon from "@mui/icons-material/ChairAltOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

export default function SidBar() {
  return (
    <Container maxWidth="xl">
      <aside>
        <Box component='div' className="ads-sideBar">
          <Typography sx={{ fontFamily: "IranYekan" }}>دسته ها</Typography>
          <List >
            <ListItem>
              <ListItemButton sx={{ display: "flex", alignItems: "center" }}>
                <ListItemIcon sx={{ minWidth: 0, ml: 1 }}>
                  <HomeWorkOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="املاک"
                  disableTypography
                  sx={{
                    fontFamily: "IranYekan",
                    display: "inline",
                    textAlign: "right",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </aside>
    </Container>
  );
}
