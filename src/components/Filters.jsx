
import { useState } from 'react';

export function Filter({ onChange }) {
    const [minPrice, setMinPrice] = useState(0);

    const handleChange = (e) => {
        setMinPrice(e.target.value);
        onChange(prevState=>({
            ...prevState,
            minPrice: e.target.value
        })
        )
        console.log(e.target.value);
        console.log(minPrice);
    }
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     setMinPrice(minPrice);
    // }

    return (
      <form className="form">
        <section className="categoria">
        <label>Categoría</label>
        <select className="category">
          <option value="all">Todos</option>
          <option value="phones">Celulares</option>
          <option value="laptops">Laptops</option>
          <option value="cameras">Cámaras</option>
        </select>
        </section>
        <section className="price">
        <label>Precio mínimo</label>
        <div>
        <input type="number" onChange={handleChange} className="minPrice" />
        <button /* onClick={handleClick}*/type="submit">Aplicar</button>
        <span>{minPrice}</span>
        </div>
        </section>
      </form>)
}