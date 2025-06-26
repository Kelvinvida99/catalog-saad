import React from 'react';
import type { Product } from '../types';

export interface CardProps extends Product {
  onClick?: (id: string) => void;
}

export const Card: React.FC<CardProps> = ({
  id, name, description, imageUrl, inStock, onClick,
}) => (
  <div 
    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.01] p-5 cursor-pointer border border-gray-100"
    onClick={() => onClick?.(id)}
  >
    <img src={imageUrl} alt={name} className="w-full h-100 object-cover rounded-lg" />
    <div className="mt-4">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-base text-gray-600 mt-2 line-clamp-2">{description}</p>
      <span className={`inline-block mt-3 text-sm font-medium px-3 py-1 rounded-full ${inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {inStock ? 'En stock' : 'Agotado'}
      </span>
    </div>
  </div>
);
