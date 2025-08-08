import { Search, ShoppingBag } from 'lucide-react'
import './HeaderStyles.css'

const Header = ()=>{
    return(
        <div className="Header">
            <div className="Header_Announce paddingGeneral">shopping</div>
            <div className="Header_Navbar paddingGeneral">
                <div className="Header_Navbar__Links">
                    <a href="#">Shop</a>
                    <a href="#">New Arrivals</a>
                    <a href="#">Sale</a>
                </div>
                <div className="Header_Navbar__Logo text-bold">Bymu</div>
                  
                <div className="Header_Navbar__Options">
                    <Search className='cursor-pointer'/>
                    <a href="#">Sign Up</a>
                    <a href="#">Sign In</a>
                    <div className="badge cursor-pointer">
                        <ShoppingBag />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header