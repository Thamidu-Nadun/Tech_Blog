import React from 'react';
import BreadCrumbs from '../../../../Components/BreadCrumb/BreadCrumb';
import {Link} from 'react-router-dom';

export default function Articles () {
  const recentPosts = [
    {
      id: 4,
      title: "TypeScript 5.0: What's New and Exciting",
      description: 'A comprehensive look at the latest features and improvements in TypeScript 5.0.',
      author: 'David Kim',
      date: '2025-06-12',
      readTime: 6,
      category: 'TypeScript',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=250&fit=crop',
    },
    {
      id: 5,
      title: 'Optimizing React Performance',
      description: 'Advanced techniques for making your React applications lightning fast.',
      author: 'Lisa Park',
      date: '2025-06-11',
      readTime: 10,
      category: 'Performance',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing',
      description: 'How edge computing is changing the landscape of web applications.',
      author: 'James Wilson',
      date: '2025-06-09',
      readTime: 7,
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop',
    },
    {
      id: 7,
      title: 'Building Scalable APIs with GraphQL',
      description: 'A guide to creating efficient and scalable APIs using GraphQL.',
      author: 'Emily Johnson',
      date: '2025-06-08',
      readTime: 8,
      category: 'APIs',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=250&fit=crop',
    },
  ];

  return (
    <div className="w-full">
      <BreadCrumbs
        prev_name="Dashboard"
        prev_link="/dashboard"
        next_name="articles"
        next_link=""
      />
      <br />
      <div className="article-table mt-10">
        {recentPosts.map ((article, index) => (
          <ArticleCard
            key={index}
            article_title={article.title}
            article_description={article.description}
            article_author={article.author}
            image_url={article.image}
            article_date={article.date}
            article_category={article.category}
          />
        ))}
      </div>
    </div>
  );
}

const ArticleCard = ({
  article_title,
  article_description,
  image_url,
  article_date,
  article_author,
  article_category,
}) => (
  <div className="w-full flex gap-2 my-4">
    <img src={image_url} alt={article_title} className="size-32 rounded-2xl" />
    <div className="article_info m-2 flex flex-col justify-between">
      <div>
        <h2 className="text-xl cursor-pointer text-orange-400">
          {article_title}
        </h2>
        <p className="text-gray-300 truncate w-80">
          {article_description}
        </p>
      </div>
      <Link
        to={`/dashboard/categories/${article_category.toLowerCase ()}`}
        className="mb-2 border border-orange-600 w-fit px-1 py-0.5 rounded text-xs"
      >
        {article_category}
      </Link>
      <div className="flex gap-x-4 mt-2">
        <p className="text-orange-400">{article_date}</p>
        <p className="bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent font-mono">
          By {article_author}
        </p>
      </div>
    </div>
  </div>
);
