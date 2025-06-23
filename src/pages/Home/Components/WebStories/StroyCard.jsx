import {BookOpenText, Eye} from 'lucide-react';
import React from 'react';
import './WebStories.css';

function StroyCard({
  story_title,
  story_thumbnail,
  story_views,
  story_pages,
  story_type,
}) {
  return (
    <div
      className={`aspect-[3/4] shine-effect rounded-2xl p-4 flex flex-col justify-between bg-cover bg-center border border-orange-400 hover:scale-105 transition-all duration-300 shadow shadow-orange-400`}
      style={{
        backgroundImage: `
            linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent, rgba(0, 0, 0, 0.8)),
            url(${story_thumbnail})`,
      }}
    >
      <div className="w-full flex justify-between items-center">
        <span className="px-2 py-1 bg-gradient-to-r from-orange-400 to-orange-300 font-bold rounded-xl text-sm">
          {story_type}
        </span>
        <span className="rounded-xl px-2 py-1 bg-gray-900/50 backdrop-blur-lg text-sm">
          {story_pages} Pages
        </span>
      </div>
      <div>
        <h3 className="text-white font-semibold text-lg w-50 truncate">
          {story_title}
        </h3>
        <div className="flex justify-between items-center w-full my-2">
          <div className="views text-xs flex gap-1">
            <Eye className="size-4" />{story_views}
          </div>
          <div className="type text-xs flex gap-1">
            <BookOpenText className="size-3" />Story
          </div>
        </div>
      </div>
    </div>
  );
}

export default StroyCard;
