import React, { useState, useEffect } from 'react';
import { getCartTotal } from '../services/CartService.ts';

const CartComponent: React.FC = () => {
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        async function fetchTotal() {
            const totalPrice = await getCartTotal();
            setTotal(totalPrice);
        }
        fetchTotal();
    }, []);

    return <div>Total du panier: {total} €</div>;
};

export default CartComponent;