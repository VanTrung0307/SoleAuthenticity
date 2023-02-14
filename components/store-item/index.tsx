import Link from "next/link";
import { some } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavProduct } from "store/reducers/user";
import { RootState } from "store";
import { StoreTypeList } from "types";

const StoreItem = ({id, name, address, images, link}: StoreTypeList) => {
  const dispatch = useDispatch();
  const { favProducts } = useSelector((state: RootState) => state.user);

  const isFavourite = some(favProducts, (storeId) => storeId === id);

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id,
      })
    );
  };

  return (
    <div
      className="product-item"
      style={{
        border: "1px solid black",
        borderRadius: "20px",
        height: "130px",
        cursor: "pointer",
      }}
    >
      <div
        className="product__image"
        style={{ width: "100px", height: "100px", borderRadius: "20px" }}
      >
        <Link href={link}>
          <a>
            <img
              style={{
                borderRadius: "20px",
                textAlign: "left",
                marginLeft: "15px",
                marginTop: "15px",
              }}
              src={images ? images[0] : ""}
              alt="product"
            />
          </a>
        </Link>
      </div>

      <Link href={link}>
        <div
          className="product__description"
          style={{
            marginTop: "-100px",
            marginLeft: "150px",
            cursor: "pointer",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>{name}</h3>
          <h3>
            <img
              src="/images/location.png"
              alt=""
              style={{ width: "30px", height: " 30px" }}
            />
            {address}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default StoreItem;
