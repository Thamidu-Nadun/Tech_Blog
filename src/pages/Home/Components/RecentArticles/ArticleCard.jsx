import {Clock, Eye, Heart, ThumbsUp, User} from 'lucide-react';
import TagButton from '../../../../Components/TagButton/TagButton';
import {Link} from 'react-router-dom';
import {Activity} from 'react';

function ArticleCard({
  article_title = 'Introduction to AI',
  article_description = 'A brief overview of Artificial Intelligence and its applications in modern technology.',
  article_date = '21/08/2025',
  article_author = 'John Doe',
  article_read_time = '2 min',
  article_category = 'AI',
  article_link = '#',
  article_views = '1K',
  article_likes = '2K',
  article_thumbnail = 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=250&fit=crop',
}) {
  return (
    <div className="flex flex-col relative border-2 border-orange-900/30 rounded-2xl p-2 hover:border-orange-500/50 transition-all duration-300 bg-black group">
      <div
        className="shine-effect img_banner flex justify-center h-70 bg-linear-to-b from-black/80 via-transparent to-black/80 rounded-xl relative group-hover:scale-105 transition-all duration-300 ease-in-out bg-cover bg-center w-full"
        style={{
          backgroundImage: `
        url(${article_thumbnail})`,
        }}
      >
        <Activity mode={article_date ? 'visible' : 'hidden'}>
          <time className="article_date text-white text-center h-fit w-fit px-2 py-0.5 text-xs absolute top-0 border rounded-b-md bg-black">
            {article_date}
          </time>
        </Activity>
        <div className="absolute bottom-2 px-4 article_interactions flex justify-between w-full">
          <div className="flex gap-1">
            <span className="flex gap-2 w-fit items-center rounded-md text-sm h-fit px-2 py-0.5 bg-linear-to-r from-orange-600/20 to-amber-500/20 border border-orange-500/30 text-orange-400">
              <Eye size={15} />
              {article_views}
            </span>
            <span className="flex gap-2 items-center w-fit rounded-md h-fit px-2 py-0.5 text-sm bg-linear-to-r from-orange-600/20 to-amber-500/20 border border-orange-500/30 text-orange-400">
              <Heart size={15} />
              {article_likes}
            </span>
          </div>
          <div className="article_category_btn bg-linear-to-r from-orange-600 to-amber-500 text-black px-2 py-1 rounded text-xs font-semibold w-fit">
            {article_category}
          </div>
        </div>
      </div>
      <div className="article_body px-0.5 p-4">
        <div className="article_details border border-orange-900/20 mb-6 p-4 rounded-lg transition-all duration-300">
          <Link
            className="article_title text-xl text-bold underline line-clamp-2"
            to={article_link}
          >
            {article_title}
          </Link>
          <p className="article_description text-sm text-gray-400 line-clamp-2 w-full mt-4 mb-15">
            {article_description}
          </p>
        </div>
        <div className="article_info absolute bottom-0 mb-4 px-5 w-full flex justify-between text-gray-400 text-xs">
          <span className="article_author flex">
            <User size={15} />
            {article_author ? article_author : 'Anonymous'}
          </span>
          <span className="article_read_time flex gap-2 mr-4">
            <Clock size={15} />
            {article_read_time} min read
          </span>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
