import React from "react";
import PodcastCard from "./PodcastCard";
import { ArrowBigRight, ChevronRight } from "lucide-react";

function Podcast() {
  const podcasts = [
    {
      podcast_title: "Tech Talks",
      podcast_owner: "John Doe",
      podcast_link: "https://example.com/podcast1",
      podcast_duration: "30 min",
    },
    {
      podcast_title: "Web Development 101",
      podcast_owner: "Jane Smith",
      podcast_link: "https://example.com/podcast2",
      podcast_duration: "45 min",
    },
    {
      podcast_title: "AI Innovations",
      podcast_owner: "Alice Johnson",
      podcast_link: "https://example.com/podcast3",
      podcast_duration: "50 min",
    },
    {
      podcast_title: "Cybersecurity Essentials",
      podcast_owner: "Bob Brown",
      podcast_link: "https://example.com/podcast4",
      podcast_duration: "40 min",
    },
    {
      podcast_title: "Frontend Frameworks",
      podcast_owner: "Charlie White",
      podcast_link: "https://example.com/podcast5",
      podcast_duration: "35 min",
    },
    {
      podcast_title: "Backend Development",
      podcast_owner: "Diana Green",
      podcast_link: "https://example.com/podcast6",
      podcast_duration: "60 min",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 mb-30">
      <h2 className="text-3xl my-5 font-bold">Latest Podcast</h2>
      <div className="podcast_gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2">
        {podcasts.map((podcast, _index) => {
          return (
            <PodcastCard
              podcast_title={podcast.podcast_title}
              podcast_owner={podcast.podcast_owner}
              podcast_link={podcast.podcast_link}
              podcast_duration={podcast.podcast_duration}
              key={_index}
            />
          );
        })}
      </div>
      <div className="my-5 ml-1">
        <a className="text-orange-400 font-bold flex gap-1 items-center cursor-pointer">
          View More <ChevronRight size={20} />
        </a>
      </div>
    </section>
  );
}

export default Podcast;
