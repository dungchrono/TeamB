import { useMyContext } from "../hook/MyContext";
import { Link } from "react-router-dom";

function Compare() {
  const { data } = useMyContext();
  if (data.length <= 0) {
    return <h1 className="text-center">Empty !</h1>;
  }

  console.log('====================================');
  console.log(data[1]);
  console.log('====================================');
  return (
    <>
               <div className="section section-wide">
                <div className="container-fluid"></div>
        {/*Page Banner Start*/}
        <div className="page-banner">
            <div className="container">
                <h2 className="page-title">Compare</h2>
                <ul className="page-breadcrumb">
                <li><Link to={'/'}>Home</Link></li>
                    <li>Compare</li>
                </ul>
            </div>
        </div>

   <div className="section section-padding">
      <div className="container">
        <div className="row mbn-40">
          <div className="col-lg-12 col-12 order-lg-2 mb-40">
            <table>
              <tr>
                <th>Compare</th>
                <th>Product 1</th>
                <th>Product 2</th>
                {data[2] && <th>Product 3</th>}
              </tr>
              <tr>
                <td>
                  <b>Image</b>
                </td>
                <td>
                  <img
                    src={`../assets/images/products/${data[0]?.thumbnail}`}
                    alt=""
                    className="compare_image"
                  />
                </td>
                <td>
                  <img
                    src={`../assets/images/products/${data[1]?.thumbnail}`}
                    alt=""
                    className="compare_image"
                  />
                </td>
                {data[2] && (
                  <td>
                    <img
                      src={`../assets/images/products/${data[2]?.thumbnail}`}
                      alt=""
                      className="compare_image"
                    />
                  </td>
                )}
              </tr>
              <tr>
                <td>
                  <b>Name</b>
                </td>
                <td>
                  <b className="text-uppercase">{data[0]?.name}</b>
                </td>
                <td>
                  <b className="text-uppercase">{data[1]?.name}</b>
                </td>
                {data[2] && (
                  <td>
                    <b className="text-uppercase">{data[2]?.name}</b>
                  </td>
                )}
              </tr>
              <tr>
                <td>
                  <b>Price</b>
                </td>
                <td>{data[0]?.price}</td>
                <td>{data[1]?.price}</td>
                {data[2] && <td>{data[2]?.price}</td>}
              </tr>
              <tr>
                <td>
                  <b>Property</b>
                </td>
                <td>
                  {data[0]?.property &&
                    Object.entries(data[0]?.property)?.map(([key, value]) => (
                      <li key={key}>
                        <strong>{key}:</strong>{" "}
                        <span className="bg-warning">{value}</span>
                      </li>
                    ))}
                </td>
                <td>
                  {data[1]?.property &&
                    Object.entries(data[1]?.property)?.map(([key, value]) => (
                      <li key={key}>
                        <strong>{key}:</strong>{" "}
                        <span className="bg-warning">{value}</span>
                      </li>
                    ))}
                </td>
                {data[2] && (
                  <td>
                    {data[2]?.property &&
                      Object.entries(data[2]?.property)?.map(([key, value]) => (
                        <li key={key}>
                          <strong>{key}:</strong>{" "}
                          <span className="bg-warning">{value}</span>
                        </li>
                      ))}
                  </td>
                )}
              </tr>
              <tr>
                <td>
                  <b>Buy</b>
                </td>
                <td>
                  <Link
                    to={`/item?id=${data[0].id}&name=${data[0].name}`}
                    className="btn btn-warning"
                  >
                    Buy
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/item?id=${data[1].id}&name=${data[1].name}`}
                    className="btn btn-warning"
                  >
                    Buy
                  </Link>
                </td>
                {data[2] && (
                  <td>
                    <Link
                      to={`/item?id=${data[2].id}&name=${data[2].name}`}
                      className="btn btn-warning"
                    >
                      Buy
                    </Link>
                  </td>
                )}
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    
    </div>

    </>
  );
}

export default Compare;
