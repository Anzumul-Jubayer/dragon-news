import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from '../components/homelayout/NewsCard'
const CategoryNews = () => {
  const { id } = useParams();
  const news = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      return setCategoryNews(news);
    } else if (id == "1") {
      const filteredNews = news.filter(
        (el) => el.others.is_today_pick === true
      );
      return setCategoryNews(filteredNews);
    } else {
      const filteredNews = news.filter((el) => el.category_id == id);
      setCategoryNews(filteredNews);
      
    }
  }, [news, id]);
  return (
    <div>
      <h1 className='font-bold mb-5'>Total <span className="text-secondary">{categoryNews.length}</span> news found</h1>

      <div className='grid grid-cols-1 gap-5'>
        {
          categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;
