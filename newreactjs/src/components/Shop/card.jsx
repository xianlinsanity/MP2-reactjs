import Data from '../../products.json'
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2';

function Card() {
    const { addItem } = useCart();

    const handleAddToCart = (data) => {
        addItem(data);
        Swal.fire({
            title: "Item added to cart succesfully!",
            icon: "success"
          });
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
                                        <p className="card-title p1">{data.name}</p>                                      
                                        <h5 className="card-title p2">{data.seller}</h5>                                 
                                        <p className='card-text p1'>${data.price}</p>
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleAddToCart(data)}>                                       >
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



