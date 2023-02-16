import React from 'react';
import Post from '../../components/post/Post';
import Newsletter from '../../components/previews-letter/Newsletter';
import ReadMore from '../../components/pagination-preview/Pagination';
import {posts as data} from '../../utils/data/post';
import dayjs from "dayjs";
import Header from 'components/header';

function Tag({posts }:tagPageProps ) {

    return (

        <>
            <Header/>

            <main className='container mx-auto flex flex-col p-3'>

                {
                    posts.map(
                        (item:itemProps) => {

                            let GetDate = dayjs(item.date).format("DD-MMM , YYYY")

                            return <Post key={item.id}
                                productId={item.id}
                                elements={GetDate}
                                title={item.title}
                                description={item.description}
                                avatar={item.avatar}
                            />
                        }
                    )
                }

                <ReadMore />

            </main>

            <Newsletter />
        </>
    );
}

interface tagPageProps {
  posts:{
      map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
      filter(arg0: (_: any, i: any) => boolean): unknown;
      date: string;
      title: string;
      description: string;
      avatar:string;
      tags:string[];
      author:string;
      category:string[];
      id:number;
  }
}


interface itemProps {
  date: string;
  title: string;
  description: string;
  avatar: string;
  tags: string[];
  author: string;
  category: string[];
  id: number;
}

export async function getStaticPaths() {
    
    const paths = data.map((item) => ({
        params: { tag: item.category[0].toLowerCase().replaceAll(" ", "-") },
      }))
    
      
    return {
      paths: paths,
      fallback: false,
    }
}
  
export async function getStaticProps(context: { params: { tag: string; }; }) {
  
    const { params: { tag } } = context
  
    const posts = data.filter((item) => item.category[0].toLowerCase().replaceAll(" ", "-") === tag)
    
    return {
      props: { posts ,tag},
    }
}
export default Tag;