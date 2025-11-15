
export interface DualLangString {
  ms: string;
  en: string;
}

export type QuestionType = 'mcq' | 'true_false' | 'fill_in_the_blank';

export interface Question {
  topic: DualLangString;
  type: QuestionType;
  question: DualLangString;
  options?: DualLangString[];
  answer: string;
  explanation: DualLangString;
}

export type GameState = 'start' | 'quiz' | 'results';
