import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { GenerateRequest, GeneratedContent } from '@/lib/types';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'mock-key',
});

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

    if (!process.env.OPENAI_API_KEY) {
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

    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant that generates JSON." }, { role: "user", content: prompt }],
      model: "gpt-4-turbo-preview", // or gpt-3.5-turbo if preferred
      response_format: { type: "json_object" },
    });

    const content = completion.choices[0].message.content;
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
