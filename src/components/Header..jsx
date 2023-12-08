import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [text, setText] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (value) => {
    setText(value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (text.trim() !== "") {
        // Update the URL with the search query parameter
        const queryParams = new URLSearchParams(location.search);
        queryParams.set("search", text);
        navigate({
          pathname: "/search", // Update this to the appropriate path
          search: queryParams.toString(),
        });
      } else {
        navigate({
          pathname: "/search", // Update this to the appropriate path
          search: '',
        });
      }
    }
  };

  return (
    <div className="header-section section section-wide header-sticky">
    <div className="container">
      <div className="header-flex">
        {/* Header Logo Start */}
        <div className="col-auto">
          <div className="header-logo">
            <Link to={'/'}><img src="assets/images/logo/logo5.jpg" alt="Logo" /></Link>
          </div>
        </div>{/* Header Logo End */}
        {/* Main Menu One Start */}
          <div style={{ paddingRight: '40px'}}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'end' }}>
            <div className="input-search my-3" style={{ width: '200px', backgroundColor: 'white'}}>
                  <input type="text" value={text} onKeyPress={handleKeyPress} onChange={(e)=> handleSearch(e.target.value)} placeholder="Search here..."/>
              </div>
          </div>
          <div className="main-menu header-input">
            <nav>
              <ul>
                <li className="menu-item-has-children"><Link  to={'/list?nameCategory=cameras'}>Cameras</Link>
                  <ul className="sub-menu">
                    <li><Link  to={'/list?nameCategory=cameras&nameChildCategory=dslr-camera'}>DSLR Camera</Link></li>
                    <li><Link  to={'/list?nameCategory=cameras&nameChildCategory=mirrorless-camera'}>Mirrorless Camera</Link></li>
                    <li><Link  to={'/list?nameCategory=cameras&nameChildCategory=compact-camera'}>Compact Camera</Link></li>
                  </ul>
                </li>
                <li className="menu-item-has-children"><Link  to={'/list?nameCategory=cameras-lenses'}>Camera Lens</Link>
                    <ul className="sub-menu">
                    <li><Link  to={'/list?nameCategory=cameras-lens&nameChildCategory=dslr-lens'}>DSLR Lens</Link></li>
                    <li><Link  to={'/list?nameCategory=cameras-lens&nameChildCategory=mirrorless-lens'}>Mirrorless Lens</Link></li>
                    <li><Link  to={'/list?nameCategory=cameras-lens&nameChildCategory=medium-lens'}>Medium Format Lens</Link></li>
                  </ul>
                </li>
                <li className="menu-item-has-children"><Link  to={'/list?nameCategory=pro-audio'}>Pro Audio</Link>
                    <ul className="sub-menu">
                      
                    <li><Link  to={'/list?nameCategory=pro-audio&nameChildCategory=hi-end-sound'}>Hi-end Sound</Link></li>
                    <li><Link  to={'/list?nameCategory=pro-audio&nameChildCategory=hi-fi-sound'}>Hi-Fi Sound</Link></li>
                    <li><Link  to={'/list?nameCategory=pro-audio&nameChildCategory=audio-accessories'}>Audio Accessories</Link></li>
                  </ul>
                </li>
                <li className="menu-item-has-children"><Link  to={'/list?nameCategory=memory-cards'}>Memory cards &amp; Media</Link>
                    <ul className="sub-menu">
                    <li><Link  to={'/list?nameCategory=memory-cards-camera-film&nameChildCategory=memory-cards'}>Memory Cards</Link></li>
                    <li><Link  to={'/list?nameCategory=memory-cards-camera-film&nameChildCategory=camera-film'}>Camera Film</Link></li>
                  
                  </ul>
                </li>
                <li className="menu-item-has-children"><Link  to={'/list?nameCategory=accessories'}>Accessories</Link>
                    <ul className="sub-menu">
                    <li><Link  to={'/list?nameCategory=accessories&nameChildCategory=tripods-support'}>Tripods &amp; Supports</Link></li>
                    <li><Link  to={'/list?nameCategory=accessories&nameChildCategory=lighting-studio'}>Lighting &amp; Studio</Link></li>
                    <li><Link  to={'/list?nameCategory=accessories&nameChildCategory=camera-bag-and-cases'}>Camera bags &amp; Cases</Link></li>
                    <li><Link  to={'/list?nameCategory=accessories&nameChildCategory=miscellaneous-accessories'}>Miscellaneous Accessories</Link></li>                                     
                  </ul>
                </li>
                <li className="menu-item-has-children"><Link  to={'#'}>Contact</Link>
                    <ul className="sub-menu">
                    <li><Link  to={'/about-us'}>About us</Link></li>
                    <li><Link  to={'/contact-me'}>Contact me</Link></li>                                 
                  </ul>
                </li>
              </ul>
              </nav>
              
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Header;
