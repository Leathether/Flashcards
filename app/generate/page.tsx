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
  const [topic, setTopic] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [flashcards, setFlashcards] = useState<any[]>([]);
  const router = useRouter();

  const handleGenerateByTopic = async () => {
    if (!topic.trim()) {
      alert("Please enter a topic to generate flashcards.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        body: topic,
      });

      if (!response.ok) {
        throw new Error("Failed to generate flashcards");
      }

      const data = await response.json();
      setFlashcards(data.flashcards);
    } catch (error) {
      console.error("Error generating flashcards:", error);
      alert("An error occurred while generating flashcards. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateByText = async () => {
    if (!inputText.trim()) {
      alert("Please enter some text to generate flashcards.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        body: inputText,
      });

      if (!response.ok) {
        throw new Error("Failed to generate flashcards");
      }

      const data = await response.json();
      setFlashcards(data.flashcards);
    } catch (error) {
      console.error("Error generating flashcards:", error);
      alert("An error occurred while generating flashcards. Please try again.");
    } finally {
      setLoading(false);
    }
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
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              color="text.primary"
            >
              Generate Flashcards by Topic
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
              onClick={handleGenerateByTopic}
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

        <Typography sx={{ mt: 4 }}>
          <br />
          OR
        </Typography>

        {/* Second box for inputting text */}
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
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              color="text.primary"
            >
              Input Your Own Text
            </Typography>
            <TextField
              label="Enter Your Text"
              variant="outlined"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              fullWidth
              multiline
              rows={6}
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
              onClick={handleGenerateByText}
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

        {/* Display flashcards */}
        {flashcards.length > 0 && (
          <Container maxWidth="sm">
            <Box
              sx={{
                mt: 4,
                p: 4,
                borderRadius: 2,
                boxShadow: 4,
                bgcolor: "background.paper",
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                color="text.primary"
              >
                Generated Flashcards
              </Typography>
              {flashcards.map((flashcard, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography color="text.primary">
                    <strong>Front:</strong> {flashcard.front}
                  </Typography>
                  <Typography color="text.primary">
                    <strong>Back:</strong> {flashcard.back}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default GeneratePage;
