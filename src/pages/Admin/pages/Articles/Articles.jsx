import {Link} from 'react-router-dom';
import BreadCrumbs from '../../../../Components/BreadCrumb/BreadCrumb';
import {Plus} from 'lucide-react';

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
      title: 'Optimizing React Performance with Concurrent Features and Suspense with Data Fetching',
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
    <div className="w-full p-4 sm:p-6 lg:p-8">
      <BreadCrumbs
        prev_name="Dashboard"
        prev_link="/dashboard"
        next_name="articles"
        next_link=""
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {recentPosts.map ((article, index) => (
          <ArticleCard
            key={index}
            id={article.id}
            article_title={article.title}
            article_description={article.description}
            article_author={article.author}
            image_url={article.image}
            article_date={article.date}
            article_category={article.category}
          />
        ))}
      </div>
      <Link
        to="/dashboard/articles/new"
        className="fixed bottom-10 right-10 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 ease-in-out"
      >
        <Plus size={24} />
      </Link>
    </div>
  );
}

const ArticleCard = ({
  id,
  article_title,
  article_description,
  image_url,
  article_date,
  article_author,
  article_category,
}) => (
  <div className="bg-gray-800 pb-10 rounded-2xl overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <img
      src={image_url}
      alt={article_title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4 sm:p-6">
      <Link
        to={`/dashboard/categories/${article_category.toLowerCase ()}`}
        className="mb-2 inline-block border border-orange-600 w-fit px-2 py-1 rounded-full text-xs text-orange-400 hover:bg-orange-600 hover:text-white transition-colors duration-300 ease-in-out"
      >
        {article_category}
      </Link>
      <div
        className="text-2xl font-bold text-orange-400 cursor-pointer mb-2 hover:underline
        line-clamp-2"
        title={article_title}
      >
        {article_title}
      </div>
      <p className="text-gray-300 text-sm mb-4 h-12 overflow-hidden">
        {article_description}
      </p>
      <div className="flex justify-between items-center text-xs text-gray-400">
        <span>{article_date}</span>
        <span>By {article_author}</span>
      </div>
    </div>
    <div className="absolute bottom-4 right-4 flex flex-row gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <Link
        to={`/dashboard/articles/edit/${id}`}
        className="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600 transition-colors duration-300"
      >
        Edit
      </Link>
      <button className="border-1 border-rose-500 text-white px-3 py-1 rounded-md hover:cursor-pointer hover:bg-rose-500/30 transition-colors duration-300">
        Delete
      </button>
    </div>

  </div>
);
