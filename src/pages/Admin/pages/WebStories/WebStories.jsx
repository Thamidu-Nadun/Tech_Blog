import React from 'react';
import {Link} from 'react-router-dom';
import {Plus, MoreVertical} from 'lucide-react';

const webStories = [
  {
    id: 1,
    title: 'A Visual Guide to CSS Grid',
    author: 'John Doe',
    date: '2025-07-15',
    status: 'Published',
    coverImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'The Art of Storytelling in Design',
    author: 'Jane Smith',
    date: '2025-07-16',
    status: 'Draft',
    coverImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=600&fit=crop',
  },
  {
    id: 3,
    title: '10 Tips for Better Mobile Photos',
    author: 'Sam Wilson',
    date: '2025-07-17',
    status: 'Published',
    coverImage: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'A Journey Through Japan\'s Cherry Blossoms',
    author: 'Alice Johnson',
    date: '2025-07-18',
    status: 'Draft',
    coverImage: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=400&h=600&fit=crop',
  },
];

function WebStories() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Web Stories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
        {webStories.map((story) => (
          <WebStoryCard key={story.id} story={story} />
        ))}
      </div>
      <Link
        to="/dashboard/web-stories/new"
        className="fixed bottom-10 right-10 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 ease-in-out"
      >
        <Plus size={24} />
      </Link>
    </div>
  );
}

const WebStoryCard = ({story}) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out aspect-[9/16]">
      <img src={story.coverImage} alt={story.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-white font-bold text-lg">{story.title}</h3>
        <p className="text-gray-300 text-sm">{story.author}</p>
      </div>
      <div className="absolute top-2 right-2">
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full ${story.status === 'Published' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'}`}>
          {story.status}
        </span>
      </div>
      <div className="absolute top-12 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <Link to={`/dashboard/web-stories/edit/${story.id}`} className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
          <MoreVertical size={16}/>
        </Link>
      </div>
    </div>
  );
};

export default WebStories;