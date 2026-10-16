import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductsDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        setProduct(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px 0' }}>Cargando detalle del producto...</div>;
  }

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '50px 0' }}>
        <h2>Producto no encontrado</h2>
        <Link to="/products" style={{ color: '#60a5fa' }}>← Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: '30px', marginTop: '20px', flexWrap: 'wrap', backgroundColor: '#1e293b', padding: '30px', borderRadius: '12px', border: '1px solid #334155' }}>
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: '320px', height: '320px', objectFit: 'cover', borderRadius: '8px' }} 
      />
      <div style={{ flex: 1, minWidth: '250px' }}>
        <p style={{ textTransform: 'uppercase', color: '#94a3b8', fontSize: '14px', marginBottom: '5px', fontWeight: '600' }}>
          {product.category}
        </p>
        <h1 style={{ color: '#f8fafc', marginBottom: '15px' }}>{product.name}</h1>
        <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#60a5fa', margin: '15px 0' }}>
          ${product.price.toLocaleString('es-AR')}
        </p>
        <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '25px' }}>{product.description}</p>
        
        <button 
          onClick={() => addToCart(product)}
          style={{ padding: '12px 24px', fontSize: '16px', fontWeight: 'bold', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Agregar al Carrito 🛒
        </button>

        <div style={{ marginTop: '25px' }}>
          <Link to="/products" style={{ color: '#60a5fa', textDecoration: 'none' }}>← Volver a productos</Link>
        </div>
      </div>
    </div>
  );
}