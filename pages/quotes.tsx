import { useEffect, useState } from "react";

export default function Home() {
  const [quotes, setQuotes] = useState<string[]>([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [quoteKey, setQuoteKey] = useState(0); // Force re-render

  // Fetch quotes from the text file
  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch("/quotes.txt");
      const text = await response.text();
      const quotesArray = text.split("\n").map((quote) => quote.trim());
      setQuotes(quotesArray.filter((quote) => quote)); // Remove empty lines
    };
    fetchQuotes();
  }, []);

  // Update quote index every 3 seconds
  useEffect(() => {
    if (quotes.length === 0) return;

    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      setQuoteKey((prevKey) => prevKey + 1); // Update key to trigger re-render
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval
  }, [quotes]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {quotes.length > 0 ? (
        <div className="relative h-16 flex items-center justify-center overflow-hidden">
          <div
            key={quoteKey} // React will remount this element to trigger the animation
            className="absolute text-2xl font-bold animate-rolling"
          >
            {quotes[currentQuoteIndex]}
          </div>
        </div>
      ) : (
        <p>Loading quotes...</p>
      )}
    </div>
  );
}
