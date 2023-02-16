import useSwr from 'swr';

import React from 'react';
import StoresLoading from './loading/index.js';
import BrandItem from './../../brand-item/index';
import { BrandTypeList } from 'types/index.js';

const BrandsContent = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr('/api/brands', fetcher);

  if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!data && 
        <StoresLoading />
      }

      {data &&
        <section className="products-list">
          {data.map((item: BrandTypeList)  => (
            <BrandItem
              id={item.id} 
              name={item.name}
              key={item.id}
              images={item.images}
            />
          ))}
        </section>
      }
    </>
  );
};
  
export default BrandsContent