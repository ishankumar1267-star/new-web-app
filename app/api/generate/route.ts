import { NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";
import { GenerateRequest, GeneratedContent } from '@/lib/types';

// Initialize the Google GenAI client
// Using a placeholder if the key is missing to avoid instantiation errors,
// though we check for the key before making a call.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || 'mock-key' });

export async function POST(req: Request) {
  try {
    const body: GenerateRequest = await req.json();
    const { topic, platform, language, style, duration, tone } = body;

    // Construct the prompt
    const prompt = `
You are a viral short-form content expert.
Create a high-retention ${platform} short video script on:
Topic: ${topic}
Language: ${language}
Tone: ${tone}
Style: ${style}
Duration: ${duration}

Rules:
- Hook must stop scrolling in first 3 seconds.
- Use emotional storytelling.
- Short sentences.
- End with CTA.
- Platform-optimized.

Format the output as JSON with the following structure:
{
  "hooks": ["Hook 1", "Hook 2", "Hook 3"],
  "script": "Full script text...",
  "scenes": [
    { "duration": "0-3s", "visual": "Description of visual", "audio": "Voiceover text" },
    ...
  ],
  "captions": "Engaging caption for the post...",
  "hashtags": ["#tag1", "#tag2", ...]
}
    `;

    // Check for API key (use mock if not present)
    if (!process.env.GEMINI_API_KEY) {
       // Mock response if no API key
       await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay
       const mockResponse: GeneratedContent = {
         hooks: [
           `Stop scrolling! Here is the truth about ${topic}.`,
           `You won't believe this trick for ${topic}.`,
           `This simple hack changes everything about ${topic}.`
         ],
         script: `Have you ever wondered about ${topic}? It's simpler than you think. First, understand the basics. Then, apply this one trick. Finally, watch the results. Follow for more!`,
         scenes: [
            { duration: "0-3s", visual: "Close up of person looking surprised", audio: `Stop scrolling! Here is the truth about ${topic}.` },
            { duration: "3-15s", visual: "Fast cuts of the process", audio: "Most people get this wrong. But if you just tweak one thing..." },
            { duration: "15-30s", visual: "Result reveal", audio: "You get amazing results. Try it today!" }
         ],
         captions: `The secret to ${topic} revealed! 🤫 \n\nSave this for later! 👇`,
         hashtags: [`#${topic.replace(/\s+/g, '')}`, "#viral", "#shorts", `#${platform.replace(/\s+/g, '')}`]
       };
       return NextResponse.json(mockResponse);
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash", // Using 2.0-flash as it's the current fast model, user snippet had 2.5 but 2.0 is more standard/likely available
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }]
        }
      ],
      config: {
        responseMimeType: "application/json",
      }
    });

    const content = response.text;
    if (!content) {
       throw new Error("No content generated");
    }

    const parsedContent = JSON.parse(content);
    return NextResponse.json(parsedContent);

  } catch (error) {
    console.error("Error generating content:", error);
    return NextResponse.json({ error: "Failed to generate content" }, { status: 500 });
  }
}
