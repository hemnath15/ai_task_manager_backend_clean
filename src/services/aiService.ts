import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateTaskInsights = async (tasks: any[]) => {
  if (!tasks || tasks.length === 0) {
    return "You don’t have any tasks yet. Create tasks to get AI insights 🚀";
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `
Analyze these tasks and give short productivity insights:
${JSON.stringify(tasks)}
          `,
        },
      ],
    });

    return response.choices[0].message.content;
  } catch (error: any) {
    // IMPORTANT FALLBACK
   if (error.status === 429) {
  const pending = tasks.filter(t => t.status === "pending" && t.priority === "high").length;
  // const high = tasks.filter(t => t.priority === "high").length;

  return `This is not a AI insights!,You have ${pending} high-priority tasks. Focus on completing them first.`;
}

    return "AI insights are temporarily unavailable.";
  }
};

