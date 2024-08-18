// This is the part that actually shows the flashcards on the screen.
// It takes a list of flashcards and displays each one with its question and answer.

// How it works:
// FlashcardsPage fetches or retrieves the list of flashcards.
// FlashcardsPage then passes this list to FlashcardPage.
// FlashcardPage takes the list of flashcards and displays them to the user.

"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import FlashcardPage from "../flashcard/page";

const FlashcardsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [flashcards, setFlashcards] = useState<
    Array<{ id: number; question: string; answer: string }>
  >([]);

  useEffect(() => {
    const flashcardsParam = searchParams.get("flashcards");
    if (flashcardsParam) {
      try {
        setFlashcards(JSON.parse(flashcardsParam));
      } catch (error) {
        console.error("Failed to parse flashcards:", error);
      }
    }
  }, [searchParams]);

  return <FlashcardPage flashcards={flashcards} />;
};

export default FlashcardsPage;
