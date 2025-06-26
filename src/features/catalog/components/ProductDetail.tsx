import React from 'react';
import type { Product } from '../types';

interface DetailProps {
  product: Product;
}

export const ProductDetail: React.FC<DetailProps> = ({ product }) => (
  <div>
    <img
      src={product.imageUrl}
      alt={product.name}
      className="w-full h-100 object-cover rounded-lg mb-4"
    />
    <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
    <p className="text-gray-600 mb-4">{product.description}</p>
    <p className="text-sm">
      <span className="font-medium">Categoría:</span> {product.category}
    </p>
    <p className="text-sm">
      <span className="font-medium">Estado:</span>{' '}
      {product.inStock ? (
        <span className="text-green-600">En stock</span>
      ) : (
        <span className="text-red-600">Agotado</span>
      )}
    </p>
  </div>
);
