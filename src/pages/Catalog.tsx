import React, { useState } from 'react';
import { Card } from '../features/catalog/components/Card';
import { ProductDetail } from '../features/catalog/components/ProductDetail';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Modal } from '../components/Modal/Modal';
import { useFetchProducts } from '../features/catalog/hooks/useFetchProducts';
import type { Product } from '../features/catalog/types';

export const Catalog: React.FC = () => {
  const { products, loading } = useFetchProducts();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p className="text-center">Cargando productos…</p>;

  return (
    <>
      <SearchBar value={query} onChange={setQuery} />

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No se encontraron productos.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <Card
              key={p.id}
              {...p}
              onClick={(id: string) => {
                const prod = products.find(x => x.id === id)!;
                setSelected(prod);
              }}
            />
          ))}
        </div>
      )}

      {/* Modal de detalle */}
      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
      >
        {selected && <ProductDetail product={selected} />}
      </Modal>
    </>
  );
};
