import React from 'react'
import { useCart } from "react-use-cart";
import Swal from 'sweetalert2';

function TrackOrder() {
    
    const {
        items,
        emptyCart,
    } = useCart();

    const messageElement = document.getElementById("message")
    const cartData = Object.values(items).map(item => ({
        id: item.id,
        name: item.name,
        qty: item.quantity,
        price: item.price,
        total_amount: item.quantity * item.price,
    }));

    // Make a POST request to the Laravel API endpoint
    const response = fetch('http://127.0.0.1:8000/api/track-order', {
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
                text: "Product Name:" + result.item.name,
                text: "Quantity :" + result.item.quantity,
                text: "Price:" + result.item.price,
                text: "Total Amount:" + result.reference,
                icon: "info"
              });
            } }
   );
    
    
  return (
<   div class="input-group">
  <span class="input-group-text">Enter Order Number here:</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
  <button className="btn btn-outline-secondary" type="submit" onClick={TrackOrder}>Search</button>
    </div>
  )
  }
export default TrackOrder;
