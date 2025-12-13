import { Play } from "lucide-react";
import React from "react";

const PodcastCard = ({
  podcast_title,
  podcast_owner,
  podcast_link,
  podcast_duration,
}) => {
  return (
    <div className="bg-gray-700/20 w-full min-w-8 flex justify-between my-3 shadow border border-orange-600/50 p-2 transition-all duration-300 rounded-xl hover:shadow-orange-600/80">
      <img
        className="size-15 object-cover rounded-lg"
        src="https://d33wubrfki0l68.cloudfront.net/808ebe9935fcde9cdf609bafbf14a6ed8b44486d/dfb83/images/blog/podcast-recording.jpg"
        alt="Podcast Thumbnail"
      />
      <div>
        <h3 className="truncate w-25 text-lg">{podcast_title}</h3>
        <span className="text-xs">
          By <span className="text-orange-300">{podcast_owner}</span>
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <span className="podcast_time mx-2">{podcast_duration}</span>
        {/* <a
          href={podcast_link}
          className="p-1 rounded-full bg-orange-200 hover:scale-105 transition-all duration-300"
        >
          <Play
            className="rounded-full p-2 bg-orange-50 hover:bg-orange-100 shadow shadow-orange-600 text-orange-500"
            size={40}
          />
        </a> */}
        <a
          href={podcast_link}
          className="p-1 rounded-full hover:scale-105 transition-all duration-300"
        >
          <Play
            className="rounded-full p-2 shadow border border-orange-600 text-orange-500"
            size={40}
          />
        </a>
      </div>
    </div>
  );
};

export default PodcastCard;
