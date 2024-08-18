import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  ThemeProvider,
  createTheme,
} from "@mui/material";

interface FlashcardProps {
  flashcards: Array<{ id: number; question: string; answer: string }>;
}

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

const FlashcardPage: React.FC<FlashcardProps> = ({ flashcards = [] }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          backgroundColor: "background.default",
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: "success.main" }}
        >
          Flashcards
        </Typography>
        {flashcards.map((flashcard) => (
          <Card
            key={flashcard.id}
            sx={{
              backgroundColor: "secondary.main",
              marginBottom: "1rem",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ color: "background.default" }}>
                Q: {flashcard.question}
              </Typography>
              <Typography variant="body1" sx={{ color: "background.default" }}>
                A: {flashcard.answer}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </ThemeProvider>
  );
};

export default FlashcardPage;
