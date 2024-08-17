import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FlashcardPage from "../flashcard/page";

const FlashcardsPage: React.FC = () => {
  const router = useRouter();
  const [flashcards, setFlashcards] = useState<
    Array<{ id: number; question: string; answer: string }>
  >([]);

  useEffect(() => {
    if (router.query.flashcards) {
      try {
        setFlashcards(JSON.parse(router.query.flashcards as string));
      } catch (error) {
        console.error("Failed to parse flashcards:", error);
      }
    }
  }, [router.query.flashcards]);

  return <FlashcardPage flashcards={flashcards} />;
};

export default FlashcardsPage;
