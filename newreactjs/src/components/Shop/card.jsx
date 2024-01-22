import React from 'react'
import Data from '../../products.json'
import{useCart} from 'react-use-cart';

function Card() {
const {addItem} = useCart();


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
                                        <h5 className="card-title">{data.name}</h5>
                                        <h5 className="card-title">{data.seller}</h5>
                                        <p>${data.price}</p>
                                    </div>
                                    <div>
                                        <button class="btn btn-danger"onClick={()=>addItem(data) }                                    
                                        >Add to Cart</button>                                        
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



