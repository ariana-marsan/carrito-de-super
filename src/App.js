import packageJSON from './mocks/package.json';
import './App.css';
import { Products } from './hooks/Products';
import { useState } from 'react';
import { Header } from './components/Header';

function App() {
  const [products] = useState(packageJSON);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  const handleFilterChange = (products) => {

    return products.products.filter((product) => {
      return(
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }
  const filteredProducts = handleFilterChange(products);

  return (
    <>
    <Header />
    <Products products={filteredProducts} />
    </>
  );
}

export default App;
