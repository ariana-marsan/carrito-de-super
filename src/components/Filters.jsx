
export function Filter() {
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
        <input type="number" className="minPrice" />
        <button type="submit">Aplicar</button>
        </div>
        </section>
      </form>)
}