import React from 'react';
import DualLangText from './DualLangText';

interface ConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" aria-modal="true" role="dialog">
      <div className="bg-slate-800 rounded-lg shadow-xl p-6 md:p-8 w-full max-w-sm text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-6">
          <DualLangText text={{ ms: "Anda pasti mahu keluar?", en: "Are you sure you want to exit?" }} />
        </h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="w-full bg-slate-600 hover:bg-slate-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            <DualLangText text={{ ms: "Batal", en: "Cancel" }} inline />
          </button>
          <button
            onClick={onConfirm}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            <DualLangText text={{ ms: "Ya, Keluar", en: "Yes, Exit" }} inline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
