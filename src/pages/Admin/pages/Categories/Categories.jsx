import React from 'react';
import {Link} from 'react-router-dom';
import {Plus, Tag, MoreVertical} from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Web Development',
    description: 'Everything about building for the web.',
    icon: 'https://cdn-icons-png.flaticon.com/512/860/860302.png',
  },
  {
    id: 2,
    name: 'React',
    description: 'The library for web and native user interfaces.',
    icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
  },
  {
    id: 3,
    name: 'CSS',
    description: 'Styling the web with Cascading Style Sheets.',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
  },
  {
    id: 4,
    name: 'JavaScript',
    description: 'The language of the web.',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
  },
  {
    id: 5,
    name: 'UI/UX',
    description: 'Designing beautiful and intuitive user experiences.',
    icon: 'https://cdn-icons-png.flaticon.com/512/1260/1260218.png',
  },
  {
    id: 6,
    name: 'Node.js',
    description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png',
  },
];

function Categories() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
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

const CategoryCard = ({category}) => {
  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center p-6">
        <img src={category.icon} alt={category.name} className="w-24 h-24 mb-4" />
        <h3 className="text-lg font-bold text-orange-400 mb-2 text-center">{category.name}</h3>
        <p className="text-sm text-gray-400 text-center mb-4">{category.description}</p>
        <div className="flex justify-center gap-4 mt-auto">
            <Link to={`/dashboard/categories/edit/${category.id}`} className="text-blue-400 hover:text-blue-600">
                Edit
            </Link>
            <button className="text-red-400 hover:text-red-600">
                Delete
            </button>
        </div>
    </div>
  );
};

export default Categories;