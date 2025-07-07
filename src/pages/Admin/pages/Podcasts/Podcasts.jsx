import React from 'react';
import {Link} from 'react-router-dom';
import {Plus, PlayCircle, MoreVertical} from 'lucide-react';

const podcasts = [
  {
    id: 1,
    title: 'The Future of Web Development',
    author: 'John Doe',
    date: '2025-07-15',
    duration: '45:30',
    status: 'Published',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 2,
    title: 'A Deep Dive into React Hooks',
    author: 'Jane Smith',
    date: '2025-07-16',
    duration: '60:15',
    status: 'Draft',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 3,
    title: 'Mastering CSS Grid Layout',
    author: 'Sam Wilson',
    date: '2025-07-17',
    duration: '35:00',
    status: 'Published',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: 4,
    title: 'The Art of UI/UX Design',
    author: 'Alice Johnson',
    date: '2025-07-18',
    duration: '55:45',
    status: 'Draft',
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=400&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
];

function Podcasts() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Podcasts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
      </div>
      <Link
        to="/dashboard/podcasts/new"
        className="fixed bottom-10 right-10 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 ease-in-out"
      >
        <Plus size={24} />
      </Link>
    </div>
  );
}

const PodcastCard = ({podcast}) => {
  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
      <div className="relative">
        <img src={podcast.imageUrl} alt={podcast.title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayCircle size={64} className="text-white" />
        </div>
        <span
          className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full ${podcast.status === 'Published' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'}`}>
          {podcast.status}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-orange-400 mb-1">{podcast.title}</h3>
        <p className="text-sm text-gray-400 mb-2">By {podcast.author}</p>
        <div className="mt-auto flex items-center justify-between text-gray-400 pt-4">
          <span className="text-xs">{podcast.date}</span>
          <div className="flex items-center gap-1 text-xs">
            <PlayCircle size={16} />
            <span>{podcast.duration}</span>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
            <Link to={`/dashboard/podcasts/edit/${podcast.id}`} className="text-blue-400 hover:text-blue-600">
                Edit
            </Link>
            <button className="text-red-400 hover:text-red-600">
                Delete
            </button>
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
