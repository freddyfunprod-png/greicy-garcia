import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getClinicInfo() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Pesquise e resuma informações sobre a 'Clínica Estética Greicy Garcia' em Florianópolis. Inclua principais serviços, o tom de voz da marca (luxo, acolhimento, etc) e possíveis diferenciais. Retorne em formato JSON com as chaves: services (array de strings), tone (string), differentials (array de strings), about (string curta).",
    config: {
      tools: [{ googleSearch: {} }],
      responseMimeType: "application/json"
    },
  });

  try {
    return JSON.parse(response.text || "{}");
  } catch (e) {
    return {
      services: ["Harmonização Facial", "Bioestimuladores", "Limpeza de Pele", "Peelings", "Tratamentos Corporais"],
      tone: "Sofisticado, acolhedor e profissional",
      differentials: ["Atendimento personalizado", "Tecnologia de ponta", "Ambiente de luxo"],
      about: "A Clínica Greicy Garcia é referência em estética avançada em Florianópolis, unindo ciência e arte para realçar a beleza natural de cada cliente."
    };
  }
}
