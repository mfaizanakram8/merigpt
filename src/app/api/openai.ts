import { DEFAULT_OPENAI_MODEL } from "@/shared/Constants";
import { OpenAIModel } from "@/types/Model";
import * as dotenv from "dotenv";
import { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

// Load environment variables
dotenv.config();

// Create OpenAI instance
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body;
  const messages = (body?.messages || []) as Array<{ role: "user" | "assistant" | "function"; content: string; name: string }>; // Specify role types
  const model = (body?.model || DEFAULT_OPENAI_MODEL) as OpenAIModel;

  try {
    const promptMessage = {
      role: "system" as const, // Use 'as const' to ensure type safety
      content: "You are ChatGPT. Respond to the user like you normally would.",
      name: "system", // Provide a valid name
    };

    const initialMessages = messages.splice(0, 3);
    const latestMessages = messages
      .slice(-5)
      .map((message) => ({
        role: message.role, 
        content: message.content,
        name: message.name, 
      }));

    const completion = await openai.chat.completions.create({
      model: model.id,
      temperature: 0.5,
      messages: [promptMessage, ...initialMessages, ...latestMessages],
    });

    const responseMessage = completion.choices?.[0]?.message?.content?.trim();

    if (!responseMessage) {
      return res.status(400).json({ error: "Unable to get response from OpenAI. Please try again." });
    }

    res.status(200).json({ message: responseMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred during the ping to OpenAI. Please try again.",
    });
  }
}
