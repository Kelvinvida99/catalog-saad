import { useEffect, useState } from 'react';
import productsData from '../../../db.json';
import type { Product } from '../types';

export function useFetchProducts(): {
  products: Product[];
  loading: boolean;
} {
  const [products, setProducts] = useState<Product[]>([]); // Declara el estado 'products' y su función 'setProducts'.
  const [loading, setLoading] = useState(true); // Declara el estado 'loading' y su función 'setLoading'.

  useEffect(() => { // Define un efecto secundario que se ejecuta después del renderizado inicial.
    setTimeout(() => { // Inicia un temporizador para simular una operación asíncrona.
      setProducts(productsData.products); // Actualiza el estado 'products' con los datos del JSON.
      setLoading(false); // Establece 'loading' a falso, indicando que la carga ha terminado.
    }, 300); // El temporizador espera 300 milisegundos antes de ejecutar la función.
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente.

  return { products, loading };
}
