import packageJSON from './mocks/package.json';
import './App.css';
import { Products } from './components/Products';
import { useState } from 'react';
import { Header } from './components/Header';
import { useFilters } from './hooks/useFilters';
import { Cart } from './components/Cart';
import { CartProvider } from './context/cart';

function App() {
  const [products] = useState(packageJSON);
  const { handleFilterChange, setFilters } = useFilters();

  const filteredProducts = handleFilterChange(products);

  return (
    <CartProvider>
    <Header />
    <Cart />
    <Products products={filteredProducts} />
    </CartProvider>
  );
}

export default App;
