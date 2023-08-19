"use client";
import * as React from "react";
import { BlockMath } from "react-katex";
import LiveMath from "@/app/quiz/LiveMath";
import FinishQuiz from "./finishQuiz";
import LinearWithValueLabel from "./progress";
import QuizQuestion from "./quizQuestion";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import QuestionTracker from "@/app/quiz/questionVisulizer";
import Confetti from "react-confetti";
// Create an interface for an array of questions

interface Question {
  question: string;
  questionPrompt: string;
  solution: string;
  answer: number;
  status: string;
}

interface QuizLogicProps {
  quiz: {
    questions: Question[];
    numQuestions: number;
  };
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#2159d4",
    },
    secondary: {
      main: "#000000",
    },
  },
});

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type Result = {
  result: string;
  question: string;
  userAnswer: string;
  solution: string;
  timeElapsed: number;
};

export default function QuizLogic({ quiz }: QuizLogicProps) {
  // Rest of the code...
  const [mathData, setMathData] = useState("");
  const [correct, setCorrect] = useState(false);
  const [numAttempts, setNumAttempts] = useState(0);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [usersAnswers, setUsersAnswers] = useState([]);
  const [userResults, setUserResults] = useState<Result[]>([]);
  const question = quiz.questions[currentQuestionIndex];
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);

  const [open, setOpen] = useState(false);
  const [openNegative, setOpenNegative] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [buttonColor, setButtonColor] = useState("primary");
  const [isFinished, setIsFinished] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (numAttempts === 3 && !correct) {
      setButtonColor("error");
      question.status = "incorrect";
      const newResult = {
        result: "bg-red-600",
        question: question.questionPrompt,
        userAnswer: "2",
        solution: question.solution,
        timeElapsed: 0,
      };
      // Use functional update to append the new result to userResults
      setUserResults((prevResults) => [...prevResults, newResult]);
    }
  }, [numAttempts, correct, question]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setOpenNegative(false);
    setOpenWarning(false);
  };

  const handleMathData = (data: string) => {
    setMathData(data);
  };

  const handleSubmit = () => {};

  const skipQuestion = () => {
    setIsQuestionVisible(false);

    if (!correct && !(numAttempts === 3 && !correct)) {
      question.status = "skipped";
      const newResult = {
        result: "bg-blue-600",
        question: question.questionPrompt,
        userAnswer: "123",

        solution: question.solution,
        timeElapsed: 0,
      };
      // Append the new result to the userResults array
      const updatedResults = [...userResults];
      updatedResults.push(newResult);
      setUserResults(updatedResults);
    }
    // Check if last question
    if (currentQuestionIndex === quiz.questions.length - 1) {
      setShowConfetti(true);
      setIsFinished(true);
    } else {
      setButtonColor("primary");
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsQuestionVisible(true);
      setNumAttempts(0); // Move this line after setIsQuestionVisible(true)
      setCorrect(false);
      // Adjust the delay time as needed
    }
  };

  function submitAnswer() {
    // send answer to server
    // get response
    // if correct, show next question
    // if incorrect, show error
    if (typeof mathData === "number") {
      // A valid attempt
      setNumAttempts(numAttempts + 1);
      const updatedAnswers = [...usersAnswers];
      updatedAnswers[currentQuestionIndex] = mathData;
      console.log(usersAnswers);
      setUsersAnswers(updatedAnswers);
      if (Math.round(mathData * 1000000) / 1000000 === question.answer) {
        setCorrect(true);
        setOpen(true);
        setButtonColor("success");
        question.status = "correct";
        const newResult = {
          result: "bg-green-600",
          question: question.questionPrompt,
          userAnswer: "123",

          solution: question.solution,
          timeElapsed: 0,
        };
        // Append the new result to the userResults array
        const updatedResults = [...userResults];
        updatedResults.push(newResult);

        setUserResults(updatedResults);
      } else {
        setOpenNegative(true);
      }
      // Attempt is not valid
    } else {
      setOpenWarning(true);
    }
  }
  useEffect(() => {
    console.log(userResults);
  }, [userResults]);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (showConfetti) {
      const confettiDuration = 5000; // Duration in milliseconds (5 seconds)

      // Stop confetti after the specified duration
      const timeout = setTimeout(() => {
        setShowConfetti(false);
      }, confettiDuration);

      return () => clearTimeout(timeout);
    }
  }, [showConfetti]);

  return (
    <main className="">
      {isFinished ? (
        <div>
          {/* {<Confetti recycle={false} numberOfPieces={250} gravity={0.1} />} */}
          <FinishQuiz results={userResults} />
        </div>
      ) : (
        <div className="w-full">
          <Stack spacing={2} sx={{ width: "100%" }}>
            <Snackbar
              open={open}
              autoHideDuration={2000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Correct! Keep it up!
              </Alert>
            </Snackbar>
            <Snackbar
              open={openNegative}
              autoHideDuration={2000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                Incorrect!
              </Alert>
            </Snackbar>
            <Snackbar
              open={openWarning}
              autoHideDuration={3500}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert
                onClose={handleClose}
                severity="warning"
                sx={{ width: "100%" }}
              >
                PenguMath could not understand your answer. Please try again!
              </Alert>
            </Snackbar>
          </Stack>
          <div className="flex flex-col items-center space-y-8">
            <div
              className={
                isQuestionVisible
                  ? "animate-jump-in animate-ease-linear p-2 lg:p-11 bg-white  rounded-lg shadow-lg flex flex-col items-center w-screen lg:w-[800px] md:w-[650px] sm:w-[550px] overflow-x-scroll"
                  : "bg-white p-2 lg:p-11 rounded-lg shadow-lg flex flex-col items-center w-screen lg:w-[800px] md:w-[650px] sm:w-[550px] overflow-x-scroll"
              }
            >
              {/*  */}
              <h1 className="lg:text-2xl md:text-2xl sm:text-2xl text-xl ">
                <QuizQuestion question={question.questionPrompt} />
              </h1>
              <span className="absolute top-0 left-0 p-2 text-gray-500 lg:text-xs md:text-xs sm:text-xs text-[6px]">
                Attempts: {numAttempts}
              </span>
              <h2 className="text-black lg:text-4xl md:text-3xl sm:text-2xl text-2xl">
                <BlockMath math={question.question} />
              </h2>
              <div className="flex flex-col lg:flex-row md:flex-row text-3xl">
                <div className="border-2 border-gray-500 rounded-sm z-10 ">
                  <LiveMath mathData={mathData} setMathData={handleMathData} />
                </div>

                <Button
                  variant="outlined"
                  onClick={submitAnswer}
                  disabled={numAttempts === 3 || correct}
                >
                  Submit
                </Button>
              </div>
            </div>
            {(correct || numAttempts === 3) && (
              <div className="animate-fade-up animate-once animate-ease-in-out bg-white p-6 rounded-lg shadow-lg lg:w-96 md:w-90 sm:w-80 w-44">
                <h1 className="text-black text-2xl">
                  <span className="absolute top-0 left-0 p-2 text-gray-500 text-sm">
                    Answer
                  </span>
                  <BlockMath math={question.solution} />
                </h1>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="animate-fade absolute inset-x-0 bottom-0  p-3 bg-[#f5f5f6] border-t-2 border-gray-300 w-full">
        <div className="flex flex-row justify-end items-center pr-4">
          <div className="mr-4">
            <QuestionTracker questions={quiz.questions} />
          </div>

          <ThemeProvider theme={theme}>
            {buttonColor === "primary" && (
              <Tooltip title="Go forth!">
                <Button
                  color={buttonColor}
                  variant="contained"
                  onClick={skipQuestion}
                >
                  {currentQuestionIndex === quiz.questions.length - 1
                    ? "Results"
                    : "Next Question"}
                </Button>
              </Tooltip>
            )}
            {buttonColor === "success" && (
              <Tooltip title="Keep it up!">
                <Button
                  color={buttonColor}
                  variant="contained"
                  onClick={skipQuestion}
                >
                  {currentQuestionIndex === quiz.questions.length - 1
                    ? "Results"
                    : "Next Question"}
                </Button>
              </Tooltip>
            )}
            {buttonColor === "error" && (
              <Tooltip title="Don't give up!">
                <Button
                  color={buttonColor}
                  variant="contained"
                  onClick={skipQuestion}
                  style={{ fontSize: "1rem", padding: "8px 16px" }}
                >
                  {currentQuestionIndex === quiz.questions.length - 1
                    ? "Results"
                    : "Next Question"}
                </Button>
              </Tooltip>
            )}
          </ThemeProvider>
        </div>
      </div>
    </main>
  );
}
