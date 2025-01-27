import  phone  from './img.jpg'
import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';

export function Products ({ products }) {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProduct = (product) => {
    return cart.some(item => item.id === product.id)
  }

    return(
      <main>
        <ul>
          {products.slice(0, 10).map((product) => {
            const isProductInCart = checkProduct(product);
          
          return (
            <li key={product.id}>
                  <h3>{product.title}</h3>
                  <img src={ phone }
                  alt={product.description} />
                  <p>${product.price}</p>
                  <button style={{backgroundColor: isProductInCart ? '#9009' : '#0909'}}
                  onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}
                  > 
                  {
                    isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />
                  }</button>
            </li>
          );
        })
          }
        </ul>
      </main>
      )
}