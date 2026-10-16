import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div>
        <h1>Tu Carrito está vacío</h1>
        <p>¿Aún no agregaste productos?</p>
        <Link to="/products" style={{ color: '#007bff' }}>Ir a ver productos</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Tu Carrito de Compras</h1>
      <div style={{ marginTop: '20px' }}>
        {cart.map((item) => (
          <div 
            key={item.id} 
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px', borderBottom: '1px solid #ddd' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
              <div>
                <h3 style={{ margin: 0 }}>{item.name}</h3>
                <p style={{ margin: '5px 0', color: '#666' }}>Cantidad: {item.quantity}</p>
                <p style={{ margin: 0, fontWeight: 'bold' }}>${(item.price * item.quantity).toLocaleString('es-AR')}</p>
              </div>
            </div>
            <button 
              onClick={() => removeFromCart(item.id)}
              style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '25px', textAlign: 'right' }}>
        <h2>Total: ${totalPrice.toLocaleString('es-AR')}</h2>
        <button 
          onClick={clearCart}
          style={{ backgroundColor: '#6c757d', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}
        >
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
}