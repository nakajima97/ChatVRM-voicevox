import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const configuration = {
  apiKey: process.env.OPEN_AI_API_KEY,
}

const openai = new OpenAI(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const messages = req.body.messages;

  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-4o-mini",
    stream: true
  });

  const reader = completion.toReadableStream().getReader();
  const decoder = new TextDecoder('utf-8');

  // SSTのレスポンスを返す
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.writeHead(200)

  // ChatGPTのレスポンスをクライアントに送信
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    const decodedValue = decoder.decode(value);
    res.write(`data: ${decodedValue}\n\n`);
  }

  res.end();
}