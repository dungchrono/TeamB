import { Link, useLocation, useNavigate } from "react-router-dom";
function Footer() {
    return ( 
      <div className="section section-wide">
        <div className="container">
        <div className="row mbn-40" style={{ backgroundColor: 'black',padding:'40px' }}>
      {/*Footer Widget Start*/}
      <div className="col-lg-3 col-md-6 col-12 mb-40">
        <div className="footer-widget">
          <h4 className="footer-widget-title">FOTOLAB COMPANY</h4>
          <div className="footer-widget-text">
            <p>FOTOLAB was established in 1991 with the objective of providing sales service for Digital Camera, SLR Camera, Handycam, their accessories and all other related products.</p>
          </div>
        </div>
      </div>
      {/*Footer Widget End*/}
      {/*Footer Widget Start*/}
      <div className="col-lg-3 col-md-6 col-12 mb-40">
        <div className="footer-widget">
          <h4 className="footer-widget-title">Address</h4>
          <div className="footer-widget-text mb-15">
            <p><i className="fa fa-home" /> 8 Ton That Thuyet, My Dinh, Ha Noi.</p>
            <p><i className="fa fa-phone" /> 19009999</p>
            <p><i className="fa fa-envelope" /> <a href="mailto:info@demo.com">teamb@gmail.com</a></p>
          </div>
        </div>
          </div>
          {/*Footer Widget End*/}
          {/*Footer Widget Start*/}
      <div className="col-lg-3 col-md-6 col-12 mb-40">
        <div className="footer-widget">
          <h4 className="footer-widget-title">Information</h4>
          <ul className="footer-widget-link">
          <li><Link  to={'/about-us'}>About us</Link></li>
          <li><Link  to={'/contact-me'}>Contact me</Link></li> 
          </ul>
        </div>
      </div>
      {/*Footer Widget End*/}
     {/*Footer Widget Start*/}
          <div className="col-lg-3 col-md-6 col-12 mb-40">
            <img src="http://localhost:3000/assets/images/banner/19a811982c8d56435888b6b26a59b8db.jpg" className="img-footer" alt="" />
      </div>
      {/*Footer Top End*/}
      {/*Footer Bottom Start*/}
      <div className="footer-bottom">
        <div className="row">
          <div className="copyright col-12">
            <p>© 2023 FOTOLAB. Made with <i className="fa fa-heart heart-icon" /> By <a target="_blank" href="">TEAM B</a></p>
          </div>
        </div>
      </div>
      {/*Footer Bottom End*/}
    </div>
        </div>
      </div>
      
     );
}

export default Footer;