import React, {useEffect, useState} from 'react';
import Section from '../Section/Section';
import ArticleCard from '../../../../Components/ArticleCard/ArticleCard';
import {ChevronLeft, ChevronRight} from 'lucide-react';

function FeaturedArticles({autoScroll = false, autoScrollDuration = 3000}) {
  const [postIndex, setPostIndex] = useState (0);
  const [featuredPosts, setFeaturedPosts] = useState ([
    {
      id: 1,
      title: 'Understanding React Hooks: A Comprehensive Guide',
      description: 'Dive deep into React Hooks and learn how to manage state and side effects in functional components.',
      coverImage: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80',
      date: '2023-08-15',
      readTime: '8 min read',
      category: 'React',
      views: '2000',
    },
  ]);

  const getArticles = async () => {
    try {
      const BASE_URL = import.meta.env.VITE_API_URL;
      const res = await fetch (
        `${BASE_URL}articles/popular?page=0&size=2`
      );
      const data = await res.json();
      setFeaturedPosts(data.data.content);
    } catch (error) {
      console.log (error);
    }
  };
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
  useEffect(() => {
    getArticles();
   }, []);
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
                article_thumbnail={post.coverImage}
                article_link={`/articles/${post.id}`}
                article_date={post.date}
                article_read_time={post.readTime}
                article_views={post.views}
                article_category={post.category?.name}
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
