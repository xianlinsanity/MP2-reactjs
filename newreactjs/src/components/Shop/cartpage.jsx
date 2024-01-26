import React from 'react'
import { useCart } from "react-use-cart";
import Swal from 'sweetalert2';


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

    const messageElement = document.getElementById("message")
    
    const handleCheckout = function () {
                   // Prepare the cart data
            const cartData = Object.values(items).map(item => ({
                id: item.id,
                name: item.name,
                qty: item.quantity,
                price: item.price,
            }));

            // Make a POST request to the Laravel API endpoint
            const response = fetch('http://127.0.0.1:8000/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cart: cartData,
                }),
           
                     }).then(function (result) {
                return result.json()
              }).then(function (result) {
                console.log('result: ', result)

                
                if (result.success) {
                    Swal.fire({
                        title: "You ordered:",
                        text: "Your reference number is: " + result.reference,
                        icon: "success"
                      });
                    // swal("Items checked out succesfully! Your reference number is:" + result.reference)
                  emptyCart();
                } else {
                  document.getElementById("message").innerHTML = "Checkout not successful";
                }}

           
)    };

    return (
        <div>
            <section className='py-5'>
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
                    <br />
                    <br />
                    {/* <div class="alert alert-primary" role="alert" id="message">
                    <b id="refNo"></b>
                    </div> */}
                </div>
            </section>
        </div>
    );
}

export default Cartpage;
