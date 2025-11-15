import React from 'react';
import type { DualLangString } from '../types';

interface DualLangTextProps {
  text: DualLangString;
  className?: string;
  inline?: boolean;
}

const DualLangText: React.FC<DualLangTextProps> = ({ text, className, inline = false }) => {
  if (inline) {
    // Render with spans for inline contexts like buttons
    return (
      <span className={className}>
        <span className="font-semibold">{text.ms}</span>
        <br />
        <span className="text-sm text-blue-400 italic">{text.en}</span>
      </span>
    );
  }

  // Default render with divs for block contexts
  return (
    <div className={className}>
      <p className="font-semibold">{text.ms}</p>
      <p className="text-sm text-blue-400 italic">{text.en}</p>
    </div>
  );
};

export default DualLangText;
