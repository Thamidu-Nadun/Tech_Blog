import { Link } from "react-router-dom";
import BreadCrumbs from "../../../../Components/BreadCrumb/BreadCrumb";
import { Pen, PenIcon, Plus, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { deleteArticleById, getArticles } from "./util";
import toast from "react-hot-toast";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res.data);
      console.log(articles);
    });
  }, []);

  const handle_delete = async (articleId) => {
    deleteArticleById(articleId).then((res) => {
      if (res.code === 200) {
        toast.success("Article deleted successfully");
        getArticles().then((res) => {
          setArticles(res.data);
        });
      } else {
        toast.error("Failed to delete article");
      }
    });
  };

  return (
    <div className="w-full p-4 sm:p-6 lg:p-8">
      <BreadCrumbs
        prev_name="Dashboard"
        prev_link="/dashboard"
        next_name="articles"
        next_link=""
      />
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center mt-6 gap-4 sm:gap-6 w-60 md:w-75">
          <div className="bg-gray-700 px-2 rounded-md">
            <select
              name="status"
              className="bg-gray-700 text-white px-4 py-2 rounded-md hover:cursor-pointer focus:outline-none"
            >
              <option value="all" defaultValue={"published"} hidden>
                Status
              </option>
              <option value="published">published</option>
              <option value="draft">draft</option>
              <option value="archived">archived</option>
            </select>
          </div>
          <div className="bg-gray-700 px-2 rounded-md">
            <select
              name="date"
              className="bg-gray-700 text-white px-4 py-2 rounded-md hover:cursor-pointer focus:outline-none"
            >
              <option value="all" defaultValue={"newest"} hidden>
                Date Range
              </option>
              <option value="newest">newest</option>
              <option value="oldest">oldest</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            id={article.id}
            article_title={article.title}
            article_description={article.description}
            article_author={article.authorId?.name || "Unknown"}
            image_url={article.coverImage}
            article_date={article.date}
            article_category={article.category?.name || "unknown"}
            isPublished={article.published}
            handle_delete={handle_delete}
          />
        ))}
      </div>
      <Link
        to="/dashboard/articles/new"
        className="fixed bottom-10 right-10 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 ease-in-out"
      >
        <Plus size={24} />
      </Link>
    </div>
  );
}

const ArticleCard = ({
  id,
  article_title,
  image_url,
  article_date,
  article_author,
  article_category,
  isPublished,
  handle_delete,
}) => (
  <div className="bg-gray-900 relative pb-10 rounded-2xl overflow-hidden shadow-xs shadow-gray-50/50 group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <div className="w-full py-3 sm:p-4 lg:p-6">
      <img
        src={image_url}
        alt={article_title}
        className="w-full h-48 object-cover"
      />
    </div>
    <div className="p-4 sm:p-6">
      <Link
        to={`/dashboard/categories/${article_category.toLowerCase()}`}
        className="mb-2 inline-block border border-orange-600 w-fit px-2 py-1 rounded-full text-xs text-orange-400 hover:bg-orange-600 hover:text-white transition-colors duration-300 ease-in-out"
      >
        {article_category}
      </Link>
      <div
        className="text-2xl font-bold text-gray-50 cursor-pointer mb-2 hover:underline
        line-clamp-2"
        title={article_title}
      >
        {article_title}
      </div>

      <div className="flex flex-col justify-center text-gray-300 mt-12 gap-1">
        <span className="text-xs">{article_date}</span>
        <span className="text-md">By {article_author}</span>
      </div>
    </div>
    <div className="flex items-center justify-between px-6 absolute bottom-4 w-full">
      <div>
        <span
          className={`${isPublished ? "bg-green-500/20 text-green-500" : "bg-amber-500/20 text-amber-500"} px-3 py-1 rounded-md text-xs sm:text-sm`}
        >
          {isPublished ? "Published" : "Draft"}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Link
          to={`/dashboard/articles/edit/${id}`}
          className="bg-amber-500/20 text-white p-3 transition-colors duration-300 rounded-xl flex items-center hover:bg-amber-500/30 hover:cursor-pointer"
        >
          <PenIcon size={16} className="inline-block" />
        </Link>
        <button
          onClick={() => handle_delete(id)}
          className="bg-red-500/20 text-white p-3 transition-colors duration-300 rounded-xl flex items-center hover:bg-red-500/30 hover:cursor-pointer"
        >
          <Trash size={16} className="inline-block" />
        </button>
      </div>
    </div>
  </div>
);
