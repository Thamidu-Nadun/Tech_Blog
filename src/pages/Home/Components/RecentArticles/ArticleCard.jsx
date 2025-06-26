import {Clock, User} from 'lucide-react';
import TagButton from '../../../../Components/TagButton/TagButton';

function ArticleCard({
  article_title = 'Introduction to AI',
  article_description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repellendus ratione nulla porro soluta, quam fuga recusandae omnis iure suscipit ut eius ex officiis laborum sint voluptatibus impedit atque rerum?',
  article_date = '21/08/2025',
  article_author = 'John Doe',
  article_read_time = '2 min',
  article_category = 'AI',
  article_views = '1K',
  article_likes = '2K',
  article_thumbnail = 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=250&fit=crop',
}) {
  return (
    <div className="flex flex-col relative border-2 border-orange-900/30 rounded-2xl p-2 hover:border-orange-500/50 transition-all duration-300 bg-black group">
      <div
        className="shine-effect img_banner flex justify-center h-70 bg-gradient-to-b from-black/80 via-transparent to-black/80 rounded-xl relative group-hover:scale-105 transition-all duration-300 ease-in-out bg-cover bg-center w-full"
        style={{
          backgroundImage: `
        url(${article_thumbnail})`,
        }}
      >
        <time className="article_date text-white text-center h-fit w-fit px-2 py-0.5 text-xs absolute top-0 border rounded-b-md bg-black">
          {article_date}
        </time>
        <div className="absolute bottom-2 px-4 article_interactions flex justify-between w-full">
          <div className="flex gap-1">
            <span className="w-fit rounded-md text-sm h-fit px-2 py-0.5 bg-gradient-to-r from-orange-600/20 to-amber-500/20 border border-orange-500/30 text-orange-400">
              {article_views}
            </span>
            <span className="w-fit rounded-md h-fit px-2 py-0.5 text-sm bg-gradient-to-r from-orange-600/20 to-amber-500/20 border border-orange-500/30 text-orange-400">
              {article_likes}
            </span>
          </div>
          <div className="article_category_btn bg-gradient-to-r from-orange-600 to-amber-500 text-black px-2 py-1 rounded text-xs font-semibold w-fit">
            {article_category}
          </div>
        </div>
      </div>
      <div className="article_body px-0.5 p-4">
        <div className="article_details border border-orange-900/20">
          <h2 className="article_title text-xl text-bold underline">
            {article_title}
          </h2>
          <p className="article_description text-sm text-gray-400 line-clamp-2 w-full mt-4 mb-15">
            {article_description}
          </p>

        </div>
        <div className="article_info w-full flex justify-between text-gray-400 text-xs">
          <span className="article_author flex gap-2">
            <User size={15} />{article_author}
          </span>
          <span className="article_read_time flex gap-2">
            <Clock size={15} />{article_read_time} min read
          </span>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
