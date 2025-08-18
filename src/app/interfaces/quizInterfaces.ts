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
