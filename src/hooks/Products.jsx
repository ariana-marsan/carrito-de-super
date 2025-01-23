import  phone  from './img.jpg'

export function Products ({ products }) {
    return(
      <main>
        <ul>
            {products.map((product) => (
          <li key={product.id}>
                <h3>{product.title}</h3>
                <img src={ phone }
                alt={product.description} />
                <p>${product.price}</p>
                <button>Agregar al Carrito</button>
          </li>
            ))}
        </ul>
      </main>)
}