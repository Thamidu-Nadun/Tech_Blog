import React from 'react'
import Section from '../Section/Section'
import StroyCard from './StroyCard';

function WebStories() {
    const webStories = [
    {
      id: 1,
      title: "JavaScript ES2024 Features",
      thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=300&h=400&fit=crop",
      views: "12.5K",
      pages: 8,
      type: "Tutorial"
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox",
      thumbnail: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=400&fit=crop",
      views: "8.2K",
      pages: 6,
      type: "Comparison"
    },
    {
      id: 3,
      title: "API Security Checklist",
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=400&fit=crop",
      views: "15.7K",
      pages: 10,
      type: "Guide"
    },
    {
      id: 4,
      title: "Docker in 60 Seconds",
      thumbnail: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=300&h=400&fit=crop",
      views: "9.8K",
      pages: 5,
      type: "Quick Tips"
    }
  ];
  return (
      <Section section_title="Web Stories">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 cursor-pointer">
              {webStories.map((story, _index) => {
                  return (
                      <StroyCard
                          key={story.id}
                          story_title={story.title}
                          story_thumbnail={story.thumbnail}
                          story_views={story.views}
                          story_pages={story.pages}
                          story_type={story.type}
                      />
                  )
        })}
          </div>
    </Section>
  )
}

export default WebStories