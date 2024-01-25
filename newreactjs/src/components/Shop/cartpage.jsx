import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";


function Cartpage() {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpty) return <h4 className='p2'>Your cart is empty</h4>;

    const handleCheckout = async () => {
        try {
            // Prepare the cart data
            const cartData = Object.values(items).map(item => ({
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                price: item.price,
            }));

            // Make a POST request to the Laravel API endpoint
            const response = await fetch('http://127.0.0.1:8000/api/checkoutCounter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cart: cartData,
                }),
            });

            // Check if the request was successful
            if (response.ok) {
                const data = await response.json();
                console.log('Checkout successful!', data);

                // Clear the cart after successful checkout
                emptyCart();

                // Redirect or perform other actions as needed
                // For example, redirect to a thank-you page
                // window.location.href = '/thank-you';
            } else {
                console.error('Checkout failed.');
                // Handle the error, display a message, or redirect to an error page
            }
        } catch (error) {
            console.error('Error during checkout:', error);
            // Handle the error, display a message, or redirect to an error page
        }
    };

    return (
        <div>
            <section className='py-5 p2'>
                <div className='row justify-content-center'>
                    <div className='col-12'>
                        <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5   >
                        <table className='table table-light table-hover m-0'>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <img src={item.img} style={{ height: '5rem' }} alt='' />
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            Price: ${item.price}
                                        </td>
                                        <td>
                                            Quantity ({item.quantity})
                                        </td>
                                        <button className='btn btn-info' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                            -
                                        </button>
                                        <button className='btn btn-info' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                            +
                                        </button>
                                        <button className='btn btn-danger' onClick={() => removeItem(item.id)}>
                                            Delete Item
                                        </button>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='col-auto ms-auto justify-content-center'>
                        <h2 className='p2'>Total Price: ${cartTotal}</h2>
                    </div>
                    <div className='col-auto'>
                        <button className='btn btn-danger ms-2' onClick={() => emptyCart()}>
                            Clear Cart
                        </button>
                        <button className='btn btn-primary ms-2' onClick={handleCheckout}>
                            Checkout Items
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cartpage;
