import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function extractGooglePhotosUrls(albumUrl: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Por favor, acesse este álbum do Google Photos: ${albumUrl}. Extraia os links diretos das imagens (URLs que terminam em algo como =w... ou que sejam links diretos de imagem). Se não conseguir links diretos, tente encontrar os links das miniaturas que funcionem como imagens. Retorne um JSON com um array de URLs.`,
    config: {
      tools: [{ urlContext: {} }],
      responseMimeType: "application/json"
    },
  });

  try {
    return JSON.parse(response.text || "[]");
  } catch (e) {
    console.error("Erro ao extrair URLs do Google Photos:", e);
    return [];
  }
}
