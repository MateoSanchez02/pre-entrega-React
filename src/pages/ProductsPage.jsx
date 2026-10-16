import { useState, useEffect } from 'react';
import Item from '../components/Item';
import '../styles/products.css';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error al cargar el catálogo de productos');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="catalog-container" style={{ textAlign: 'center', padding: '50px 0' }}>
        <h2>Cargando productos... ⏳</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="catalog-container" style={{ textAlign: 'center', padding: '50px 0', color: '#ef4444' }}>
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Catálogo de Productos</h1>
      <div className="products-grid">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}