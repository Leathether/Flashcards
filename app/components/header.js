"use client";

import Image from "next/image";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#84A07E", // Olive green background color for the banner
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#CD2A4D", // Match the banner background color
          boxShadow: "none",
          width: "100vw",
          maxWidth: "100%",
          left: 0,
          right: 0,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", padding: "0 20px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h5"
              sx={{
                color: "#FFFFFF",
                fontFamily: "Georgia, serif",
                marginRight: "10px",
                "&:hover": { color: "#000000" },
              }}
            >
              FlashFlex
            </Typography>
            <Image
              src="/images/flashflex_pic.png"
              alt="FlashFlex Emblem"
              width={100} // Slightly increased width for the top-left image
              height={100} // Slightly increased height for the top-left image
              style={{ filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))" }}
            />
          </Box>
          <Box>
            <Button
              color="inherit"
              href="/sign-in"
              sx={{
                color: "#FFFFFF", // White text
                fontWeight: "bold", // Bold text
                "&:hover": {
                  backgroundColor: "#84A07E",
                  color: "#000000",
                },
                fontFamily: "Georgia, serif",
              }}
            >
              Log In
            </Button>
            <Button
              color="inherit"
              href="/sign-up"
              sx={{
                color: "#FFFFFF", // White text
                fontWeight: "bold", // Bold text
                "&:hover": {
                  backgroundColor: "#84A07E",
                  color: "#000000",
                },
                fontFamily: "Georgia, serif",
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
