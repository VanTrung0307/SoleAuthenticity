import React from 'react';
import { useState } from 'react';
import List from './list';
import { brands } from './../../utils/data/brands';

const BrandsContent = () => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);
  
  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>Brand's Tops <span>({brands.length})</span></h2>
        <button type="button" onClick={() => setOrderProductsOpen(!orderProductsOpen)} className="products-filter-btn"><i className="icon-filters"></i></button>
        <form className={`products-content__filter ${orderProductsOpen ? 'products-order-open' : ''}`}>
        </form>
      </div>

      <List />
    </section>
  );
};
  
export default BrandsContent
  