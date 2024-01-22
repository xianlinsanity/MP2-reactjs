import React from 'react'
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

    if (isEmpty) return <p>Your cart is empty</p>;

    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5   >
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                        {items.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <img src={item.img} style={{ height: '6rem' }} alt='' />
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
                                        <button className='btn btn-info ms-2' onClick={()=> updateItemQuantity(item.id, item.quantity - 1)}>
                                        -
                                        </button>
                                        <button className='btn btn-info ms-2' onClick={()=> updateItemQuantity(item.id, item.quantity + 1)}>
                                        +
                                        </button>
                                        <button className='btn btn-danger ms-2' onClick={()=> removeItem(item.id)}>
                                        Delete Item
                                        </button>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='col-auto ms-auto justify-content-center'>
                    <h2>Total Price: ${cartTotal}</h2>
                </div>
                <div className='col-auto'>
                   <button className='btn btn-danger ms-2' onClick={()=> emptyCart()}>
                    Clear Cart
                   </button>
                   <button className='btn btn-primary ms-2'>
                    Pay Now
                   </button>
                </div>
            </div>
        </section>
    );
}

export default Cartpage;
