import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'
import { LocationState } from '../../components/atoms/atoms';
import { useRecoilState } from 'recoil';
import { getLocations } from '../../firebase';

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const CompletionComponent = () => {
  const [locations_, setLocations_] = useRecoilState(LocationState);
  return { locations_, setLocations_ };
};

const y_ = async () => {
  const x_ = await getLocations();
  // @ts-ignore
  return x_
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prompt = req.query.prompt;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt missing" });
  }

  if (prompt.length > 100) {
    return res.status(400).json({ error: "Prompt too long" });
  }
  const newData = await y_()

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `does this data have information abouth south africa? ${JSON.stringify(newData[0])}.`,
    max_tokens: 2048,
    temperature: 0.5,
    presence_penalty: 0,
    frequency_penalty: 0,
  });

  const quote = completion.data.choices[0].text;
  console.log(quote)

  res.status(200).json({ quote });
}
