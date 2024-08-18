import { NextResponse } from "next/server";
import GeminiAPIKey from "../../../.env.local";
import Gemini from "@google/generative-ai";

const systemPrompt = `
You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
Both front and back should be one sentence long.
You should return in the following JSON format:
{
  "flashcards":[
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}
  `
;

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function POST(req) {
  const data = await req.text();

  const result = await model.generateContent({
    contents: [
      {
        parts: [{ text: systemPrompt + "\n\n" + data }],
      },
    ],
    generationConfig: {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    },
  });
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return NextResponse.json(text);
}
