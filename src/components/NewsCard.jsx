import { CiBookmark } from "react-icons/ci";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
  } = news;

  // Format the date nicely
  const formattedDate = new Date(news.author.published_date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Generate stars dynamically based on rating
  const renderStars = (count) => {
    const stars = [];
    const totalStars = 5; // total possible stars
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= count ? "text-yellow-500" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="card bg-base-100 shadow-md border border-gray-300 rounded-xl overflow-hidden hover:shadow-sm transition">
      {/* Author Info */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-gray-800">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button className="btn btn-ghost btn-sm text-gray-500 hover:text-primary">
            <CiBookmark size={18} />
          </button>
          <button className="btn btn-ghost btn-sm text-gray-500 hover:text-primary">
            <FaShareAlt size={18} />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-3">
        <h3 className="text-lg font-bold text-gray-800 leading-snug">
          {title}
        </h3>
      </div>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl object-cover w-full h-60"
        />
      </figure>

      {/* Details */}
      <div className="px-4 py-3">
        <p className="text-sm text-gray-600 leading-relaxed">
          {details.slice(0, 350)}...
        </p>
        <Link to={`/news-details/${id}`} className="text-primary font-semibold hover:underline mt-1">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200">
        <div className="flex items-center gap-1">
          {renderStars(Math.round(rating.number))}
          <span className="font-medium text-gray-700 ml-2">{rating.number.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
