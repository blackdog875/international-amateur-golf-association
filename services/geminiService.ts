
import { GoogleGenAI, Type } from "@google/genai";

// Initialize the Google GenAI client using the required named parameter and environment variable.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getReasonsToJoin = async (ageGroup: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate 5 compelling, personalized reasons why an amateur golfer in the ${ageGroup} age group should join the International Amateur Golf Association (iAGA). Focus on local tournaments, senior discounts, community, and travel perks.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            reasons: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING }
                },
                required: ["title", "description"]
              }
            }
          },
          required: ["reasons"]
        }
      }
    });

    return JSON.parse(response.text || '{"reasons":[]}');
  } catch (error) {
    console.error("Error generating reasons:", error);
    return {
      reasons: [
        { title: "Local Tournaments", description: "Compete in the #1 local age-group tournaments in your area." },
        { title: "Senior Discounts", description: "Get the iAGA Card for just $49 starting at age 49." },
        { title: "Travel Perks", description: "10% off green fees worldwide plus travel, hotel, and rental discounts." },
        { title: "Charitable Impact", description: "$20 of your membership is a charitable contribution with a year-end tax reminder." },
        { title: "Risk-Free Guarantee", description: "100% refundable if you don't save at least the membership cost within 12 months." }
      ]
    };
  }
};
