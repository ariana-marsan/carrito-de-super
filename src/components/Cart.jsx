import { useId } from 'react';
import phone from './img.jpg';
import { CartIcon, ClearCartIcon } from './Icons.jsx';
import '../App.css';
import { useCart } from '../hooks/useCart';

function CartItem ({ price, title, quantity, addToCart }) {
    return(
        <li>
              <h3>Items in Cart</h3>
              <img src={ phone } alt="product"></img>
              <p>
                  <strong>{title}</strong>
                  <span>{price}</span>
              </p>

              <footer>
                  <small>{quantity}</small>
                  <button onClick={addToCart}>+1</button>
              </footer>
         </li>  
    )
}

export function Cart() {
    const cartCheckboxId = useId();
    const {cart, clearCart, addToCart} = useCart();


    return(
        <>
          <label className='cart-button' htmlFor={cartCheckboxId} 
  title="open cart">
            <CartIcon />
          </label>
          <input type='checkbox' id={cartCheckboxId} className='cart-checkbox' hidden/>

          <aside className='cart'>
            <ul>
                {cart.map((product) => (
                    <CartItem key={product.id} 
                       addToCart={() => addToCart(product)}
                          {...product}
                    />
                ))}
            </ul>

            <button className='clearCart' onClick={clearCart}>
                <ClearCartIcon />
            </button>
          </aside>
        </>
    )
}