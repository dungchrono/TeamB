import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useMyContext } from '../hook/MyContext';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export default function WrapperLayout({ children }) {
  const navigate = useNavigate();
  const { status, updateStatus, data, removeItem } = useMyContext();

  const handleCompare = () => {
    if (data.length < 2) return toast.error('Please choose a minimum of 2 products');
    updateStatus(false);
    navigate('/compare', { replace: true });
  }

  return (
      <div className="overflow-hidden">
          <Header/>
          {children}
      <Footer />
      {
        status && (
            <div className="filter-wrap">
            {
              data && data.length > 0 && data.map((item) => (
                <div className="item" key={item.id}>
                <img src={`../assets/images/products/${item.thumbnail}`} alt="" />
                  <div className="close" onClick={() => removeItem(item.id)}>X</div>
                  <h1 style={{ fontSize: '10px', textAlign: 'center' }}>{item.name}</h1>
              </div>
              ))
              }
            <div className="btn-item-wrap">
              <button className="btn-filter" onClick={handleCompare}>Compare</button>
            </div>
        </div>
        )
      }
      <div className="filter-flow" onClick={()=>updateStatus(!status)}>
           <i className="fa fa-th" style={{ color: 'white' }} />
        </div>
    </div>
  )
}
