import React from "react";
import Cart from "./Cart";

const CartList = ({ hideBackdropHandaler }) => {
  return (
    <section className='cart-ctr'>
      <header>
        <h1>Cart List</h1>
        <button onClick={hideBackdropHandaler}>Close</button>
      </header>
      <div className='cart-list'>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
      <div className='footer'>
        <p>
          Total Price <span>$400</span>
        </p>
        <button>Order Now</button>
      </div>
    </section>
  );
};

export default CartList;
