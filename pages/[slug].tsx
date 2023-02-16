// // import { useState, useEffect } from "react";

// // import Post from "../components/post/Post";
// // import BLOCKQUOTE from "../components/block-quotes/Blockquote";
// import PostHeader from "../components/post-header/PostHeader";
// import Image from "next/image";
// // import { posts as data } from "../utils/data/post";
// import dayjs from "dayjs";
// // import { useRouter } from "next/router";
// import { GetServerSideProps } from "next";

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   const productId = query.productId;
//   console.log("Product: " ,productId);
//   const res = await fetch(`https://localhost:44310/api/reviews/review/${productId}`);
//   const product = await res.json();

//   return {
//     props: {
//       product,
//     },
//   }
// }

// export default function ReadingPage({product}: Props) {
//   // const [data, setData] = useState<ReadingPageProps>({});
//   // const router = useRouter();
//   // const {productId} = router.query;
//   // useEffect(() => {
//   //   const fetchData = async () => { 
//   //       const res = await fetch(`https://localhost:44310/api/reviews/review/${productId}`);
//   //       const data = await res.json();
//   //       console.log(data.data);

//   //       setData(data.data);
//   //   }

//   //   fetchData();
//   // }, [])
//   return (
//     <>
//       <PostHeader
//         title={product.title}
//         date={dayjs(product.elements).format("DD MMMM , YYYY")}
//         authorName={product.authorName}
//       />

//       <div className="my-10 mx-auto" style={{ textAlign: "center" }}>
//         <Image
//           height="350"
//           width="700"
//           src={`${product.avatar}`}
//           alt={product.title}
//           className="mx-auto h-[72%] w-[1424px]"
//         />
//       </div>

//       <div className="my-12 prose prose-stone lg:prose-lg mx-auto">
//         <p className="mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
//           {product.description}
//         </p>
//         <p className="font-light text-gray-500 dark:text-gray-400">
//           {product.description}
//         </p>

//         {/* <p className="mb-3 font-light text-gray-500 dark:text-gray-400 ">
//           Design comps, layouts, wireframes—will your clients accept that you go
//           about things the facile way? Authorities in our business will tell in
//           no uncertain terms that Lorem Ipsum is that huge, huge no no to
//           forswear forever. Not so fast, I'd say, there are some redeeming
//           factors in favor of greeking text, as its use is merely the symptom of
//           a worse problem to take into consideration. The toppings you may chose
//           for that TV dinner pizza slice when you forgot to shop for foods, the
//           paint you may slap on your face to impress the new boss is your
//           business. But what about your daily bread?
//         </p> */}

//         <div className="py-3.5 text-left font-normal rounded-bl-[10px] rounded-br-[10px] bg-[rgba(235,242,254,1)] text-[rgba(35,46,82,1)]">
//           <img
//             height="324px"
//             width="1424px"
//             className="cover"
//             alt="Alt for images"
//             src="https://source.unsplash.com/random/100x100"
//           />
//           <p className="text-xs leading-normal text-center uppercase">
//             Image caption or credit
//           </p>
//         </div>

//         <p className="font-light text-gray-500 dark:text-gray-400">
//           {product.description}
//         </p>

//         {/* <BLOCKQUOTE /> */}

//         {/* <p className="font-light text-gray-500 dark:text-gray-400">
//           Design comps, layouts, wireframes—will your clients accept that you go
//           about things the facile way? Authorities in our business will tell in
//           no uncertain terms that Lorem Ipsum is that huge, huge no no to
//           forswear forever. The toppings you may chose for that TV dinner pizza
//           slice when you forgot to shop for foods, the paint you may slap on
//           your face to impress the new boss is your business. But what about
//           your daily bread? Not so fast, I'd say, there are some redeeming
//           factors in favor of greeking text, as its use is merely the symptom of
//           a worse problem to take into consideration. Not so fast, I'd say,
//           there are some redeeming factors in favor of greeking text, as its use
//           is merely the symptom of a worse problem to take into
//           consideration.esign comps, layouts, wireframes—will your clients
//           accept that you go about things the facile way? Authorities in our
//           business will tell in no uncertain terms that Lorem Ipsum is that
//           huge, huge no no to forswear forever.
//         </p> */}
//       </div>
//       <div className="container my-20 flex flex-col justify-center mx-auto">
//         <h2 className="text-3xl font-light  text-gray-500 dark:text-dark-400">
//           Other interesting previews
//         </h2>

//         {/* {data.map((item) => {
//           let GetDate = dayjs(item.elements).format("DD-MMM , YYYY");

//           return (
//             <Post
//               key={item.productId}
//               productId={item.productId}
//               elements={GetDate.toString()}
//               title={item.title}
//               description={item.description}
//               // avatar={item.avatar}
//             />
//           );
//         })} */}
//       </div>
//     </>
//   );
// }

// ReadingPage.defaultProps = {};

// interface ReadingPageProps {
//   elements: string;
//   title: string;
//   description: string;
//   avatar: string;
//   authorName: string;
//   category: "Review";
//   productId: number;
// }

// interface Props {
//   product: ReadingPageProps;
// }

