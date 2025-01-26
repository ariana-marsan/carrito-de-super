
import { useFilters } from '../hooks/useFilters';
import { useId } from 'react';

export function Filter() {
    const { setFilters }= useFilters()

    const minPriceId = useId()
    const categoryId = useId()

    const handleChangeMinPrice = (e) => {
        setFilters(prevState=>({
            ...prevState,
            minPrice: e.target.value
        })
        )
    }

    const handleChangeCategory = (e) =>{
        setFilters(prevState=>({
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