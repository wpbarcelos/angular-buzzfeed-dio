// Defina a interface para uma opção de resposta
interface AnswerOption {
  id: number;
  name: string;
  alias: string;
}

// Defina a interface para uma pergunta
export interface QuizQuestion {
  id: number;
  text: string;
  options: AnswerOption[];
}

// Defina a interface para os resultados
export interface QuizResults {
  a: string;
  b: string;
  c: string;
  d: string;
}

// Defina a interface para o retorno completo do arquivo studentData.json
interface StudentQuizData {
  questions: QuizQuestion[];
  results: QuizResults;
}

export default StudentQuizData;
