import React from 'react';
import DualLangText from './DualLangText';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  timeTaken: number; // in seconds
  onRestart: () => void;
  isCompleted: boolean;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, totalQuestions, timeTaken, onRestart, isCompleted }) => {
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const minTextMs = minutes > 0 ? `${minutes} minit` : '';
    const secTextMs = `${seconds} saat`;
    const minTextEn = minutes > 0 ? `${minutes} minutes` : '';
    const secTextEn = `${seconds} seconds`;
    
    return {
      ms: `${minTextMs} ${secTextMs}`.trim(),
      en: `${minTextEn} ${secTextEn}`.trim()
    }
  };

  const formattedTime = formatTime(timeTaken);
  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
  
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const resultMessage = isCompleted
    ? { ms: "Tahniah! Anda telah menyelesaikan kuiz.", en: "Congratulations! You have completed the quiz." }
    : { ms: "Setiap langkah adalah kemajuan!", en: "Every step is progress! Try again to finish the quiz." };

  // Calculate position for the dot
  const angle = (percentage / 100) * 2 * Math.PI - (Math.PI / 2);
  const dotX = 70 + radius * Math.cos(angle);
  const dotY = 70 + radius * Math.sin(angle);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <div className="bg-slate-800 p-8 rounded-xl shadow-2xl max-w-lg w-full">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            <DualLangText text={{ ms: "Kuiz Selesai!", en: "Quiz Complete!"}}/>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Score Circle */}
          <div className="flex flex-col items-center">
            <DualLangText text={{ ms: "Skor Anda:", en: "Your Score:" }} className="mb-4 text-slate-300" />
            <div className="relative w-40 h-40">
              <svg className="w-full h-full" viewBox="0 0 140 140">
                <circle
                  className="text-slate-700"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r={radius}
                  cx="70"
                  cy="70"
                />
                <circle
                  className="text-cyan-400"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r={radius}
                  cx="70"
                  cy="70"
                  transform="rotate(-90 70 70)"
                  style={{ transition: 'stroke-dashoffset 0.8s ease-out' }}
                />
                <circle
                    cx={dotX}
                    cy={dotY}
                    r="6"
                    fill="#3b82f6" // blue-500
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-blue-500">{score}/{totalQuestions}</span>
              </div>
            </div>
          </div>

          {/* Time Circle */}
          <div className="flex flex-col items-center">
            <DualLangText text={{ ms: "Masa Diambil:", en: "Time Taken:" }} className="mb-4 text-slate-300" />
            <div className="relative w-40 h-40 bg-slate-700/50 rounded-full flex items-center justify-center p-2">
              <div className="text-center">
                <p className="text-xl font-bold">{formattedTime.ms}</p>
                <p className="text-md text-blue-400 italic">{formattedTime.en}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 h-12 flex items-center justify-center">
            <DualLangText text={resultMessage} />
        </div>

        <button
          onClick={onRestart}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105"
        >
          <DualLangText text={{ ms: "Cuba Lagi", en: "Try Again" }} inline />
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;
