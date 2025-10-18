import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

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
      console.log(filteredNews);
    }
  }, [news, id]);
  return (
    <div>
      <h1>Total{categoryNews.length} news found</h1>
    </div>
  );
};

export default CategoryNews;
