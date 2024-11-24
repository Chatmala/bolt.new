import { openai } from '../config/openai.js';

export async function customerServiceAgent(message) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful customer service representative. You are knowledgeable, patient, and always professional."
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