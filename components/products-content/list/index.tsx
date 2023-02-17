// import useSwr from 'swr';
import { useEffect, useState } from 'react';

import ProductItem from '../../product-item';
import ProductsLoading from './loading';
import { ProductTypeList } from 'types';

const ProductsContent = () => {
  // const fetcher = (url: string) => fetch(url).then((res) => res.json());
  // const { data, error } = useSwr('/api/products', fetcher);
  const [data, setData] = useState<ProductTypeList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch('https://soleauthenticity.azurewebsites.net/api/products/cus/ver-pagination?page=1&pageSize=10');
      const dataRes = await res.json();

      setData(dataRes.data);
      console.log(dataRes.data);
      setLoading(false);
    }

    fetchData();
  }, [])

  // if (error) return <div>Failed to load users</div>;
  return (
    <>
      {loading && 
        <ProductsLoading />
      }

      {data &&
        <section className="products-list">
          {data.map((item)  => (
            <ProductItem 
              id={item.id} 
              name={item.name}
              price={item.price}
              color={item.color}
              // discount={item.discount}
              // currentPrice={item.currentPrice}
              key={item.id}
              imgPath={item.imgPath}
            />
          ))}
        </section>
      }
    </>
  );
};
  
export default ProductsContent