import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Header from '../components/Header';
import RightAside from '../components/homelayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  useEffect(() => {
    const NewsDetails = data.find((news) => news.id == id);
    setNews(NewsDetails);
  }, [data, id]);
  
    return (
        <div>
           <header>
            <Header></Header>
           </header>
           <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
           <section className='col-span-9'>
            <h1 className='font-bold text-xl mb-5'>Dragon News</h1>
            <NewsDetailsCard news={news}></NewsDetailsCard>
           </section>
           <aside className='col-span-3'>
            <RightAside></RightAside>
           </aside>
           </main>
        </div>
    );
};

export default NewsDetails;