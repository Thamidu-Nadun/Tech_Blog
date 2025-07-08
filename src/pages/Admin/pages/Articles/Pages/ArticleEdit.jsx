import React, {useState, useEffect} from 'react';
import BreadCrumb from '../../../../../Components/BreadCrumb/BreadCrumb';
import {Calendar, Heading, Image, User} from 'lucide-react';
import Preview from './Components/Preview';

const ArticleEdit = () => {
  const article = {
    title: 'My First Article',
    date: '2025-07-08',
    author: 'Nadun',
    image: 'https://via.placeholder.com/150',
    content: '## Markdown content here...',
  };

  const [formContent, setFormContent] = useState ({
    title: article.title || '',
    date: article.date || '',
    author: article.author || '',
    image: article.image || '',
    content: article.content || '',
  });

  const [isPreviewMode, setIsPreviewMode] = useState (false);

  const handleChange = (field, value) => {
    setFormContent (prev => ({
      ...prev,
      [field.toLowerCase ()]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault ();
    console.log ('Updated Article:', formContent);
  };

  return (
    <div className="w-full p-4">
      <BreadCrumb prev_name={'Articles'} prev_link={'/dashboard/articles'} />
      <div className="mt-15 ml-4 px-5">
        <h2 className="text-2xl">Edit Article</h2>
        <form onSubmit={handleSubmit}>
          <div className="w-sm md:w-md lg:w-lg flex flex-col gap-2">
            <InputGroup
              input_name="Title"
              input_type="text"
              Icon={Heading}
              value={formContent.title}
              onChange={handleChange}
            />
            <InputGroup
              input_name="Date"
              input_type="date"
              Icon={Calendar}
              value={formContent.date}
              onChange={handleChange}
            />
            <InputGroup
              input_name="Author"
              input_type="text"
              Icon={User}
              value={formContent.author}
              onChange={handleChange}
            />
            <InputGroup
              input_name="Image"
              input_type="url"
              Icon={Image}
              value={formContent.image}
              onChange={handleChange}
            />
          </div>

          <div className="editor w-full h-[80vh] p-2">
            <div className="btn-group my-4 w-full flex justify-end md:justify-start">
              <button
                type="button"
                className={`${!isPreviewMode ? 'bg-orange-400' : 'bg-amber-400/20'} border border-orange-400 px-2 py-1 rounded mx-2`}
                onClick={() => setIsPreviewMode (false)}
              >
                Edit
              </button>
              <button
                type="button"
                className={`${isPreviewMode ? 'bg-orange-400' : 'bg-orange-400/20'} border border-orange-400 px-2 py-1 rounded mx-2`}
                onClick={() => setIsPreviewMode (true)}
              >
                Preview
              </button>
            </div>

            {!isPreviewMode
              ? <div className="editor-edit h-full">
                  <textarea
                    value={formContent.content}
                    onChange={e =>
                      setFormContent (prev => ({
                        ...prev,
                        content: e.target.value,
                      }))}
                    name="editor"
                    id="editor"
                    className="w-full h-full resize-none p-2 bg-gray-700/20 outline-none border border-orange-400"
                  />
                </div>
              : <Preview content={formContent.content} />}
          </div>

          <div className="btn-group mt-25 flex gap-2 w-full justify-end md:justify-start">
            <button
              onClick={handleSubmit}
              type="submit"
              className="px-3 py-2 bg-orange-500 hover:bg-orange-500/80 text-white rounded"
            >
              Update Article
            </button>
            <button
              type="button"
              className="px-3 py-2 bg-red-500 hover:bg-red-500/80 text-white rounded"
              onClick={() => setFormContent (existingArticle || {})}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleEdit;

const InputGroup = ({
  input_name = 'title',
  input_type = 'text',
  Icon = Heading,
  value = '',
  onChange,
}) => (
  <div className="flex items-center text-orange-300 my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
    <Icon size={20} />
    <input
      className="w-full outline-none bg-transparent py-2.5 pl-2 border border-transparent focus:border-indigo-400 invalid:border-red-400 valid:border-green-400"
      type={input_type}
      placeholder={input_name}
      name={input_name.toLowerCase ()}
      value={value}
      onChange={e => onChange (input_name, e.target.value)}
      required
    />
  </div>
);
