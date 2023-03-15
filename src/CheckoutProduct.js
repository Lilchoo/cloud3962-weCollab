import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton, amount }) {
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
            <div className='checkout-product-image-container'>
                <img className='checkout-product-image' src={image} />
            </div>

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
                    <div className='checkout-product-remove-container'>
                        <button onClick={removeFromBasket} className='checkout-product-remove'>Remove from Basket</button>
                        <p className='checkout-product-counter'>{amount > 1 ? `x${amount}` : ''}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
