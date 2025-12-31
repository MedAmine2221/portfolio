import { GoogleGenAI } from "@google/genai";
import Link from "next/link";

import { STATIC_KNOWLEDGE } from "@/constants";

export const renderMessageText = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text?.split(urlRegex);

  return parts?.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <Link
          key={index}
          href={part}
          style={{ color: "blue", textDecorationLine: "underline" }}
        >
          {part}
        </Link>
      );
    } else {
      return (
        <p key={index} className="text-base">
          {part}
        </p>
      );
    }
  });
};

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_AI_API,
  apiVersion: "v1alpha",
});

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function gemini(prompt: string) {
  let attempts = 0;
  const maxAttempts = 3;
  const baseDelay = 2000;
  const maxDelay = 10000;

  const fullPrompt = `
  ### CONTEXTE FIXE ###
  Développeur: ${JSON.stringify(STATIC_KNOWLEDGE.developer)}

  ### QUESTION UTILISATEUR ###
  ${prompt}

  ### CONSIGNE ###
  1. Tu es l'assistant personnel de Mohamed Amine LAZREG
  2. Si la question concerne le développeur:
     - Utilise strictement les informations du CONTEXTE FIXE
     - Réponds de manière naturelle comme si c'était le développeur qui parlait
     - Mentionne que le CV est disponible à: ${JSON.stringify(STATIC_KNOWLEDGE.developer.cv_file)}
  3. Si la question n'est pas liée au développeur, tu peux utiliser tes connaissances générales
  4. Format de réponse: Texte naturel en français, pas de JSON

  ### EXEMPLES ###
  Q: "Qui es-tu ?"
  R: "Je suis Mohamed Amine LAZREG, Ingénieur informatique et Enseignant vacataire. Mon CV est disponible ici: https://drive.google.com/..."

  Q: "ahla"
  R: "Bonjour ! Comment puis-je vous aider aujourd'hui ?"
  `;

  while (attempts < maxAttempts) {
    try {
      if (attempts > 0) {
        const backoffDelay = Math.min(
          baseDelay * Math.pow(2, attempts - 1),
          maxDelay,
        );

        await delay(backoffDelay);
      }

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: fullPrompt,
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.7,
          topP: 0.8,
        },
      } as any);
      const text = response.text;
      const cleanedText = text?.trim();

      return cleanedText;
    } catch (error: any) {
      attempts++;
      const shouldRetry =
        error.message?.includes("429") ||
        error.message?.includes("503") ||
        error.message?.includes("500") ||
        error.message?.includes("rate_limit");

      if (shouldRetry && attempts < maxAttempts) {
        continue;
      }

      return "Je suis désolé, je rencontre actuellement des difficultés techniques. Veuillez réessayer dans quelques instants.";
    }
  }

  return "Je ne peux pas répondre pour le moment. Veuillez réessayer plus tard.";
}

let lastCallTime = 0;
const MIN_CALL_INTERVAL = 3000;

export async function throttledGemini(prompt: string) {
  const now = Date.now();
  const timeSinceLastCall = now - lastCallTime;

  if (timeSinceLastCall < MIN_CALL_INTERVAL) {
    await delay(MIN_CALL_INTERVAL - timeSinceLastCall);
  }

  lastCallTime = Date.now();

  return gemini(prompt);
}
