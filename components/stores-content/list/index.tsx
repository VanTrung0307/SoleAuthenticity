import useSwr from 'swr';

import React from 'react';
import StoresLoading from './loading/index.js';
import StoreItem from './../../store-item/index';
import { StoreTypeList } from 'types/index.js';

const StoresContent = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr('/api/stores', fetcher);

  if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!data && 
        <StoresLoading />
      }

      {data &&
        <section className="products-list">
          {data.map((item: StoreTypeList)  => (
            <StoreItem 
              id={item.id} 
              name={item.name}
              address={item.address}
              key={item.id}
              images={item.images} 
            />
          ))}
        </section>
      }
    </>
  );
};
  
export default StoresContent