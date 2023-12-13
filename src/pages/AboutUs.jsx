import { Link } from "react-router-dom";
function AboutUs() {
    return ( 
        <>
        <div className="section section-wide">
            <div className="container-fluid">
                {/*Page Banner Start*/}
                <div className="page-banner">
                <div className="container">
                    <h2 className="page-title">About us</h2>
                    <ul className="page-breadcrumb">
                    <li><Link to={'/'}>Home</Link></li>
                    <li>About us</li>
                    </ul>
                </div>
                </div>
                {/*Page Banner End*/}
            </div>
            </div>
            <div>
  <div className="section section-padding">
    <div className="container">
      <div className="row mbn-40">
        {/* Contact Info Start */}
        <div className="col-lg-5 col-12 mb-40">
          <div className="contact-info">
            <ul>
              <h4>FOTOLAB COMPANY</h4>
              <br />
              <li>
                <h4>Address</h4>
                <p>8 Ton That Thuyet, My Dinh, Ha Noi</p>
              </li>
              <li>
                <h4>Phone</h4>
                <p><a href="#">19009999</a></p>
              </li>
              <li>
                <h4>Web</h4>
                <p><a href="#">teamb@gmail.com</a></p>
              </li>
            </ul>
          </div>
        </div>{/* Contact Info End */}
        {/* Contact Form Start */}
        <div className="col-lg-7 col-12 mb-40">
          <div className="contact-form-wrap">
          <h4>About Us</h4>
            <p>FOTOLAB was established in 1991 with the objective of providing sales service for Digital Camera, SLR Camera, Handycam, their accessories and all other related products.
            </p>
            <img src="assets/images/products/EKkyc33XsAo4nia.jpg" alt="" />
            <p> They allot top priority to innovation &amp; upgradation of technology in the avenues of Distribution of All kinds and brands of Digital Camera and their related accessories.
              The customers get the benefit of Undivided Attention, Expert Analysis, Innovative Ideas, Commitment and Comprehensive Hardware &amp; Software Solution.
            </p>
          </div>
        </div>{/* Contact Form End */}
      </div>
    </div>
  </div>{/* Checkout Section End */}
  {/*Subscribe Section Start*/}
  <div className="section section-wide">
    <div className="container-fluid">
      <div className="subscribe-section section">
        {/*Subscribe Content Start*/}
        <div className="subscribe-content">
          <h2 className="title">Subscribe our Newsletter<span>Get update for news, offers</span></h2>
        </div>
        {/*Subscribe Content End*/}
      </div>
    </div>
  </div>
</div>

        </>
     );
}

export default AboutUs;