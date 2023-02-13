import { FormEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { LocationState } from "./atoms/atoms";

interface Prompt_Props {}

const Prompt_ = ({}: Prompt_Props) => {
  const [data_, setData_] = useState('');
  const [data__, setData__] = useRecoilState(LocationState);
  const [quote, setQuote] = useState("");
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [quoteLoadingError, setQuoteLoadingError] = useState(false);

  async function handleSubmit() {
    const prompt = data_;

    if (prompt) {
      try {
        setQuote("");
        setQuoteLoadingError(false);
        setQuoteLoading(true);

        const response = await fetch("/api/hello?prompt=" + encodeURIComponent(prompt));
        const body = await response.json();
        setQuote(body.quote);
      } catch (error) {
        console.error(error);
        setQuoteLoadingError(true);
      } finally {
        setQuoteLoading(false);
      }
    }
  }
  return (
    <div className={`flex flex-row`}>
      <input
        className={`w-full h-[35px] bg-black/10 rounded-[2px] px-2 text-[14px]`}
        placeholder={`Describe the accommodation youre looking for..`}
        onChange={(e) => {
          setData_(e.target.value)
        }}
      />
      <div
        className={`w-[100px] h-[35px] flex flex-row justify-center items-center rounded-[2px] bg-black/10 hover:bg-black/30 ml-2 cursor-pointer text-center text-[13px] text-black/60`}
        onClick={() => {
          handleSubmit()
        }}
      >
        Find
      </div>
    </div>
  );
};

export default Prompt_;
