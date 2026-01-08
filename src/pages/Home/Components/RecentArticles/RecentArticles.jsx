import {useEffect, useState} from 'react';
import Section from '../Section/Section.jsx';
import ArticleCard from './ArticleCard.jsx';

function RecentArticles () {
  const [recentPosts, setRecentPosts] = useState ([]);

  const getPosts = async () => {
    const BASE_URL = import.meta.env.VITE_API_URL;
    try {
      const res = await fetch (`${BASE_URL}articles/latest?page=0&size=4`, {
        method: 'GET',
      });
      const data = await res.json();
      if (data) {
        setRecentPosts (data.data?.content);
      }
    } catch (error) {
      console.error ('Error fetching posts:', error);
    }
  };

  useEffect (() => {
    getPosts ();
  }, []);
  return (
    <Section section_title="Recent Articles">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {recentPosts && recentPosts.length > 0 ?
        recentPosts.map (post => (
          <ArticleCard
            key={post.id}
            article_title={post.title}
            article_description={post.description}
            article_thumbnail={post.image}
            article_link={`/article/${post.slug}`}
            article_date={post.publishedDate}
            article_read_time={post.readTime}
            article_views="1K"
            article_author={post.authorId?.name}
          />
        ))
          : (
            <div className='ml-4 mt-2'>No Articles Found</div>
          )}
      </div>
    </Section>
  );
}

export default RecentArticles;
