import React, { useContext } from 'react'
import './Productdisplay.css'
import { Shopcontext } from '../Context/Shopcontext';


const Productdisplay = (prop) => {
    const {product} = prop;
    const { addtocart } = useContext(Shopcontext);
  return (
    <>
        <div className="prdtdisply">
{/* leftsection */}
            <div className="leftsection">
                <div className="imgsection">
                    <img className='smallimg' src={product.img} alt="Noimage" />
                    <img className='smallimg' src={product.img} alt="Noimage" />
                    <img className='smallimg' src={product.img} alt="Noimage" />
                    <img className='smallimg' src={product.img} alt="Noimage" />
                </div>

                <div className='bigimgsection'>
                <img className='bigimg' src={product.img} alt="Noimage" />
                </div>
            </div>
{/* rightsection */}
            <div className="rightsection">
                <div className="clothname">
                    <h4>cloth name</h4>
                </div>

                <div className='rates'>
                    <div className="stars">
                        <p><i className="fa-regular fa-star"></i></p>
                        <p><i className="fa-regular fa-star"></i></p>
                        <p><i className="fa-regular fa-star"></i></p>
                        <p><i className="fa-regular fa-star"></i></p>
                        <p><i className="fa-regular fa-star"></i></p>
                    </div>
                    <div className="ratenumber">
                        <p>(122)</p>
                    </div>
                </div>

                <div className="price">
                    <div className="oldprice"> $22</div>
                    <div className="newprice"> $10</div>
                </div>

                <div className="desc">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo dignissimos facilis at labore eum adipisci totam dolorum corporis sapiente, natus tenetur magni accusamus aspernatur rem alias reiciendis praesentium non ipsam.</p>
                </div>

                <div className="size">
                    <h4>Select Size</h4>
                    <div className="selectsize">
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                        <button>XXL</button>
                    </div>
                </div>

                <div className="info">
                    <div className="categories">
                        <p><span>Category : </span> Women,T-shirt,CropTop</p>
                        <p><span>Tags : </span> Modern,Latest</p>
                    </div>
                </div>

                <div className="cart">
                    <button onClick={()=>{addtocart(product.id)}} className='cartbtns' >Add to cart</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Productdisplay