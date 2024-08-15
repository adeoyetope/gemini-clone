// search for gemini api in google, select build api,
// genrate api key , click on api code, click on doc, select javascript, copy the code

const Api_key = import.meta.env.VITE_APP_API_KEY;

import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)

const genAI = new GoogleGenerativeAI(Api_key);

async function run(prompt) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  //   const prompt = "Write a story about a magic backpack.";

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  // console.log(text);
  return text;
}

export default run;
