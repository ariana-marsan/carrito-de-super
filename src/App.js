import packageJSON from './mocks/package.json';
import './App.css';
import { Products } from './hooks/Products';

function App() {

  return (
    <>
    <header>
      <h1>Shopping</h1>
      <h2>resultados:</h2>
    </header>
    <Products products={packageJSON} />
    </>
  );
}

export default App;
