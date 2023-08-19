import React from "react";
import { BlockMath, InlineMath } from "react-katex";
type Result = {
  result: string;
  question: string;
  userAnswer: string;
  solution: string;
  timeElapsed: number;
};

interface FinishQuizProps {
  results: Result[];
}

const FinishQuiz: React.FC<FinishQuizProps> = ({ results }) => {
  const resultKeys = Object.keys(results[0]) as (keyof (typeof results)[0])[];
  return (
    <div className="bg-white shadow p-4 rounded overflow-y-scroll max-h-72 w-[800px]">
      <table className="w-full ">
        <thead>
          <tr>
            {resultKeys.map((key, keyIndex) => (
              <th key={keyIndex} className="font-semibold text-left p-2">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {results.map((question, questionIndex) => (
            <tr key={questionIndex} className="border-t">
              {resultKeys.map((key, keyIndex) => (
                <td key={keyIndex} className="p-2">
                  {key === "question" && <div>Show Question</div>}
                  {key === "userAnswer" && (
                    <div className="flex items-center h-9">
                      <InlineMath math={question.userAnswer} />
                    </div>
                  )}
                  {key === "solution" && (
                    <div className="flex items-center h-9 ">
                      <InlineMath math={question.solution} />
                    </div>
                  )}
                  {key === "result" && (
                    <div
                      className={`w-full h-4 rounded-full ${question.result}`}
                    ></div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default FinishQuiz;
