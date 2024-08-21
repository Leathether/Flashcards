"use client"; // Add this at the top

import Image from "next/image";
import { AppBar, Toolbar, Typography, Button, Box, Grid } from "@mui/material";
import Head from "next/head";
import Header from "./components/header"

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "#14171C", // Black background color for the entire page
        color: "#FFFFFF",
        fontFamily: "Georgia, serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Head>
        <title>FlashFlex</title>
        <meta
          name="description"
          content="Elevate your learning experience with FlashFlex, the ultimate tool for mastering new information."
        />
      </Head>

      <Header />

      {/* Content starting after the banner */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 20px",
          backgroundColor: "#14171C", // Maintains black background in content area
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            animation: "fadeIn 2s ease-in-out",
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              color: "#CD2A4D",
              fontFamily: "Georgia, serif",
              marginBottom: "20px",
              marginRight: "10px",
              fontSize: "4.35rem",
            }}
          >
            FlashFlex
          </Typography>
          <Image
            src="/images/flashflex_pic.png"
            alt="FlashFlex Emblem"
            width={160} // Increased width for the middle image
            height={160} // Increased height for the middle image
            style={{ filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))" }}
          />
        </Box>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "#84A07E",
            fontFamily: "Georgia, serif",
            marginBottom: "40px",
          }}
        >
          AI Flashcards working harder so that you can study smarter
        </Typography>
        <Button
          variant="contained"
          href="/generate" // This will direct the user to the sign-up page
          sx={{
            mt: 2,
            backgroundColor: "#CD2A4D",
            color: "#FFFFFF",
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: "#841B35",
              color: "#000000",
            },
            fontFamily: "Georgia, serif",
          }}
        >
          Get Started
        </Button>
      </Box>

      <Box sx={{ padding: "20px", backgroundColor: "#14171C", width: "100%" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#FFFFFF",
            fontFamily: "Georgia, serif",
            textAlign: "center",
          }}
        >
          Features
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                transition: "transform 0.3s ease",
                backgroundColor: "#1C1C1C",
                borderRadius: "15px",
                padding: "20px",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "#CD2A4D",
                  color: "#000000", // Invert heading text color on hover
                },
                textAlign: "center",
                "&:hover .feature-heading": {
                  color: "#000000", // Invert heading text color on hover
                },
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                className="feature-heading"
                sx={{ color: "#E91E63", fontFamily: "Georgia, serif" }}
              >
                Customizable Flashcards
              </Typography>
              <Typography sx={{ color: "#DDD", fontFamily: "Georgia, serif" }}>
                Create flashcards that suit your study style, with options for
                text, images, and formulas.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                transition: "transform 0.3s ease",
                backgroundColor: "#1C1C1C",
                borderRadius: "15px",
                padding: "20px",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "#CD2A4D",
                  color: "#000000", // Invert heading text color on hover
                },
                textAlign: "center",
                "&:hover .feature-heading": {
                  color: "#000000", // Invert heading text color on hover
                },
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                className="feature-heading"
                sx={{ color: "#E91E63", fontFamily: "Georgia, serif" }}
              >
                AI Assistance
              </Typography>
              <Typography sx={{ color: "#DDD", fontFamily: "Georgia, serif" }}>
                Let AI help you generate effective flashcards, focusing on key
                information.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                transition: "transform 0.3s ease",
                backgroundColor: "#1C1C1C",
                borderRadius: "15px",
                padding: "20px",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "#CD2A4D",
                  color: "#000000", // Invert heading text color on hover
                },
                textAlign: "center",
                "&:hover .feature-heading": {
                  color: "#000000", // Invert heading text color on hover
                },
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                className="feature-heading"
                sx={{ color: "#E91E63", fontFamily: "Georgia, serif" }}
              >
                Multi-Device Syncing
              </Typography>
              <Typography sx={{ color: "#DDD", fontFamily: "Georgia, serif" }}>
                Users can access their flashcards across multiple devices,
                ensuring that they can study on the go, whether on a smartphone,
                tablet, or desktop.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
