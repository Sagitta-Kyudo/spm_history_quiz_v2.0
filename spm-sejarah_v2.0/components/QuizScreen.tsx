import React from 'react';
import type { Question } from '../types';
import Timer from './Timer';
import QuestionCard from './QuestionCard';
import DualLangText from './DualLangText';

interface QuizScreenProps {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  startTime: number;
  onAnswer: (isCorrect: boolean) => void;
  onExit: () => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({
  questions,
  currentQuestionIndex,
  score,
  startTime,
  onAnswer,
  onExit,
}) => {
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto p-4">
      <header className="mb-4">
        <div className="relative flex items-center justify-between mb-4 h-10">
            <div className="flex-1 flex justify-start">
                <button onClick={onExit} className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    <DualLangText text={{ms: "Keluar Kuiz", en: "Exit Quiz"}} inline/>
                </button>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2">
                <h1 className="text-xl font-bold text-cyan-400 whitespace-nowrap">SPM Sejarah v2.0</h1>
            </div>
            <div className="flex-1"></div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center bg-slate-800 p-3 rounded-lg">
            <div>
                <DualLangText text={{ms: "Soalan", en: "Question"}} className="text-xs text-slate-400" />
                <p className="text-lg font-bold">{currentQuestionIndex + 1}/{questions.length}</p>
            </div>
            <div>
                <DualLangText text={{ms: "Skor", en: "Score"}} className="text-xs text-slate-400" />
                <p className="text-lg font-bold">{score}</p>
            </div>
            <div>
                <DualLangText text={{ms: "Masa", en: "Time"}} className="text-xs text-slate-400" />
                <p className="text-lg font-bold tabular-nums"><Timer startTime={startTime} /></p>
            </div>
        </div>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-start mt-4">
        <QuestionCard
          key={currentQuestionIndex}
          question={currentQuestion}
          onAnswer={onAnswer}
        />
      </main>
    </div>
  );
};

export default QuizScreen;