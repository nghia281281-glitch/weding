
import { GoogleGenAI, Type } from "@google/genai";

export async function generateWeddingPoem(groom: string, bride: string, style: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `Viết một bài thơ ngắn 4 câu lãng mạn cho lễ cưới của ${groom} và ${bride}. 
  Phong cách: ${style}. 
  Ngôn ngữ: Tiếng Việt. 
  Định dạng trả về: JSON với trường "poem" (chuỗi có các dấu xuống dòng \n).`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            poem: { type: Type.STRING }
          }
        }
      }
    });

    const data = JSON.parse(response.text || '{}');
    return data.poem || "Tình yêu nở rộ giữa đời thường,\nChúc cho hai bạn trọn niềm thương.\nĐầu bạc răng long tình gắn kết,\nTrăm năm hạnh phúc mãi ngát hương.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Trăm năm tình viên mãn,\nBạc đầu nghĩa phu thê.\nChúc mừng ngày hạnh phúc.";
  }
}
