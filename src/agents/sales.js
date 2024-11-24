import { openai } from '../config/openai.js';

export async function salesAgent(message) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are an experienced sales representative. You understand customer needs and can effectively communicate product value."
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