


import { GoogleGenerativeAI } from '@google/generative-ai';
import { StreamingTextResponse } from 'ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// export const runtime = 'edge';

export async function POST(req: Request): Promise<Response> {
  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === '') {
    return new Response(
      'Missing GEMINI_API_KEY – make sure to add it to your .env file.',
      {
        status: 400,
      }
    );
  }

  let { prompt } = await req.json();

  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const result = await model.generateContentStream({
    contents: [
      {
        role: 'user',
        parts: [
          {
            text: 'You are an AI writing assistant that continues existing text based on context from prior text. ' +
              'Give more weight/priority to the later characters than the beginning ones. ' +
              'Limit your response to no more than 1000 characters, but make sure to construct complete sentences.\n\n' +
              prompt
          }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.7,
      topP: 1,
      topK: 1,
      maxOutputTokens: 1000,
    },
  });

  const stream = new ReadableStream({
    async start(controller) {
      for await (const chunk of result.stream) {
        const text = chunk.text();
        controller.enqueue(text);
      }
      controller.close();
    },
  });

  return new StreamingTextResponse(stream);
}