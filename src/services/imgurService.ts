import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getImgurImages(albumUrl: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Extraia os links diretos das imagens e vídeos deste álbum do Imgur: ${albumUrl}. Retorne apenas um JSON com um array de strings contendo as URLs diretas (ex: https://i.imgur.com/abc.jpg).`,
    config: {
      tools: [{ urlContext: {} }],
      responseMimeType: "application/json"
    },
  });

  try {
    return JSON.parse(response.text || "[]");
  } catch (e) {
    console.error("Erro ao extrair imagens:", e);
    return [];
  }
}
