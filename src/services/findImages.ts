import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function findRealClinicImages() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Encontre URLs de imagens públicas e estáveis da 'Clínica Estética Greicy Garcia' em Florianópolis. Prociso de links diretos que funcionem em tags <img>. Procure no Instagram, Facebook ou site oficial. Retorne um JSON com: { 'hero': 'url', 'about': 'url', 'services': ['url1', 'url2', 'url3'] }",
    config: {
      tools: [{ googleSearch: {} }],
      responseMimeType: "application/json"
    },
  });

  return response.text;
}
