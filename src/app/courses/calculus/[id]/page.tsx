"use client";
import QuizLogic from "../../../quiz/quizLogic";
import { useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import quizzes from "../quiz.json";
import { useRouter } from "next/router";
interface Question {
  question: string;
  questionPrompt: string;
  solution: string;
  answer: number;
  status: string;
}
interface Quiz {
  questions: Question[];
  name: string;
  numQuestions: number;
  [key: string]: any;
}
export default function CalculusQuiz({ params }: { params: { id: string } }) {
  function findQuizByName(name: string, data: Quiz[]) {
    return data.find((quiz) => quiz.name === name);
  }

  const name = params.id as string;

  const quiz = findQuizByName(name, quizzes.quizzes);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [isLoaded, setIsLoaded] = useState(false);

  const quizzing = {
    questions: [
      { correct: true },
      { incorrect: true },
      { skipped: true },
      // ... more questions
    ],
  };

  useEffect(() => {
    // Simulate a delay to simulate the loading time of the 'mathlive' library
    const delay = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  type Quote = {
    author: string;
    quote: string;
  };
  const [quote, setQuote] = useState<Quote>({ author: "", quote: "" });

  // Choose a random quote
  useEffect(() => {
    const inspirationalQuotes = [
      {
        author: "Albert Einstein",
        quote: "The only source of knowledge is experience.",
      },
      {
        author: "Steve Jobs",
        quote: "The only way to do great work is to love what you do.",
      },
    ];
    const randomQuote =
      inspirationalQuotes[
        Math.floor(Math.random() * inspirationalQuotes.length)
      ];
    setQuote(randomQuote);
  }, []); // empty dependency array to run only once

  // return a div with the quiz logic
  return (
    <main className="flex justify-center items-center bg-gradient-to-r from-[#C6FFDD] via-[#FBD786] to-[#f7797d] min-h-screen ">
      {isLoaded ? (
        <div className="">
          {quiz ? (
            <QuizLogic quiz={quiz} />
          ) : (
            <div>
              <h1>404 - Page Not Found</h1>
              <p>The requested quiz could not be found.</p>
            </div>
          )}
        </div>
      ) : (
        <div>
          {quote.quote && (
            <div className="animate-fade animate-ease-linear w-full bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center justify-center ">
                <h1 className="text-3xl font-bold mb-4">{quote.quote}</h1>
                <h2 className="text-lg font-semibold">- {quote.author}</h2>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
