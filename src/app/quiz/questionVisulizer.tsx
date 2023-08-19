"use client";
import React from "react";

interface Question {
  question: string;
  questionPrompt: string;
  solution: string;
  answer: number;
  status: string;
}

interface QuestionTrackerProps {
  questions: Question[];
}

const QuestionTracker: React.FC<QuestionTrackerProps> = ({ questions }) => {
  return (
    <div className="animate-fade flex flex-row">
      {questions.map((question, index) => {
        let circleColor = "bg-gray-600";
        console.log(question.status);
        if (question.status === "unattempted") {
          // Unattempted
        } else if (question.status === "correct") {
          // Correct
          circleColor = "bg-green-600";
        } else if (question.status === "incorrect") {
          // Incorrect
          circleColor = "bg-red-600";
        } else {
          // Skipped
          circleColor = "bg-blue-600";
        }

        return (
          <div
            key={index}
            className={`lg:w-4 lg:h-4 lg:mr-3 md:w-4 md:h-4 md:mr-3 sm:w-3 sm:h-3 sm:mr-3 w-3 h-3 mr-1 rounded-full ${circleColor}`}
            title={`Question ${index + 1}`}
          ></div>
        );
      })}
    </div>
  );
};

export default QuestionTracker;
