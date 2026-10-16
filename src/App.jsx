import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/layout/Footer';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <main style={{ padding: '20px' }}>
          <AppRoutes />
        </main>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}