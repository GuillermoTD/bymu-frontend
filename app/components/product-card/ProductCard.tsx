import './ProductCardStyles.css';
import Image from 'next/image';


const ProductCard = ()=>{
    return(
        <>
            <div className="product-card ">
                <div className="product-card-img">
                    <img 
                        src="/images/shirt1.png" 
                        alt="Logo" 
                        width={200} 
                        height={100} 
                    />
                </div>
                <div className="product-card-wrapper">

                
            <div className="product-card-productName">Men Casual Premium Slim Fit T-Shirts</div>
            <div className="product-card-price">
                <span className='text-orange-700 font-semibold text-[1.2rem]'>$12.60</span>
                <span className='line-through text-[0.9rem]'>$63.00</span>
            </div>
            <div className="product-card-lastSold text-[0.88rem] text-emerald-500">
                289 + sold in last 24h
            </div>
            <a href="#" className="product-card-buyButton">Buy it</a>
            <div className="product-card-timeLimited text-[0.83rem] text-center text-orange-800">Limited time offer!</div>
            </div>
            </div>
        </>
    )
}

export default ProductCard;