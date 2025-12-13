import React from "react";
import { Link } from "react-router-dom";
import { Plus, PlayCircle, MoreVertical, MoreHorizontal } from "lucide-react";

const podcasts = [
  {
    id: 1,
    title: "The Future of Web Development",
    author: "John Doe",
    date: "2025-07-15",
    duration: "45:30",
    status: "Published",
    imageUrl:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=400&fit=crop",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 2,
    title: "A Deep Dive into React Hooks",
    author: "Jane Smith",
    date: "2025-07-16",
    duration: "60:15",
    status: "Draft",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=400&fit=crop",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 3,
    title: "Mastering CSS Grid Layout",
    author: "Sam Wilson",
    date: "2025-07-17",
    duration: "35:00",
    status: "Published",
    imageUrl:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=400&fit=crop",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 4,
    title: "The Art of UI/UX Design",
    author: "Alice Johnson",
    date: "2025-07-18",
    duration: "55:45",
    status: "Draft",
    imageUrl:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=400&fit=crop",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
];

function Podcasts() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">
        Podcasts
      </h1>
      <div>
        <PodcastCard podcast={podcasts} />
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

const PodcastCard = ({ podcast }) => {
  return (
    <div className="bg-slate-900 text-gray-400/20 rounded-2xl overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
      <table>
        <thead>
          <tr className="uppercase">
            <th className="w-25" />
            <th>title</th>
            <th>Published Date</th>
            <th>Duration</th>
            <th>status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {podcast.map((item) => {
            let date = new Date(item.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });

            return (
              <tr>
                <td className="flex justify-center w-25">
                  <img
                    className="size-20 rounded-xl hover:scale-105 transition duration-100 ease-in-out"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                </td>
                <td>{item.title}</td>
                <td>{date}</td>
                <td>{item.duration}</td>
                <td>{item.status}</td>
                <td>
                  <MoreHorizontal size={20} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Podcasts;
