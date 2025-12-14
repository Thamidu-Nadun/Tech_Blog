import React, {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import BreadCrumb from '../../../../Components/BreadCrumb/BreadCrumb';
import {getCategoryById, updateCategoryById} from './util';
import {getArticleByCategoryId} from '../Articles/util';
import toast from 'react-hot-toast';

const CategoryView = () => {
  const navigate = useNavigate ();
  const {cat_id} = useParams ();

  const [category, setCategory] = React.useState ({
    id: cat_id,
    name: 'Technology',
    description: 'All about the latest in tech.',
    imageUrl: 'https://via.placeholder.com/150?text=Tech',
  });
  const [articles, setArticles] = React.useState ([]);

  useEffect (
    () => {
      // get category details
      getCategoryById (cat_id).then (res => {
        if (res) {
          setCategory (res.data);
        } else {
          navigate ('/dashboard/categories');
        }
      });
      // get articles in this category
      getArticleByCategoryId (cat_id).then (res => {
        if (res) {
          setArticles (res.data);
        }
      });
    },
    [cat_id]
  );

  const handleUpdateCategory = () => {
    updateCategoryById (cat_id, category).then (res => {
      if (res) {
        toast.success ('Category updated successfully!');
      } else {
        toast.error ('Failed to update category.');
      }
    });
  };

  return (
    <div className="min-h-screen w-full px-6 py-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <BreadCrumb
        prev_name="Categories"
        prev_link={'/dashboard/categories'}
        next_name={category.name}
        next_link=""
      />

      <div className="max-w-5xl mx-auto mt-10 bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 border border-gray-700">
        {/* Icon Section */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-28 h-28 object-contain grayscale hover:grayscale-0 transition duration-300 md:-translate-y-10"
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-4">
          <input
            className="text-3xl font-bold text-orange-400 focus:outline-none w-full bg-gray-800 p-4 rounded-lg"
            value={category.name}
            onChange={e => setCategory ({...category, name: e.target.value})}
          />
          <input
            className="text-gray-300 w-full bg-gray-800 p-4 rounded-lg focus:outline-none"
            value={category.description}
            onChange={e =>
              setCategory ({...category, description: e.target.value})}
          />
          <input
            className="text-gray-400 w-full bg-gray-800 p-4 rounded-lg focus:outline-none"
            type="text"
            value={category.imageUrl}
            onChange={e =>
              setCategory ({...category, imageUrl: e.target.value})}
          />

          <div className="flex items-center justify-end space-x-4">
            <button
              onClick={handleUpdateCategory}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Save
            </button>
          </div>

          <div className="mt-4">
            <span className="inline-block bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
              20 Articles
            </span>
          </div>
        </div>
      </div>

      {/* Article List */}
      <div className="max-w-5xl mx-auto mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {articles.length === 0
          ? <p className="text-gray-400">No articles found in this category.</p>
          : articles.map (article => (
              <ArticleCard key={article.id} article={article} />
            ))}
      </div>
    </div>
  );
};

export default CategoryView;

const ArticleCard = ({article}) => (
  <div className="bg-gray-700 hover:bg-gray-600 transition rounded-lg p-4 shadow-sm border border-gray-600 hover:border-orange-400 cursor-pointer">
    <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
    <p className="text-sm text-gray-300">{article.description}</p>
  </div>
);
