import {Calendar, Eye, Timer, User} from 'lucide-react';
import React from 'react';
import TagButton from '../TagButton/TagButton';
import {Link} from 'react-router-dom';

function ArticleCard({
  article_title = 'Article Title',
  article_category = 'Category',
  article_category_link = '/articles/category',
  article_thumbnail = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
  article_link = '/articles/react',
  article_description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  article_date = '6/6/2025',
  article_read_time = '12 min',
  article_views = '1K',
}) {
  const formatter = new Intl.NumberFormat ('en', {notation: 'compact'});
  return (
    <div
      className="bg-linear-to-b from-black/80 via-transparent to-black/80 h-84 rounded-xl relative group bg-cover bg-center w-full"
      style={{
        backgroundImage: `
            linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent, rgba(0, 0, 0, 1)),
        url(${article_thumbnail})`,
      }}
    >
      <div className="absolute bottom-5 px-5 bg-linear-to-b from--transparent to-black/80 to-90% group-hover:to-60% transition-all duration-300">
        <TagButton
          tag_title={article_category}
          tag_link={article_category_link}
        />
        <Link
          to={article_link}
          className="w-200 h-10 truncate text-3xl group-hover:text-orange-300 transition-all duration-300"
        >
          {article_title}
        </Link>
        <p className="w-220 truncate">{article_description}</p>
        <div className="flex gap-4 my-4 opacity-75">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{article_date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye size={16} />
            <span>{formatter.format (Number (article_views))}</span>
          </div>
          <div className="flex items-center gap-2">
            <Timer size={16} />
            <span>{article_read_time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
