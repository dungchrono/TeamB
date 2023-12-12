import { Link } from "react-router-dom";
function Contact() {
  return (
      <>
          <div class="section section-padding">
      <div className="section section-wide">
        <div className="container-fluid">
          {/*Page Banner Start*/}
          <div className="page-banner">
            <div className="container">
              <h2 className="page-title">Contact</h2>
              <ul className="page-breadcrumb">
              <li><Link to={'/'}>Home</Link></li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          {/*Page Banner End*/}
        </div>
      </div>
      <div>
        <div className="container  mt-4">
          <div className="row mb-4">
            {/* Contact Info Start */}
            <div className="col-lg-5 col-12 mb-40">
              <div className="contact-info">
                <ul>
                  <li>
                    <h4>Address</h4>
                    <p>8 Ton That Thuyet, My Dinh, Ha Noi</p>
                  </li>
                  <li>
                    <h4>Phone</h4>
                    <p>
                      <a href="#">19009999</a>
                    </p>
                  </li>
                  <li>
                    <h4>Web</h4>
                    <p>
                      <a href="#">teamb@gmail.com</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* Contact Info End */}
            {/* Contact Form Start */}
            <div className="col-lg-7 col-12 mb-40">
              <div className="contact-form-wrap">
                <div className="col-lg-12">
                  <div className="map_area">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.10127444447!2d105.77925747438717!3d21.028633387784655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b32ecb92db%3A0x3964e6238a3bd088!2zOCBUw7RuIFRo4bqldCBUaHV54bq_dCwgTeG7uSDEkMOsbmgsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1700920145852!5m2!1svi!2s"
                      width={600}
                      height={450}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
              {/* Contact Form End */}
            </div>
          </div>
        </div>
        {/* Checkout Section End */}
        {/*Subscribe Section Start*/}
        <div className="section section-wide">
          <div className="container-fluid">
            <div className="subscribe-section section">
              {/*Subscribe Content Start*/}
              <div className="subscribe-content">
                <h2 className="title">
                  Subscribe our Newsletter
                  <span>Get update for news, offers</span>
                </h2>
              </div>
              {/*Subscribe Content End*/}
            </div>
          </div>
        </div>
              </div>
              </div>
    </>
  );
}

export default Contact;
