import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are a senior marketing strategist for a digital agency.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return Response.json({
    result: response.choices[0].message.content,
  });
}