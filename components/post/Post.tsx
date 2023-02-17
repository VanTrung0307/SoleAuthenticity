// import Link from "next/link";
// import dayjs from "dayjs";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";

interface PostProps {
  productId: number;
  date: Date;
  tag: string;
  category: string;
  elements: string;
  title: string;
  description: string;
  avatar: string;
}

export default function Post(props: PostProps) {
  let rid = props.productId.toString();
  // let slug = props.title?.toLowerCase().replaceAll(" ","-")
  // console.log(slug);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;



  return (
    <div className="product-item">
      <div
        className="product__image"
        style={{ borderRadius: "30px", width: "400px", height: "200px", margin: '0px 80px 100px 0px' }}
      >
        <Link href={`/product/${rid}`}>
          <a>
            <img
              style={{
                borderRadius: "30px 30px 0px 0px",
                width: "100%",
                height: "200px",
              }}
              src={props.avatar}
              alt="product"
            />

            {props.tag && (
              <span
                style={{
                  backgroundColor:
                    props.tag === "Guides"
                      ? "orange"
                      : props.tag === "Reviews"
                      ? "black"
                      : "",
                }}
                className="product__discount"
              >
                {props.tag}
              </span>
            )}
          </a>
        </Link>

        <Link href={`/product/${rid}`}>
          <div
            style={{
              backgroundColor: "black",
              borderRadius: "0px 0px 30px 30px",
              width: "100%",
              height: "130px",
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
                flexWrap: 'wrap'
              }}
            >
              {props.title}
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
                flexWrap: 'wrap'
              }}
            >
              {props.description}
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
