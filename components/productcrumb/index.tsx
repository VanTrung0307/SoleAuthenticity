import { GetServerSideProps } from "next";
import React from "react";
import { ProductType } from "types";
import { server } from "utils/server";

type ProductCrumbType = {
  product: ProductType;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const res = await fetch(`${server}/api/product/${pid}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

const Productcrumb = ({ product }: ProductCrumbType) => {
  return (
    <section className="breadcrumb">
      <div className="container">
        <ul className="breadcrumb-list">
          <li>
            <a href="/">
              <i className="icon-home"></i>
            </a>
          </li>
          <li>
            <a href="/products">All Products</a>
          </li>
          <li>
            <a>{product.name}</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Productcrumb;
