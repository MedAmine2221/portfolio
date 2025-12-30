import { STATIC_KNOWLEDGE } from "@/constants";
import { GoogleGenAI } from "@google/genai";
import Link from "next/link";

export const renderMessageText = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);  
  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <Link
          href={part}
          key={index}
          style={{ color: 'blue', textDecorationLine: 'underline' }}
        >
          {part}
        </Link>
      );
    } else {
      return (
        <p
          className="text-base"
          key={index}
        >
          {part}
        </p>
      );
    }
  });
};


const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_AI_API,
  apiVersion: 'v1alpha'
});
export async function gemini(prompt: string) {  
  let attempts = 0;
  const maxAttempts = 3;

  const fullPrompt = `
  ### CONTEXTE FIXE ###

  Développeur: ${JSON.stringify(STATIC_KNOWLEDGE.developer)}

  ### QUESTION UTILISATEUR ###
  ${prompt}

  ### CONSIGNE ###
  Tu dois toujours utiliser les informations du CONTEXTE FIXE pour répondre si l'utilisateur pose une question sur le développeur, utiliser strictement ce qui est fourni ci-dessus.
  Si la question concerne le développeur, réponds avec les informations principales et indique que le CV est disponible pour téléchargement à : ${JSON.stringify(STATIC_KNOWLEDGE.developer.cv_file)}.
  si non vous pouvez utiliser vos propre connaissance
  `;

  while (attempts < maxAttempts) {  
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: fullPrompt,
      });
      
      const text = response.text;
      try {
        return JSON.parse(text as string);
      } catch {
        return text;
      }
    } catch (error: any) {
      attempts++;      
      if (error.message?.includes("503") && attempts < maxAttempts) {
        await new Promise(res => setTimeout(res, 2000));
        continue;
      }
      return null;
    }
  }
}