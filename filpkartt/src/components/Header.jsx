import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#">
            <img width="75" src="./images/flipkart-plus_8d85f4.png" alt="Flipkart" title="Flipkart" className="W5mR4e"></img>
          </a>
          <a style={{ fontSize: '11px', fontStyle: 'italic', marginTop: '-1px' }}>Explore</a>
          <span>Plus</span>
          <img width="10" src="./images/plus_aef861.png" />
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search for products, brands and more" />
          <button aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 17 18" className="">
               <g fill="#2874F1" fillRule="evenodd">
                <path className="EwE-Fa" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203" fill="#2874F0"></path>
                <path className="EwE-Fa" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467" fill="#2874F0"></path></g>
            </svg>
          </button>
        </div>

        <div className="nav-links">
          <ul>
            <li><a href="#">Login</a></li> 
            <li><a href="#">Become a Seller</a></li>
            <li><a href="#">More</a></li>
            <li><a href="#">Cart</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;