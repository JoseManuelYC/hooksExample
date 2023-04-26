import { LoadingQuote, Quote } from "../components";
import { useCounter, useFetch } from "../hooks";

export const MultipleHooks = () => {
  const { onNewQuote, counter } = useCounter();
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>Multiple Hooks</h1>
      {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}
      <button className="btn btn-primary" onClick={onNewQuote}>
        Next Quote
      </button>
    </>
  );
};
