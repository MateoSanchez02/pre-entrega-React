import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import "./navbar.css"; 

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className='logo-container'>
             <Link to="/" className="navbar-logo">
          Santa Pilcha<span>.</span>
        </Link>
        </div>
        <div className='nav-container'>
            <nav className="navbar-links">
              <div className='link'>
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Inicio
                </NavLink>
              </div>
              <div className='link'>
                <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Productos
                </NavLink>
              </div>
              <div className='link'>
                <NavLink to="/cart" className={({ isActive }) => isActive ? 'nav-link cart-link active' : 'nav-link cart-link'}>
                  🛒 Carrito
                  {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                </NavLink>
              </div>
          </nav>
        </div>
      </div>  
    </header>
  );
}