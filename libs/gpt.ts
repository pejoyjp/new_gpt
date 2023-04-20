import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey:process.env.GPT_API_KEY
});
const openai = new OpenAIApi(configuration);

const askQuestion = async (question:string):Promise<string> => {
    const completion:any = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: question}],
    });
    return completion.data.choices[0].message.content
}

export default askQuestion