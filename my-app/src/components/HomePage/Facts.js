import * as React from "react";
import Box from "@mui/material/Box";
import SellIcon from "@mui/icons-material/Sell";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

function Facts() {
  return (
    <Box sx={{ mx: 10 }} display="flex" flexDirection="row">
      <CardContent sx={{ mx: 10, textAlign: "center" }}>
        <LocalShippingOutlinedIcon
          sx={{ fontSize: 45, mx: 5 }}
        ></LocalShippingOutlinedIcon>
        <Typography variant="h6" component="div">
          Free Shipping
        </Typography>
      </CardContent>
      <CardContent sx={{ mx: 5 }}>
        <FlightTakeoffOutlinedIcon
          sx={{ fontSize: 45, mx: 8 }}
        ></FlightTakeoffOutlinedIcon>
        <Typography variant="h6" component="div">
          Worldwide Shipping
        </Typography>
      </CardContent>
      <CardContent sx={{ mx: 10 }}>
        <LocalOfferOutlinedIcon
          sx={{ fontSize: 45, mx: 5 }}
        ></LocalOfferOutlinedIcon>
        <Typography variant="h6" component="div">
          Top Brands
        </Typography>
      </CardContent>
      <CardContent sx={{ mx: 10, textAlign: "center" }}>
        <SellIcon sx={{ fontSize: 45, mx: 5 }}></SellIcon>
        <Typography variant="h6" component="div">
          Best Prices
        </Typography>
      </CardContent>
    </Box>
  );
}
export default Facts;
