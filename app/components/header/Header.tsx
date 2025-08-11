import { Search, ShoppingBag } from 'lucide-react'
import './HeaderStyles.css'

const Header = ()=>{
    return(
        <div className="Header">
            <div className="header_announce1 paddingGeneral">
                Free shipping on orders over $15,000 - Free returning
            </div>
            <div className="header_navbar paddingGeneral">
                <div className="header_navbar__links">
                    <a href="#">Shop</a>
                    <a href="#">New Arrivals</a>
                    <a href="#">Sale</a>
                </div>
                <div className="header_navbar__logo text-bold">Bymu</div>
                  
                <div className="header_havbar__options">
                    <a href="#">Sign Up</a>
                    <a href="#">Sign In</a>
                    <Search size={18} className='cursor-pointer'/>
                    <div className="badge cursor-pointer">
                    <ShoppingBag size={18} className='cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className="header_announce2 paddingGeneral">
                Flash Sale Ends In: 22:00:00 
            </div>
        </div>
    )
}


export default Header