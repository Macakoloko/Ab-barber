import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini
// Note: In a real production build, ensure API_KEY is defined.
const ai = new GoogleGenAI({ apiKey });

export const getStyleAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "Erro de configuração: Chave de API não encontrada.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Você é um barbeiro experiente da 'AB Barber', uma barbearia estilo underground e moderna em Caminha, Portugal. 
      Seu público são jovens de 16 a 35 anos. 
      Responda de forma curta, direta, com gíria leve (tuga/portuguesa) e estilo 'cool'. 
      Dê conselhos sobre cortes de cabelo e barba baseados na pergunta do usuário.
      
      Pergunta do usuário: ${userQuery}`,
      config: {
        maxOutputTokens: 200,
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, mano. Tive um bloqueio criativo. Tenta outra vez.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "O sistema está fora de ar temporariamente. Aparece na barbearia que resolvemos isso.";
  }
};