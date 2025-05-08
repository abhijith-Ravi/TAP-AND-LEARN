import { NextResponse } from 'next/server';
import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({ token: process.env.COHERE_API_KEY });

export async function POST(req) {
  try {
    const { word, sentence } = await req.json();

    const prompt = `What is the meaning of the word "${word}" in this sentence: "${sentence}"? Provide a short and clear explanation.`;

    const response = await cohere.generate({
      model: 'command',
      prompt: prompt,
      max_tokens: 50,
      temperature: 0.7,
    });

    return NextResponse.json({
      success: true,
      meaning: response.generations[0].text.trim(),
    });
  } catch (error) {
    console.error('Error getting meaning:', error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}