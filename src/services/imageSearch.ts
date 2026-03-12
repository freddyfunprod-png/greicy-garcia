import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function findClinicImages() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Encontre links de imagens públicas e estáveis (como do Instagram, Facebook ou site oficial) para a 'Clínica Estética Greicy Garcia' em Florianópolis. Preciso de uma imagem para o Hero, uma para a seção Sobre e três para os serviços (Harmonização, Bioestimuladores, Corporal).",
    config: {
      tools: [{ googleSearch: {} }]
    },
  });

  return response.text;
}
