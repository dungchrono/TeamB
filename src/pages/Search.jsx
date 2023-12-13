import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useLocation } from 'react-router-dom';
import { TYPE_NAV } from "../utils/constant";
import Item from "../components/Item";
import FAKE_DATA from "../data/data.json";
import useDebounce from "../hook/useDebounce";
import { Link } from "react-router-dom";
function Search() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const nameSearch = queryParams.get('search');

    const [listItem, setListItem] = useState([]);

    useEffect(() => {
        if (nameSearch) {
            const filter = handleSearch(nameSearch);
            if(filter) setListItem(filter)
        } else {
            setListItem([])
        }
    },[nameSearch])

    const handleSearch = (characters) => {
        // Replace FAKE_DATA with your actual data source
        const filteredItems = FAKE_DATA.filter((item) =>
          item.value.includes(characters)
        );
        return filteredItems;
      };


    return (
        <>
            <div className="section section-wide">
                <div className="container-fluid">
                    {/*Page Banner Start*/}
                    <div className="page-banner">
                        <div className="container">
                            <h2 className="page-title">Search</h2>
                            <ul className="page-breadcrumb">
                            <li><Link to={'/'}>Home</Link></li>
                                <li>Search</li>
                            </ul>
                        </div>
                    </div>

                    <div className="section section-padding">
                        <div className="container">
                            <div className="row mbn-40">
                                {/*Product Wrapper Start*/}
                                <div className="col-lg-9 col-12 order-lg-2 mb-40">

                                    <div className="shop-product-wrap row mbn-35">
                                        {
                                            listItem?.map((item) =>
                                                <Item
                                                    id={item.id}
                                                    name={item.name}
                                                thumbnail={item.thumbnail}
                                                price={item.price}
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

export default Search;