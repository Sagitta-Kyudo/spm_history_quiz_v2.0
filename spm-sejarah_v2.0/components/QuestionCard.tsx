import React, { useState, useEffect } from 'react';
import type { Question, DualLangString } from '../types';
import DualLangText from './DualLangText';

interface QuestionCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsCorrect(null);
    setInputValue('');
  }, [question]);

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;
    
    const correct = answer.trim().toLowerCase() === question.answer.toLowerCase();
    setSelectedAnswer(answer);
    setIsCorrect(correct);
    setIsAnswered(true);
  };

  const getButtonClass = (optionText: string) => {
    if (!isAnswered) {
      return 'bg-slate-700 hover:bg-slate-600';
    }
    if (optionText === question.answer) {
      return 'bg-green-600 ring-2 ring-green-400';
    }
    if (optionText === selectedAnswer && optionText !== question.answer) {
      return 'bg-red-600 ring-2 ring-red-400';
    }
    return 'bg-slate-700 opacity-50';
  };

  const renderFeedback = () => {
    if (!isAnswered) return null;

    const getCorrectAnswerBilingual = (): DualLangString => {
        if (question.type === 'mcq') {
            return question.options?.find(opt => opt.ms === question.answer) || {ms: question.answer, en: question.answer};
        }
        if (question.type === 'true_false'){
            return question.answer === "True" ? {ms: "Betul", en: "True"} : {ms: "Salah", en: "False"};
        }
        return {ms: question.answer, en: question.answer};
    };

    const correctAnswer = getCorrectAnswerBilingual();

    return (
      <div className={`mt-6 p-4 rounded-lg border ${isCorrect ? 'bg-green-900/20 border-green-700' : 'bg-red-900/20 border-red-700'}`}>
        <div className="flex items-start gap-3">
          <div>
            {isCorrect 
              ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            }
          </div>
          <div className="flex-1">
            {isCorrect ? (
              <DualLangText text={{ms: "Betul!", en: "Correct!"}} className="font-bold text-xl text-green-400" />
            ) : (
              <>
                <DualLangText text={{ms: "Salah. Jawapan yang betul ialah:", en: "Incorrect. The correct answer is:"}} className="font-bold text-red-400" />
                <div className="mt-1 font-bold text-lg text-amber-400">
                   <p>{correctAnswer.ms}</p>
                   <p className="text-sm text-blue-400 italic">{correctAnswer.en}</p>
                </div>
              </>
            )}
            <div className="mt-4 text-slate-300">
              <DualLangText text={question.explanation} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const renderOptions = () => {
    switch (question.type) {
      case 'mcq':
        return question.options?.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.ms)}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${getButtonClass(option.ms)}`}
          >
            <DualLangText text={option} inline />
          </button>
        ));
      case 'true_false':
        return ['True', 'False'].map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            disabled={isAnswered}
            className={`w-full p-4 rounded-lg transition-all duration-300 ${getButtonClass(option)}`}
          >
            <span className="font-semibold">{option === 'True' ? 'Betul' : 'Salah'}</span> / <span className="italic">{option}</span>
          </button>
        ));
      case 'fill_in_the_blank':
        return (
          <form onSubmit={(e) => { e.preventDefault(); handleAnswer(inputValue); }} className="flex gap-0">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isAnswered}
              placeholder="Taip jawapan anda / Type your answer"
              className="flex-grow bg-slate-700 border border-slate-600 rounded-l-lg p-3 focus:ring-cyan-500 focus:border-cyan-500 disabled:opacity-70"
            />
            <button
              type="submit"
              disabled={isAnswered}
              className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-3 px-6 rounded-r-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <DualLangText text={{ms: "Hantar", en: "Submit"}} inline />
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-800 p-6 md:p-8 rounded-xl shadow-2xl w-full">
      <div className="mb-6">
        <DualLangText text={question.question} className="text-xl md:text-2xl" />
      </div>
      <div className="space-y-4">{renderOptions()}</div>

      {renderFeedback()}
      
      {isAnswered && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => onAnswer(isCorrect!)}
            className="bg-slate-900 hover:bg-slate-950 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
          >
            <DualLangText text={{ ms: "Soalan Seterusnya", en: "Next Question" }} inline />
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
