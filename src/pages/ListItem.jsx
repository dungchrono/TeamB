import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useLocation } from 'react-router-dom';
import { TYPE_NAV, formatString } from "../utils/constant";
import Item from "../components/Item";
import FAKE_DATA from "../data/data.json";
import useDebounce from "../hook/useDebounce";
import { Link } from "react-router-dom";

function ListItem() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const nameCategory = queryParams.get('nameCategory');
    const nameChildCategory = queryParams.get('nameChildCategory');
    const [text, setText] = useState("");
    const debouncedValue = useDebounce(text, 300);
    const [listItem, setListItem] = useState([]);

    useEffect(() => {
        if (debouncedValue) {
            if (listItem.length <= 0) return;
            const filtered = listItem.filter((product) =>
            product.name.toLowerCase().includes(debouncedValue)
            );
            setListItem(filtered);
        }
    }, [debouncedValue]);

    useEffect(() => {
        if (nameCategory && !nameChildCategory) {
            const list = FAKE_DATA.filter((item) => item.category1 == nameCategory);
            if (list) {
                setListItem(list)
            }
        }
        if (nameChildCategory) {
            const list = FAKE_DATA.filter((item) => item.category2 == nameChildCategory);
            if (list) {
                setListItem(list)
            }
        }
    }, [nameCategory, nameChildCategory]);

    const handleChangeText = (value) => {
        const v = value.target.value;
        setText(v);
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
                            <h3 className="page-title">{formatString(nameCategory && ! nameChildCategory ? nameCategory: nameChildCategory)}</h3>
                            <ul className="page-breadcrumb">
                            <li><Link to={'/'}>Home</Link></li>
                                <li>{formatString(nameCategory && ! nameChildCategory ? nameCategory: nameChildCategory)}</li>
                            </ul>
                        </div>
                    </div>
                   {/*Page Banner End*/}
                    <div className="section section-padding">
                        <div className="container">
                            <div className="row mbn-40">
                                {/*Product Wrapper Start*/}
                                <div className="col-lg-9 col-12 order-lg-2 mb-40">
                                    {/*Shop Toolbar Start*/}

                                    <div className="shop-toolbar">
                                        {/*Product View Mode Start*/}
                                        <div className="product-view-mode">
                                            <button className="active" data-mode="grid"><i className="fa fa-th" /></button>
                                        </div>
                                        {/*Product View Mode End*/}
                                        {/*Product Showing Start*/}
                                        <div className="product-showing me-auto">
                                            <h4>{formatString(nameCategory && ! nameChildCategory ? nameCategory: nameChildCategory)}</h4>
                                        </div>
                                    </div>
                                    {/*Shop Toolbar End*/}
                                    <div className="shop-product-wrap row mbn-35">
                                        {
                                            listItem?.map((item) =>
                                                <Item
                                                    id={item.id}
                                                    name={item.name}
                                                thumbnail={item.thumbnail}
                                                    price={item.price}
                                                    property={item.property}
                                                />
                                            )
                                        }
                                    </div>
                                </div>
                                {/*Product Wrapper End*/}
                                {/*Sidebar Wrapper Start*/}
                                <div className="col-lg-3 col-12 order-lg-1 mb-40">
                                    <div className="row mbn-35">
                                        {/*Sidebar Start*/}
                                        <div className="col-12 mb-35">
                                            <div className="widget">
                                                <h3>LIST OF PRODUCTS</h3>  
                                            </div>
                                        </div>
                                        {/*Sidebar End*/}
                                        {/*Sidebar Start*/}
                                        <div className="col-12 mb-35">
                                            <div className="widget">
                                                <div className="widget-banner banner">
                                                    <a href="#"><img src="../assets/images/banner/5afec2662d910efd258b17c01b9a2e77.jpg" alt="" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Sidebar End*/}
                                        {/*Sidebar Start*/}
                                        <div className="col-12 mb-35">
                                            <div className="widget">
                                                <h4>Tags</h4>
                                                <div className="widget-tags">
                                                    {
                                                        TYPE_NAV[nameCategory]?.map((item) => (
                                                            <Link onClick={scrollToTop} to={`/list?nameCategory=${nameCategory}&nameChildCategory=${item.name}`}>{item.value}</Link>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        {/*Sidebar End*/}
                                    </div>
                                </div>
                                {/*Sidebar Wrapper End*/}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default ListItem;