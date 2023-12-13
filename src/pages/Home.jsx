import FAKE_DATA from "../data/data.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMyContext } from "../hook/MyContext";


function Home() {
  const { data, addItem } = useMyContext();
  const [list, setList] = useState(FAKE_DATA.filter((i)=> i.id == 1 || i.id == 41|| i.id == 71|| i.id == 21|| i.id == 51|| i.id == 91|| i.id == 123|| i.id == 81))
  const [list2, setList2] = useState(FAKE_DATA.filter((i)=> i.id == 142 || i.id == 101|| i.id == 121|| i.id == 111|| i.id == 51|| i.id == 92|| i.id == 131||i.id == 151))
  
  const handlePickSearch = (form) => {
    addItem(form)
  }

    return ( 
      <>
<div className="section section-wide section-padding pt-0">
          <div className="container-fluid">
          <div className="hero-item hero-bg-3" style={{ width: '100%', display: 'inline-block' }}>
                        <div className="content">
                            <h2 className="title">Capture your <br/>Beautiful moments</h2>
                            <a href="#" className="btn">Buy Now</a>
                        </div>
                    </div>                  
                    <br></br>
    <div className="row mbn-40">
      {/*Section Title Start*/}
      <div className="col-12">
        <div className="row">
          <div className="col-lg-9 col-12 ms-auto">
            <div className="section-title">
              <h2 className="title">Popular in this week</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-9 col-12 order-lg-3 mb-40">
        <div className="row mbn-35">
          
                  {
                    list.map((item) => (
                      
          <div className="col-xl-3 col-md-4 col-6 col-xxs-12 mb-35">
          <div className="product">
            {/*Image & Action Start*/}
            <div className="image-action">
            <Link className="image" to={`/item?id=${item.id}&name=${item.name}`}><img src={`../assets/images/products/${item.thumbnail}`} alt="" /></Link>

            </div>
            {/*Image & Action End*/}
                          {/*Content Start*/}
                          <div className="content">
                            {/*Title & Price Start*/}
                            <div className="title-price">
                              <h4 className="title"><Link to={`/item?id=${item.id}&name=${item.name}`}>{item.name}</Link></h4>
                              <span className="price">{item.price}</span>
                            </div>
                            {/*Title & Price End*/}
                          </div>
                          {/*Content End*/}
          </div>
        </div>
                    ))
        }

        </div>
      </div>
      {/*Product Wrapper End*/}
      {/*Banner Wrapper Start*/}
      <div className="col-lg-3 col-6 order-lg-2 mb-40">
        <div className="row mbn-35">
          {/*Banner Start*/}
          <div className="col-lg-12 col-6 mb-35">
            <div className="banner">
            <Link  to={'/list?nameCategory=cameras-lenses&nameChildCategory=dslr-lenses'}><img src="assets/images/banner/banner-4.jpg" alt="Banner" /></Link>
            </div>
          </div>
          {/*Banner End*/}
          {/*Banner Start*/}
          <div className="col-lg-12 col-6 mb-35">
            <div className="banner">
            <Link  to={'/list?nameCategory=cameras-lenses&nameChildCategory=mirrorless-lenses'}><img src="assets/images/banner/5afec2662d910efd258b17c01b9a2e77.jpg" alt="Banner" /></Link>
            </div>
          </div>
          {/*Banner End*/}
        </div>
      </div>
      {/*Banner Wrapper End*/}
    </div>
  </div>
</div>

<div className="section section-wide section-padding">
  <div className="container-fluid">
    <div className="row mbn-30">
      {/*Banner Start*/}
      <div className="col-sm-3 col-6 mb-30">
        <div className="banner">
          <a href="#"><img src="assets/images/banner/gif-canon.gif" alt="Banner" /></a>
        </div>
      </div>
      {/*Banner End*/}
      {/*Banner Start*/}
      <div className="col-sm-3 col-6 order-sm-3 mb-30">
        <div className="banner">
          <a href="#"><img src="assets/images/banner/30f74d42dd639d2cf33b202567359059.gif" alt="Banner" /></a>
        </div>
      </div>
      {/*Banner End*/}
      {/*Banner Start*/}
      <div className="col-sm-6 col-12 mb-30">
        <div className="banner">
          <a href="#"><img src="assets/images/banner/891009462139910b26b7cbcf0ab02ae5.gif" alt="Banner" /></a>
        </div>
      </div>
      {/*Banner End*/}
    </div>
  </div>
            </div>            
            <div className="section section-wide section-padding pt-0">
  <div className="container-fluid">
    <div className="row mbn-40">
      {/*Section Title Start*/}
      <div className="col-12">
      <div className="row">
          <div className="col-lg-9 col-12 ms-auto">
        <div className="section-title">
          <h2 className="title">Featured Products</h2>
        </div>
      </div>
      </div>
      </div>
      {/*Section Title End*/}
      {/*Product Wrapper Start*/}
      <div className="col-lg-9 col-12 mb-40">
        <div className="row mbn-35">
                  {
                   list2 && list2?.map((item) => (
                      <div className="col-xl-3 col-md-4 col-6 col-xxs-12 mb-35">
                        <div className="product">
                          {/*Image & Action Start*/}
                          <div className="image-action">
                          <Link className="image" to={`/item?id=${item.id}&name=${item.name}`}><img src={`../assets/images/products/${item.thumbnail}`} alt="" /></Link>

                          </div>
                          {/*Image & Action End*/}
                          {/*Content Start*/}
                          <div className="content">
                            {/*Title & Price Start*/}
                            <div className="title-price">
                              <h4 className="title"><Link to={`/item?id=${item.id}&name=${item.name}`}>{item.name}</Link></h4>
                              <span className="price">{item.price}</span>
                            </div>
                            {/*Title & Price End*/}
                          </div>
                          {/*Content End*/}
                        </div>
                      </div>
                    ))
                    }
        </div>
      </div>
      {/*Product Wrapper End*/}
      {/*Banner Wrapper Start*/}
      <div className="col-lg-3 col-12 mb-40">
        <div className="row mbn-35">
          {/*Banner Start*/}
          <div className="col-lg-12 col-6 mb-35">
            <div className="banner">
            <Link  to={'/list?nameCategory=accessories&nameChildCategory=tripods-support'}><img src="assets/images/banner/banner-8.jpg" alt="Banner" /></Link>
            </div>
          </div>
          {/*Banner End*/}
          {/*Banner Start*/}
          <div className="col-lg-12 col-6 mb-35">
            <div className="banner">
            <Link  to={'/list?nameCategory=cameras&nameChildCategory=dslr-camera'}><img src="assets/images/banner/unnamed.png" alt="Banner" /></Link>
            </div>
          </div>
          {/*Banner End*/}
        </div>
      </div>
      {/*Banner Wrapper End*/}
    </div>
  </div>
</div>

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
            
        </>
     );
}

export default Home;