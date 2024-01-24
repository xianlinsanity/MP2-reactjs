import React, { useState } from 'react';
import Data from '../../products.json'
import { useCart } from 'react-use-cart';


function Card() {
    const { addItem } = useCart();
    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCart = (data) => {
        addItem(data);
        alert('Item added to cart!');
    };

    return (
        <div>
            <div className="main">
                <div className="row">
                    {
                        Data && Data.map(data => {
                            return (
                                <div key={data.id} className='col-lg-4 col-md-6 col-12'>
                                    <div className="card image-container">
                                        <img src={data.img} alt='' />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title p1">{data.name}</h5>
                                        <h5 className="card-title p2">{data.seller}</h5>
                                        <p>${data.price}</p>
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleAddToCart(data)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                    <br />
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div >
    )
}

export default Card;



