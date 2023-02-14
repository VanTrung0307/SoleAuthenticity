import React from 'react';
import { useState } from 'react';
import List from './list';
import { stores } from './../../utils/data/stores';

const StoresContent = () => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);
  
  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>Shop's Tops <span>({stores.length})</span></h2>
        <button type="button" onClick={() => setOrderProductsOpen(!orderProductsOpen)} className="products-filter-btn"><i className="icon-filters"></i></button>
        <form className={`products-content__filter ${orderProductsOpen ? 'products-order-open' : ''}`}>
        </form>
      </div>

      <List />
    </section>
  );
};
  
export default StoresContent
  