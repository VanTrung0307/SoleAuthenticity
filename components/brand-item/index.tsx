import Link from "next/link";
import { some } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavProduct } from "store/reducers/user";
import { RootState } from "store";
import React from "react";
import { BrandTypeList } from "types";

const BrandItem = ({ id, name, images }: BrandTypeList) => {
  const dispatch = useDispatch();
  const { favProducts } = useSelector((state: RootState) => state.user);

  const isFavourite = some(favProducts, (brandId) => brandId === id);

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id,
      })
    );
  };

  return (
    <div className="brand-item">
      <div className="brand__image">
        <img
          className="brand_img"
          src={images ? images[0] : ""}
          alt="product"
        />
      </div>

      <div className="brand__name">{name}</div>
    </div>
  );
};

export default BrandItem;
