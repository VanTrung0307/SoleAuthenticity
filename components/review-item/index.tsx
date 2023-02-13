import Link from "next/link";
import { some } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavProduct } from "store/reducers/user";
import { RootState } from "store";
import { ReviewTypeList } from "types";

const ReviewItem = ({
  id,
  images,
  title,
  description,
  types,
}: ReviewTypeList) => {
  const dispatch = useDispatch();
  const { favProducts } = useSelector((state: RootState) => state.user);

  const isFavourite = some(favProducts, (reviewId) => reviewId === id);

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id,
      })
    );
  };

  return (
    <div className="product-item">
      <div
        className="product__image"
        style={{ borderRadius: "30px", width: "100%", height: "200px" }}
      >
        <button
          type="button"
          onClick={toggleFav}
          className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
        >
          <i className="icon-heart"></i>
        </button>

        <Link href={`/product/${id}`}>
          <a>
            <img
              style={{
                borderRadius: "30px 30px 0px 0px",
                width: "100%",
                height: "200px",
              }}
              src={images ? images[0] : ""}
              alt="product"
            />

            {types && (
              <span
                style={{
                  backgroundColor:
                    types === "Guides"
                      ? "orange"
                      : types === "Reviews"
                      ? "black"
                      : "",
                }}
                className="product__discount"
              >
                {types}
              </span>
            )}
          </a>
        </Link>

        <Link href={`/product/${id}`}>
          <div
            style={{
              backgroundColor: "black",
              borderRadius: "0px 0px 30px 30px",
              width: "100%",
              height: "110px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
            }}
            className="product__description"
          >
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                paddingBottom: "20px",
                color: "white",
                fontFamily: "arial",
                textAlign: "left",
                paddingLeft: "10px",
                paddingTop: "10px",
              }}
            >
              {title}
            </h1>
            <h3
              style={{
                fontSize: "15px",
                fontFamily: "arial",
                color: "white",
                textAlign: "left",
                paddingLeft: "10px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {description}
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ReviewItem;
