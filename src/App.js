import packageJSON from './mocks/package.json';
import './App.css';
import { Products } from './hooks/Products';
import { useState } from 'react';
import { Header } from './components/Header';
import { useFilters } from './hooks/useFilters';

function App() {
  const [products] = useState(packageJSON);
  const { handleFilterChange, setFilters } = useFilters();

  const filteredProducts = handleFilterChange(products);

  return (
    <>
    <Header />
    <Products products={filteredProducts} />
    </>
  );
}

export default App;
