import { openai } from '../config/openai.js';

export async function marketingAgent(message) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a creative marketing specialist. You excel at content creation, campaign planning, and market analysis."
      },
      {
        role: "user",
        content: message
      }
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}