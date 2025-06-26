import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (newValue: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
  <div className="mb-6">
    <input
      type="text"
      placeholder="Buscar producto..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 ease-in-out"
    />
  </div>
);
