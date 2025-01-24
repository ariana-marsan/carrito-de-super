import { Filter } from './Filters.jsx';

export const Header = ({ changeFilters }) => {
  return (
    <header>
      <h1>Shopping</h1>
      <h2>resultados:</h2>
      <Filter onChange={changeFilters}/>
    </header>
  );
}
