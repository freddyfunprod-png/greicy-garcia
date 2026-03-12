import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getClinicMaps() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Localize a 'Clínica Estética Greicy Garcia' em Florianópolis. Preciso do link do Google Maps e das coordenadas para um mapa incorporado.",
    config: {
      tools: [{ googleMaps: {} }],
    },
  });

  return {
    text: response.text,
    grounding: response.candidates?.[0]?.groundingMetadata?.groundingChunks
  };
}
