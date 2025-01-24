
import { useState, useId } from 'react';

export function Filter({ onChange }) {
    const [minPrice, setMinPrice] = useState(0);
    const [category, setCategory] = useState("all")
    const minPriceId = useId()
    const categoryId = useId()

    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value);
        onChange(prevState=>({
            ...prevState,
            minPrice: e.target.value
        })
        )
    }

    const handleChangeCategory = (e) =>{
        setCategory(e.target.value)
        onChange(prevState=>({
            ...prevState,
            category: e.target.value
        }))
    }
    
    return (
      <form className="form">
        <section className="categoria">
        <label id={categoryId}>Categoría</label>
        <select className="category" onChange={handleChangeCategory}>
          <option value="all">Todos</option>
          <option value="smartphones">Celulares</option>
          <option value="laptops">Laptops</option>
        </select>
        </section>
        <section className="price">
        <label>Precio mínimo</label>
        <div>
        <input id={minPriceId} type="number" onChange={handleChangeMinPrice} className="minPrice" />
        </div>
        </section>
      </form>)
}