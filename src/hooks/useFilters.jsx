import { useContext } from 'react';
import { FiltersContext } from '../context/filters';

export function useFilters() {

    const { filters, setFilters }= useContext(FiltersContext);
  
    const handleFilterChange = (products) => {
  
      return products.products.filter((product) => {
        return(
          product.price >= filters.minPrice &&
          (filters.category === 'all' || product.category === filters.category)
        )
      })
    }
    return { handleFilterChange, setFilters };
  }
  