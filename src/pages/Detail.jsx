import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { TYPE_NAV } from "../utils/constant";
import Item from "../components/Item";
import FAKE_DATA from "../data/data.json";
import { useMyContext } from "../hook/MyContext";
import { Link } from "react-router-dom";
function Detail() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    const name = queryParams.get('name');
    const [detail, setDetail] = useState({});
  const [linkActive, setLinkActive] = useState("");
  const { data, addItem } = useMyContext();
  const [listRelated, setListRelated] = useState([]);

    useEffect(() => {
        const item = FAKE_DATA.find(i => i.id == id);
        if (item) {
            setDetail(item)
            setLinkActive(item.thumbnail)
        }
    }, []);
  
  useEffect(() => {
    if (detail) {
      const res = listRelatedProduct(detail.category1, detail.id);
      if (res.length > 0) {
        setListRelated(res);
      }
    }
  }, [detail]);
  
  const listRelatedProduct = (category, idProduct) => {
    const items = FAKE_DATA.filter((item) => item.category1 == category && item.id != idProduct);
    return items;
  }


    const handleActive = (item) => {
        setLinkActive(item)
  }
  
  const handleDownLoadFile = (name) => {
    const filename = name;
    const fileUrl = 'http://localhost:3000/docs/' + filename;

    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = filename;
    a.click();
  }

  const handlePickSearch = (form) => {
    addItem(form)
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This enables smooth scrolling
    });
  }

    return ( 
        <>
        <div className="section section-wide">
        <div className="container-fluid">
            {/*Page Banner Start*/}
            <div className="page-banner">
            <div className="container">
                <h5 className="page-title">{name}</h5>
                <ul className="page-breadcrumb">
                <li><Link to={'/'}>Home</Link></li>
                <li>{name}</li>
                </ul>
            </div>
            </div>
              {/*Page Banner End*/}
        </div>
            </div>
            <div className="section section-padding pb-0">
            <div className="container">
                {/*Single Product Wrapper Start*/}
                <div className="row mbn-20">
                {/*Single Product Images Start*/}
                <div className="col-lg-6 col-12 mb-20">
                    <div className="single-product-images">
                    {/*Single Product Image Start*/}
                    <div className="single-product-image">
                        <img src={`../assets/images/products/${linkActive}`} alt="" />
                    </div>

                    <div className="single-product-thumb">
                                    {
                                        detail && detail.listThumbnail && detail.listThumbnail?.map((item) => (
                                            <img key={item.id} src={`../assets/images/products/${item}`} onClick={()=> handleActive(item)} alt="" />
                                        ))
                        }
                    </div>
                    {/*Single Product Thumb End*/}
                    </div>
                </div>
                {/*Single Product Image End*/}
                {/*Single Product Content Start*/}
                <div className="col-lg-6 col-12 mb-20">
                    <div className="single-product-content">
                    {/*Title & Price Start*/}
                    <div className="title-price">
                        <h2 className="title">{detail?.name}</h2>
                        <span className="price">{detail?.price}</span>
                    </div>
                    {/*Title & Price End*/}
                    {/*Description Start*/}
                    <div className="desc">
                        <h3>Featured information</h3>
                        <div dangerouslySetInnerHTML={{__html: detail?.feature}}></div>
                    </div>
          <div className="action">
          <button><div onClick={()=> handleDownLoadFile(detail.file)} className="action-btn" style={{fontSize : '18px', fontWeight: 'bolder'}}>Download</div></button>
          &nbsp;&nbsp;<button><div onClick={()=>handlePickSearch(detail)} className="action-btn" style={{fontSize : '18px', fontWeight: 'bolder'}}>Compare</div></button>
          </div>
          {/*Action End*/}
        </div>
      </div>
      {/*Single Product Content End*/}
      {/*Single Product Description, Specifications & Reviews Start*/}
      <div className="col-12 mt-30 mb-20">
        <ul className="single-product-tab-list nav">
          <li><a href="#product-description" className="active" data-bs-toggle="tab">description</a></li>
          <li><a href="#product-specifications" data-bs-toggle="tab" className>specifications</a></li>
          {/* <li><a href="#product-reviews" data-bs-toggle="tab" class="">reviews</a></li> */}
        </ul>
        <div className="single-product-tab-content tab-content">
          <div className="tab-pane fade active show" id="product-description">
            <div className="row">
                      <div className="single-product-description-content col-lg-8 col-12">
                        <div dangerouslySetInnerHTML={{__html: detail?.description}}></div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="product-specifications">
                                    <div className="single-product-specification">
                                        
              <ul>
                {detail.property && Object.entries(detail.property)?.map(([key, value]) => (
                <li key={key}>
                    <strong>{key}:</strong> {value}
                </li>
                ))}
              </ul>
            </div>
          </div>
          {/* <div class="tab-pane fade" id="product-reviews"> */}
          {/*Product Rating Form Wrapper Start*/}
          <div className="product-ratting-wrap">
            <div className="rattings-wrapper">
            </div>
            {/*Rating Wrapper End*/}
          </div>
          {/*Product Rating Form Wrapper End*/}
        </div>
      </div>
    </div>
    {/*Single Product Description, Specifications & Reviews End*/}
  </div>
  {/*Single Product Wrapper End*/}
</div>
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
<div className="section section-padding">
  <div className="container">
    {/*Section Title Start*/}
    <div className="section-title">
      <h3 className="title">Related Products</h3>
    </div>
    {/*Section Title End*/}
    {/*Related Product Slider Start*/}
    <div className="related-product-slider slick-space">

              {
                listRelated && listRelated.splice(0,5).map((item) => (
                  <div className="product" onClick={scrollToTop}>
                {/*Image & Action Start*/}
                <div className="image-action">
                <Link className="image" to={`/item?id=${item.id}&name=${item.name}`}><img src={`../assets/images/products/${item.thumbnail}`} alt="" /></Link>
                  {/*Action Start*/}
                  <div className="action">
                  <div className="action-btn action-quickview" onClick={()=>handlePickSearch(item)}>COMPARE</div>
                </div>
                  {/*Action End*/}
                </div>
                {/*Image & Action End*/}
                {/*Content Start*/}
                <div className="content">
                {/*Title & Price Start*/}
                <div className="title-price">
                  <h4 className="title"><Link to={`/item?id=${item.id}&name=${item.name}`}>{item.name}</Link></h4>
                        <span className="price">{item.price}</span>
                </div>
              </div>
                {/*Content End*/}
              </div>
                ))
      }

    </div>
    {/*Related Product Slider End*/}
  </div>
</div>


        </>

     );
}

export default Detail;