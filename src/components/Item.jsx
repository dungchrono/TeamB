import { Link } from "react-router-dom";
import { useMyContext } from "../hook/MyContext";

function Item(prop) {
  const { data, addItem } = useMyContext();
  
  const handlePickSearch = (form) => {
    console.log('====================================');
    console.log(form);
    console.log('====================================');
    addItem(form)
  }
  
    return ( 
        <div className="col-md-4 col-6 col-xxs-12 mb-35" key={prop.id}>
            <div className="product">
              {/*Image & Action Start*/}
              <div className="image-action">
                <Link className="image" to={`/item?id=${prop.id}&name=${prop.name}`}><img src={`../assets/images/products/${prop.thumbnail}`} alt="" /></Link>
                {/*Action Start*/}
                <div className="action">
                  <div className="action-btn action-quickview" onClick={()=>handlePickSearch(prop)}>COMPARE</div>
                </div>
                {/*Action End*/}
              </div>
              {/*Image & Action End*/}
              {/*Content Start*/}
              <div className="content">
                {/*Title & Price Start*/}
                <div className="title-price">
                  <h4 className="title"><Link to={`/item?id=${prop.id}&name=${prop.name}`}>{prop.name}</Link></h4>
                        <span className="price">{prop.price}</span>
                </div>
              </div>
              {/*Content End*/}
            </div>
          </div>
     );
}

export default Item;