"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  TextField,
  CircularProgress,
  ThemeProvider,
  createTheme,
  Box,
  Typography,
  Container,
} from "@mui/material";

// Custom theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: "#14171C", // Black
    },
    secondary: {
      main: "#CD2A4D", // Pink/Red
    },
    success: {
      main: "#84A07E", // Olive Green
    },
    text: {
      primary: "#F0F2F4", // White
    },
    background: {
      default: "#14171C", // Black background
      paper: "#1C1F24", // Slightly lighter black for paper components
    },
  },
});

const GeneratePage = () => {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGenerateFlashcards = async () => {
    setLoading(true);
    // Placeholder for flashcard generation logic
    router.push("/flashcards");
  };

  const handleGoBack = () => {
    router.push("/"); // Navigate to the homepage
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "primary.main", // Black background
          color: "text.primary", // White text
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Flashcard Generator
            </Typography>
          </Toolbar>
        </AppBar>
        <IconButton
          sx={{
            mt: 2,
            alignSelf: "flex-start",
            ml: 2,
            "&:hover": {
              backgroundColor: "primary", // Change to secondary
              color: "success", // Consider changing this to white for better contrast
            },
          }}
          onClick={handleGoBack}
          color="secondary"
        >
          <ArrowBackIcon />
        </IconButton>
        <Container maxWidth="sm">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 4,
              p: 4,
              borderRadius: 2,
              boxShadow: 4,
              bgcolor: "background.paper",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom color="text">
              Generate Flashcards
            </Typography>
            <TextField
              label="Enter a Topic"
              variant="outlined"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              fullWidth
              margin="normal"
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#CD2A4D", 
                  },
                  "&:hover fieldset": {
                    borderColor: "#84A07E", 
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#84A07E", 
                  },
                },
                input: {
                  color: "#84A07E", 
                },
                "& .MuiInputLabel-root": {
                  color: "#CD2A4D",
                  "&:hover": {
                    color: "#F0F2F4", 
                  },
                  "&.Mui-focused": {
                    color: "#84A07E", 
                  },
                },
              }}
            />

            <Button
              variant="contained"
              color="secondary"
              onClick={handleGenerateFlashcards}
              disabled={loading}
              size="large"
              sx={{
                minWidth: 200,
                height: 48,
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: 1.5,
                boxShadow: 3,
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#84A07E", // Olive Green on hover
                },
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Generate"
              )}
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default GeneratePage;
