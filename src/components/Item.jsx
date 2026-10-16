import { Link } from 'react-router-dom';

export default function Item({ product }) {
  const { id, name, price, category, image } = product;

  return (
    <article className="product-card">
      <img src={image} alt={name} className="product-card-img" />
      <div className="product-card-body">
        <span className="product-card-category">{category}</span>
        <h3 className="product-card-title">{name}</h3>
        <div className="product-card-footer">
          <span className="product-card-price">
            ${price.toLocaleString('es-AR')}
          </span>
          <Link to={`/products/${id}`} className="btn-detail">
            Ver Detalle
          </Link>
        </div>
      </div>
    </article>
  );
}