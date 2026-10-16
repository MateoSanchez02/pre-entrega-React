import { Link } from 'react-router-dom';
import "../styles/homePage.css"

export default function HomePage() {
  return (
    <div className="home-container">
      
      <section className="hero-section">
        <div className="hero-content">
          <h1>Vestí con Estilo en <span>Santa Pilcha</span></h1>
          <p>Prendas unicas y todo el estilo urbano/deportivo en un solo lugar.</p>
          <Link to="/products" className="btn-primary">
            Explorar Catálogo
          </Link>
        </div>
      </section>

      {/* Características principales */}
      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🚚</div>
          <h3>Envíos Rápidos</h3>
          <p>Recibí tu pedido en la puerta de tu casa en menos de 48 hs.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💳</div>
          <h3>Múltiples Pagos</h3>
          <p>Aceptamos tarjetas de crédito, débito y transferencias.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <h3>Compra Segura</h3>
          <p>Garantía de cambio por 30 días sin costo adicional.</p>
        </div>
      </section>

    </div>
  );
}