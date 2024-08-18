// This part gets the flashcards from the URL (like when you have something in the search bar) and then sends 
// them to FlashcardPage to be displayed. It handles fetching and preparing the flashcards before showing them.

// How it works:
// FlashcardsPage fetches or retrieves the list of flashcards.
// FlashcardsPage then passes this list to FlashcardPage.
// FlashcardPage takes the list of flashcards and displays them to the user.

"use client";

import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

interface FlashcardProps {
  flashcards: Array<{ id: number; question: string; answer: string }>;
}

const FlashcardPage: React.FC<FlashcardProps> = ({ flashcards = [] }) => {
  return (
    <Container
      sx={{
        backgroundColor: "#14171C",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ color: "#84A07E" }}
      >
        Flashcards
      </Typography>
      {flashcards.map((flashcard) => (
        <Card
          key={flashcard.id}
          sx={{
            backgroundColor: "#CD2A4D",
            marginBottom: "1rem",
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ color: "#14171C" }}>
              Q: {flashcard.question}
            </Typography>
            <Typography variant="body1" sx={{ color: "#14171C" }}>
              A: {flashcard.answer}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};


export default FlashcardPage;
