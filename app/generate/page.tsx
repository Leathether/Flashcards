"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Header from "../components/header";
import {
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

interface Flashcard {
  front: string;
  back: string;
}

const GeneratePage = () => {
  const [topic, setTopic] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleGenerate = async (content: string) => {
    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate flashcards");
      }

      const data = await response.json();


      console.log(data.flashcards)

      // Map the flashcards to the expected structure
      data.flashcards.map((flashcard: Flashcard) => {
        console.log(flashcard.front);
      });



      const formattedFlashcards = data.flashcards.map(
        (card: Flashcard, index: number) => ({
          id: index,
          front: card.front,
          back: card.back,
        })
      );


      console.log(formattedFlashcards);

      // Save to local storage
      localStorage.removeItem("flashcards")
      const existingFlashcards = JSON.parse(
        localStorage.getItem("flashcards") || "[]"
      );
      const updatedFlashcards = [...existingFlashcards, ...formattedFlashcards];
      localStorage.setItem("flashcards", JSON.stringify(updatedFlashcards));

      // Navigate to flashcards page with query param
      router.push(
        `/flashcards?flashcards=${encodeURIComponent(
          JSON.stringify(updatedFlashcards)
        )}`
      );
    } catch (error) {
      console.error("Error generating flashcards:", error);
      alert("An error occurred while generating flashcards. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateByTopic = () => {
    if (!topic.trim()) {
      alert("Please enter a topic to generate flashcards.");
      return;
    }
    handleGenerate(topic);
  };

  const handleGenerateByText = () => {
    if (!inputText.trim()) {
      alert("Please enter some text to generate flashcards.");
      return;
    }
    handleGenerate(inputText);
  };

  const handleGoBack = () => {
    router.push("/");
  };

  const handleViewFlashcards = () => {
    router.push("/flashcards");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header />
        <IconButton
          sx={{
            mt: 2,
            alignSelf: "flex-start",
            ml: 2,
            "&:hover": {
              backgroundColor: "primary.main",
              color: "success.main",
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
                  backgroundColor: "#84A07E",
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
                  backgroundColor: "#84A07E",
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

        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleViewFlashcards}
            size="large"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: 1.5,
              boxShadow: 3,
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "#84A07E",
              },
            }}
          >
            View Flashcards
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default GeneratePage;
