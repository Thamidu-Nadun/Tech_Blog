import React, {useEffect, useState} from 'react';
import Section from '../Section/Section';
import ArticleCard from '../../../../Components/ArticleCard/ArticleCard';
import {ChevronLeft, ChevronRight} from 'lucide-react';

function FeaturedArticles({autoScroll = false, autoScrollDuration = 3000}) {
  const [postIndex, setPostIndex] = useState (0);
  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI in Web Development',
      description: 'Exploring how artificial intelligence is revolutionizing the way we build and design websites.',
      date: '2025-06-10',
      readTime: '8 min read',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Building Scalable Microservices',
      description: 'Best practices and patterns for creating robust, maintainable microservice architectures.',
      date: '2025-06-08',
      readTime: '12 min read',
      category: 'Architecture',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'React Server Components Deep Dive',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '2025-06-06',
      readTime: '15 min read',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    },
  ];
  const prev = () => {
    if (postIndex > 0) {
      setPostIndex (postIndex - 1);
    } else {
      setPostIndex (featuredPosts.length - 1);
    }
    // console.log (postIndex);
  };
  const next = () => {
    if (postIndex < featuredPosts.length - 1) {
      setPostIndex (postIndex + 1);
    } else {
      setPostIndex (0);
    }
    // console.log (postIndex);
  };
  useEffect (
    () => {
      if (!autoScroll) return;
      const scrollI = setInterval (next, autoScrollDuration);
      return () => clearInterval (scrollI);
    },
    [next]
  );
  return (
    <Section
      section_title="Featured Articles"
      section_link="/articles"
      section_link_text="View All"
    >
      <div className="grid grid-cols-1 h-96 relative overflow-hidden">
        <div className="flex gap-3 w-full h-10 justify-end my-4">
          <ChevronLeft
            onClick={prev}
            size={34}
            className="bg-orange-400 p-1 rounded-lg hover:bg-orange-300 transition-colors duration-300 mb-8"
          />
          <ChevronRight
            onClick={next}
            size={34}
            className="bg-orange-400 p-1 rounded-lg hover:bg-orange-300 transition-colors duration-300 mb-8"
          />
        </div>
        <div
          className="flex w-full transition-transform duration-500 ease-in-out"
          style={{transform: `translateX(-${postIndex * 100}%)`}}
        >
          {featuredPosts.map ((post, index) => (
            <div key={index} className="min-w-full">
              <ArticleCard
                article_title={post.title}
                article_description={post.description}
                article_thumbnail={post.image}
                article_link={`/articles/${post.id}`}
                article_date={post.date}
                article_read_time={post.readTime}
                article_views="1K"
                article_category={post.category}
              />
            </div>
          ))}
        </div>

        <div className="indicators absolute bottom-0 w-full">
          <div className="indicator-item indicator-center flex items-center justify-center gap-2">
            {featuredPosts.map ((_, index) => (
              <div
                className={`rounded-full border border-orange-500 ${index == postIndex ? 'size-4 bg-orange-500' : 'size-2'}`}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FeaturedArticles;
