import React from "react";

const Cart = () => {
  return (
    <div className='cart'>
      <h2>🍌</h2>
      <h1>BANANA</h1>
      <p className='price'>$4.56</p>
      <div className='count'>
        <button>-</button>
        <p>200</p>
        <button>+</button>
      </div>
    </div>
  );
};

export default Cart;
