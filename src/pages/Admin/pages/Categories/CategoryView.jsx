import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import BreadCrumb from '../../../../Components/BreadCrumb/BreadCrumb';

const CategoryView = () => {
  const navigate = useNavigate ();
  const {cat_id} = useParams ();

  const category = {
    id: cat_id,
    name: 'Node.js',
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png',
  };

  return (
    <div className="min-h-screen w-full px-6 py-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <BreadCrumb
        prev_name="Categories"
        prev_link={() => navigate (-1)}
        next_name={category.name}
        next_link=""
      />

      <div className="max-w-5xl mx-auto mt-10 bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 border border-gray-700">
        {/* Icon Section */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <img
            src={category.icon}
            alt={category.name}
            className="w-28 h-28 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-orange-400">
            {category.name}
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {category.description}
          </p>

          <div className="mt-4">
            <span className="inline-block bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
              20 Articles
            </span>
          </div>
        </div>
      </div>

      {/* Article List */}
      <div className="max-w-5xl mx-auto mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from ({length: 6}).map ((_, index) => (
          <ArticleCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default CategoryView;

const ArticleCard = () => (
  <div className="bg-gray-700 hover:bg-gray-600 transition rounded-lg p-4 shadow-sm border border-gray-600 hover:border-orange-400 cursor-pointer">
    <h3 className="text-lg font-semibold text-white mb-2">
      Introduction to Algorithms
    </h3>
    <p className="text-sm text-gray-300">
      An overview of common algorithm strategies and how to use them.
    </p>
  </div>
);
