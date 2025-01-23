

export function Products ({ products }) {
    return(
      <main>
        <ul>
            {products.products.map((product) => (
          <li key={product.id}>
                <h3>{product.title}</h3>
                <img src={product.thumbnail} 
                alt={product.description} />
                <p>${product.price}</p>
                <button>Agregar al Carrito</button>
          </li>
            ))}
        </ul>
      </main>)
}