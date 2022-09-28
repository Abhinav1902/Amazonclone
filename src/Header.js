import React from "react";
import "./Header.css"; 
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
  <nav className="header">
    {/* logo on left side */}


      <Link to="/">
       <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
       </Link>

  {/*search box */}
  <div className="header__search">

 <input type="text" className="header_searchInput"/>
 <SearchIcon className="header_searchIcon"/>
 </div>

 {/* 3 links */}
 {/* 1st link */}
 <div className="header__nav">
 
    <Link to="/login"
    className="header__link">
        <div className="header__option">
    <span className="header__optionLineone">Hello</span>
    <span className="header__optionLinetwo"> Sign In</span>
    </div>
    </Link>
 

{/* 2nd link */}
 
    <Link to="/" className="header__link">
    <div className="header__option">
    <span className="header__optionLineone">Returns</span>
    <span className="header__optionLinetwo"> & Orders</span>
    
    </div>
    </Link>
 

{/* 3rd link */}
 
 <Link to="/" className="header__link">
 <div className="header__option">
    <span className="header__optionLineone">Your</span>
    <span className="header__optionLinetwo"> Prime</span>
    </div>
    </Link>

       
    <Link to="/checkout" className="header__link">
        <div className="header_optionBasket">
        <ShoppingBasketIcon/>
       <span className="header__optionLinetwo header__basketcount">0</span>
        </div>
        </Link>
    

 
        </div>

    </nav>
  );
}

export default Header;