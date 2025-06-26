import React from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-8 relative border border-slate-200"
          onClick={e => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-slate-500 hover:text-slate-700 p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors duration-200"
            onClick={onClose}
          >
            ✕
          </button>
          {children}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
