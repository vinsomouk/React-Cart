import React from 'react';
import CartComponent from '../components/CartComponent.tsx';
import ProductComponent from '../components/ProductComponent.tsx';

function Cart() {
  return (
    <div className="App">
     
        <ProductComponent/>
        <CartComponent/>
        
    </div>
  );
}

export default Cart;