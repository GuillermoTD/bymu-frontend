import ProductCard from '../product-card/ProductCard';
import './GridProductCardStyles.css';

const GridProductCard = ()=>{
    return(
        <>
            <div className="grid-product-card paddingGeneral">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </>
    )
}

export default GridProductCard;
