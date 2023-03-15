import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkout-product'>
            <img className='checkout-product-image' src={image} />

            <div className='checkout-product-info'>
                <div className='checkout-product-details'>
                    <p className='checkout-product-title'>{title}</p>
                    <p className="checkout-product-price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkout-product-rating">
                        {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span role='img'>🌟</span>
                        ))}
                    </div>
                </div>
                
                {!hideButton && (
                    <button onClick={removeFromBasket} className='checkout-remove'>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
