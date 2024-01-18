import React from 'react'
import Data from '../../products.json'


function Card() {



    return (
        <div>
            <div className="main">
                <div className="row">
                    {
                        Data && Data.map(data => {
                            return (
                                <div key={data.id} className='col-6'>
                                    <div className="card">
                                        <img src={data.img} alt='' />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <h5 className="card-title">{data.seller}</h5>
                                        <p>${data.price}</p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-danger">Add to Cart</button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-primary">Buy Now</button>
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



