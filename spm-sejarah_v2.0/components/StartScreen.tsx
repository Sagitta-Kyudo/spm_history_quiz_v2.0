import React, { useState } from 'react';
import { TOPICS } from '../constants/topics';
import DualLangText from './DualLangText';
import type { DualLangString } from '../types';

interface StartScreenProps {
  onStartQuiz: (topic: string) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStartQuiz }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>("All");

  const allTopicsOption: DualLangString = {
    ms: "Semua Topik (Rawak)",
    en: "All Topics (Random)",
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <div className="bg-slate-800 p-8 rounded-xl shadow-2xl max-w-lg w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">SPM Sejarah v2.0</h1>
        <p className="text-lg text-slate-300 mb-1">Quick Revision</p>
        <DualLangText text={{ ms: "Kedaulatan & Perlembagaan", en: "Sovereignty & Constitution" }} className="mb-8 text-md" />

        <div className="mb-6 w-full">
          <label htmlFor="topic-select" className="sr-only">Pilih Topik</label>
          <select
            id="topic-select"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 text-white text-md rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block p-3"
          >
            <option value="All">{allTopicsOption.ms} / {allTopicsOption.en}</option>
            {TOPICS.map((topic, index) => (
              <option key={index} value={topic.ms}>
                {topic.ms} / {topic.en}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => onStartQuiz(selectedTopic)}
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105"
        >
          <DualLangText text={{ ms: "Mula Kuiz", en: "Start Quiz" }} inline />
        </button>
      </div>
    </div>
  );
};

export default StartScreen;