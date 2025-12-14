import React, {useState} from 'react';
import BreadCrumb from '../../../../Components/BreadCrumb/BreadCrumb';
import toast from 'react-hot-toast';
import {saveCategory} from './util';

const CategoryNew = () => {
  const [category, setCategory] = useState ({
    id: null,
    name: '',
    description: '',
    imageUrl: '',
  });
  const [img, setImg] = useState (category.imageUrl);
  const handleCreateCategory = () => {
    saveCategory (category).then (res => {
      if (res) {
        toast.success ('Category created successfully!');
        setCategory ({
          id: null,
          name: '',
          description: '',
          imageUrl: '',
        });
      } else {
        toast.error ('Failed to create category.');
      }
    });
  };

  return (
    <div className="min-h-screen w-full px-6 py-10 bg-linear-to-b from-gray-900 to-gray-800 text-white">
      <BreadCrumb
        prev_name="Categories"
        prev_link={'/dashboard/categories'}
        next_name={category.name}
        next_link=""
      />

      <div className="max-w-5xl mx-auto mt-10 bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 border border-gray-700">
        {/* Icon Section */}
        <div className="shrink-0 flex items-center justify-center">
          <img
            src={
              img || 'https://cdn-icons-png.flaticon.com/128/7183/7183999.png'
            }
            alt={category.name}
            className="w-28 h-28 object-contain grayscale hover:grayscale-0 transition duration-300 md:-translate-y-10"
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-4">
          <input
            placeholder="Category Name"
            className="text-3xl font-bold text-orange-400 focus:outline-none w-full bg-gray-800 p-4 rounded-lg"
            value={category.name}
            onChange={e => setCategory ({...category, name: e.target.value})}
          />
          <input
            placeholder="Category Description"
            className="text-gray-300 w-full bg-gray-800 p-4 rounded-lg focus:outline-none"
            value={category.description}
            onChange={e =>
              setCategory ({...category, description: e.target.value})}
          />
          <input
            placeholder="Image URL"
            className="text-gray-400 w-full bg-gray-800 p-4 rounded-lg focus:outline-none"
            type="text"
            value={category.imageUrl}
            onChange={e => {
              setCategory ({...category, imageUrl: e.target.value});
              setImg (e.target.value);
            }}
          />

          <div className="flex items-center justify-end space-x-4">
            <button
              onClick={handleCreateCategory}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNew;
