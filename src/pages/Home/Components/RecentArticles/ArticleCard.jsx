import React from 'react';

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
    <div className="flex flex-col relative border border-orange-400 rounded-2xl p-2 group">
      <div
        className="shine-effect img_banner flex justify-center h-84 bg-gradient-to-b from-black/80 via-transparent to-black/80 rounded-xl relative group-hover:scale-105 transition-all duration-300 ease-in-out bg-cover bg-center w-full"
        style={{
          backgroundImage: `
        url(${article_thumbnail})`,
        }}
      >
        <span className="article_date mt-2 shadow shadow-gray-800 bg-gradient-to-r from-gray-400 to-gray-600 text-white text-center h-fit px-2 py-0.5 rounded-xl">
          {article_date}
        </span>
        <div className="absolute bottom-2 px-4 article_interactions flex justify-between w-full">
          <span className="article_views bg-gradient-to-br from-orange-400 to-orange-500 px-2 py-0.5 text-white rounded-2xl">
            {article_views}
          </span>
          <span className="article_likes bg-gradient-to-br from-orange-400 to-orange-500 px-2 py-0.5 text-white rounded-2xl">
            {article_likes}
          </span>
        </div>
      </div>
      <div className="article_body px-0.5 py-1">
        <div className="article_details">
          <div className="article_category flex justify-end">
            <div className="article_category_btn bg-gradient-to-r from-orange-600 to-amber-500 text-black px-2 py-1 rounded text-xs font-semibold w-fit my-2">
              {article_category}
            </div>
          </div>
          <h2 className="article_title text-xl text-bold underline">
            {article_title}
          </h2>
          <p className="article_description text-sm text-gray-400 h-25 truncate w-full my-2">
            {article_description}
          </p>
        </div>
        <div className="article_info w-full flex justify-between">
          <span className="article_author">{article_author}</span>
          <span className="article_read_time">{article_read_time} min</span>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
