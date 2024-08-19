// flashcards/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Header from "../components/header";

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

const FlashcardsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  useEffect(() => {
    const flashcardsParam = searchParams.get("flashcards");
    if (flashcardsParam) {
      try {
        const decodedFlashcards = JSON.parse(
          decodeURIComponent(flashcardsParam)
        );
        setFlashcards(decodedFlashcards);
      } catch (error) {
        console.error("Error parsing flashcards:", error);
      }
    }
  }, [searchParams]);

  const handleGoBack = () => {
    router.push("/generate");
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
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <IconButton
            onClick={handleGoBack}
            color="primary"
            sx={{
              mb: 3,
              "&:hover": {
                backgroundColor: "primary.main",
                color: "success.main",
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4" color="text.primary" gutterBottom>
            Generated Flashcards
          </Typography>
          <Box>
            {flashcards.length > 0 ? (
              flashcards.map((card, index) => (
                <Card
                  key={index}
                  sx={{
                    mb: 3,
                    bgcolor: "primary.main",
                    color: "text.primary",
                    borderColor:"ivory",
                    borderWidth:"1vw",
                    borderRadius:"25px"
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" color="text.primary">
                      Q: {card.front}
                    </Typography>
                    <Typography variant="body1" color="text.primary" margin="2vw">
                      A: {card.back}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography variant="body1" color="text.primary">
                No flashcards generated.
              </Typography>
            )}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default FlashcardsPage;
