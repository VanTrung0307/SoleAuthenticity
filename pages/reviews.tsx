import Post from "../components/post/Post";
import Newsletter from "../components/previews-letter/Newsletter";
import Pagination from "../components/pagination-preview/Pagination";
// import dayjs from "dayjs";
import Footer from "components/footer";
import Layout from "../layouts/Main";

import { useEffect, useState } from "react";

// sm: md: lg: xl: 2xl:
/*
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }

*/

interface previewPageProps {
  elements: string;
  // date: "2023-02-19",
  tag: string,
  title: string;
  description: string;
  avatar: string;
  author: string;
  category: "Review";
  productId: number;
}

export default function Previews() {
  const [data, setData] = useState<previewPageProps[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch('https://localhost:44310/api/reviews?page=1&pageSize=10');
        const data = await res.json();
        console.log(data.data);
        setData(data.data);
      }
      fetchData();
    }, [])
  return (
      <Layout>
        <div>
          <main className="container mx-auto flex flex-col p-3">
            <p className="text-4xl inline font-bold text-left ml-0  sm:ml-0 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-24  my-16 leading-[normal] text-[rgba(35,46,82,1)]">
              All previews
            </p>
  
            {data?.map((review) => {
              // let GetDate = dayjs(review.date).format("DD-MMM , YYYY");
  
              return (
                <Post
                  key={review.productId}
                  productId={review.productId}
                  tag='REVIEW'
                  category={review.category}
                  elements={review.elements}
                  title={review.title}
                  description={review.description}
                  avatar={review.avatar}
                />
              );
            })}
  
            <Pagination />
          </main>
  
          <Newsletter />
          <Footer />
        </div>
      </Layout>
  );
}
