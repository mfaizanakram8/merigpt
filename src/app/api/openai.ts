import { DEFAULT_OPENAI_MODEL } from "@/shared/Constants"; // Tumhara constants file
import { OpenAIModel } from "@/types/Model"; // Tumhara type definitions
import * as dotenv from "dotenv";
import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi, CreateChatCompletionRequestMessage } from "openai";

// Environment variables ko load karo
dotenv.config();

// OpenAI configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your .env
});

// OpenAI instance banao
const openai = new OpenAIApi(configuration);

// API handler function
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body;
  const messages: CreateChatCompletionRequestMessage[] = body?.messages || [];
  const model: OpenAIModel = body?.model || DEFAULT_OPENAI_MODEL; // Assuming OpenAIModel is a valid type

  try {
    const promptMessage: CreateChatCompletionRequestMessage = {
      role: "system",
      content: "You are ChatGPT. Respond to the user like you normally would.",
    };

    const initialMessages = messages.slice(0, 3);
    const latestMessages = messages.slice(-5).map((message) => ({
      role: message.role,
      content: message.content,
    }));

    const completion = await openai.createChatCompletion({
      model: model.id,
      temperature: 0.5,
      messages: [promptMessage, ...initialMessages, ...latestMessages],
    });

    const responseMessage = completion.data.choices[0].message?.content.trim();

    if (!responseMessage) {
      return res.status(400).json({ error: "Unable to get response from OpenAI. Please try again." });
    }

    return res.status(200).json({ message: responseMessage });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      error: "An error occurred during the request to OpenAI. Please try again.",
    });
  }
}
