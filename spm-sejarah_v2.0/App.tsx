import React, { useState, useCallback, useMemo } from 'react';
import type { GameState, Question } from './types';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import ConfirmationModal from './components/ConfirmationModal';
import { ALL_QUESTIONS } from './constants/questions';

const QUIZ_LENGTH = 25;

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  const timeTaken = useMemo(() => {
    if (startTime > 0 && endTime > 0) {
      return Math.round((endTime - startTime) / 1000);
    }
    return 0;
  }, [startTime, endTime]);

  const handleStartQuiz = useCallback((topic: string) => {
    let questionsForQuiz = ALL_QUESTIONS;
    if (topic !== 'All') {
      questionsForQuiz = ALL_QUESTIONS.filter(q => q.topic.ms === topic);
    }
    setQuizQuestions(shuffleArray(questionsForQuiz).slice(0, QUIZ_LENGTH));
    setCurrentQuestionIndex(0);
    setScore(0);
    setStartTime(Date.now());
    setEndTime(0);
    setIsQuizCompleted(false);
    setGameState('quiz');
  }, []);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setEndTime(Date.now());
      setIsQuizCompleted(true);
      setGameState('results');
    }
  }, [currentQuestionIndex, quizQuestions.length]);

  const handleExitQuiz = useCallback(() => {
    setIsExitModalOpen(true);
  }, []);
  
  const handleConfirmExit = useCallback(() => {
    setEndTime(Date.now());
    setIsQuizCompleted(false);
    setGameState('results');
    setIsExitModalOpen(false);
  }, []);

  const handleCancelExit = useCallback(() => {
    setIsExitModalOpen(false);
  }, []);

  const handleRestart = useCallback(() => {
    setGameState('start');
  }, []);
  
  const renderContent = () => {
    switch (gameState) {
      case 'quiz':
        return (
          <QuizScreen
            questions={quizQuestions}
            currentQuestionIndex={currentQuestionIndex}
            score={score}
            startTime={startTime}
            onAnswer={handleAnswer}
            onExit={handleExitQuiz}
          />
        );
      case 'results':
        return (
          <ResultsScreen
            score={score}
            totalQuestions={quizQuestions.length}
            timeTaken={timeTaken}
            onRestart={handleRestart}
            isCompleted={isQuizCompleted}
          />
        );
      case 'start':
      default:
        return <StartScreen onStartQuiz={handleStartQuiz} />;
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center font-sans">
      {renderContent()}
      <ConfirmationModal 
        isOpen={isExitModalOpen}
        onConfirm={handleConfirmExit}
        onCancel={handleCancelExit}
      />
    </div>
  );
};

export default App;
