import React from "react";
import { Link} from "react-router";

const NewsDetailsCard = ({news}) => {
  
  return (
    <div className="card bg-base-100 shadow-md border border-gray-300 rounded-xl overflow-hidden hover:shadow-sm transition">
      {/* Image */}
      <figure className="px-4 pt-3">
        <img
          src={news.thumbnail_url}
          alt={news.title}
          className="rounded-xl object-cover w-full h-full"
        />
      </figure>
      {/* Title */}
      <div className="px-4 pt-3">
        <h3 className="text-lg font-bold text-gray-800 leading-snug">
          {news.title}
        </h3>
      </div>

      {/* Details */}
      <div className="px-4 py-3 ">
        <p className="text-sm text-gray-600 leading-relaxed">{news.details}</p>
        <div className="my-6">
          <Link
            to={`/category-news/${news.category_id}`}
            className="bg-secondary text-white py-2 px-20 rounded-sm"
          >
            Back to category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
