"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import FlashcardPage from "../components/FlashcardPage";

const FlashcardsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [flashcards, setFlashcards] = useState<
    Array<{ id: number; question: string; answer: string }>
  >([]);

  useEffect(() => {
    const flashcardsParam = searchParams.get("flashcards");
    if (flashcardsParam) {
      try {
        const decodedFlashcards = JSON.parse(
          decodeURIComponent(flashcardsParam)
        );
        setFlashcards(decodedFlashcards);
      } catch (error) {
        console.error("Failed to parse flashcards:", error);
      }
    }
  }, [searchParams]);

  return <FlashcardPage flashcards={flashcards} />;
};

export default FlashcardsPage;
