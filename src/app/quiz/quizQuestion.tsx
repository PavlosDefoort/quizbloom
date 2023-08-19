"use client";
import React from "react";
import { InlineMath } from "react-katex";

interface QuizQuestionProps {
  question: string;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question }) => {
  // This function renders the question text, which may contain LaTeX expressions
  // Regex filters where '$$' is found, and splits the string into an array of parts
  const renderQuestionText = (text: string) => {
    const regex = /\$\$(.*?)\$\$/g;
    const parts = text.split(regex);
    console.log(parts);
    // A latex will always be followed by a text part, and vice versa
    const renderedParts = parts.map((part, index) => {
      if (index % 2 === 1) {
        // Odd-indexed parts are LaTeX expressions
        const math = part;
        return <InlineMath key={index} math={math} />;
      } else {
        // Even-indexed parts are regular text
        return part;
      }
    });
    return renderedParts;
  };

  return (
    <div>
      <p>{renderQuestionText(question)}</p>
    </div>
  );
};

export default QuizQuestion;
