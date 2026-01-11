import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Plus, Tag, MoreVertical} from 'lucide-react';
import {deleteCategoryById, getCategories} from './util';
import toast from 'react-hot-toast';

function Categories () {
  const [categories, setCategories] = React.useState ([
    {
      id: 1,
      name: 'Technology',
      description: 'All about the latest in tech.',
      imageUrl: 'https://via.placeholder.com/100?text=Tech',
    },
  ]);

  useEffect (() => {
    getCategories ().then (res => {
      // console.log (res);
      setCategories (res.data);
    });
  }, []);
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">
        Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map (category => (
          <CategoryCard
            key={category.id}
            category={category}
            setCategories={setCategories}
          />
        ))}
      </div>
      <Link
        to="/dashboard/categories/new"
        className="fixed bottom-10 right-10 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 ease-in-out"
      >
        <Plus size={24} />
      </Link>
    </div>
  );
}

const CategoryCard = ({category, setCategories}) => {
  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center p-6">
      <img
        src={category.imageUrl}
        alt={category.name}
        className="w-24 h-24 mb-4"
      />
      <h3 className="text-lg font-bold text-orange-400 mb-2 text-center">
        {category.name}
      </h3>
      <p className="text-sm text-gray-400 text-center mb-4 line-clamp-3">
        {category.description}
      </p>
      <div className="flex justify-center gap-4 mt-auto">
        <Link
          to={`/dashboard/categories/edit/${category.id}`}
          className="text-blue-400 hover:text-blue-600"
        >
          Edit
        </Link>
        <button
          className="text-red-400 hover:text-red-600 hover:cursor-pointer"
          onClick={() => {
            deleteCategoryById (category.id).then (res => {
              if (res) {
                toast.success ('Category deleted successfully');
                setCategories (prev =>
                  prev.filter (cat => cat.id != category.id)
                );
              } else {
                toast.error ('Failed to delete category');
              }
            });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Categories;
