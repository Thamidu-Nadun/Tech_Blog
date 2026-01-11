import React, {useEffect, useRef, useState} from 'react';
import BreadCrumb from '../../../../../Components/BreadCrumb/BreadCrumb';
import {Calendar, Heading, Image, User, Rows2, Tags} from 'lucide-react';
import Preview from './Components/Preview';
import {getCategories, saveArticle} from '../util';
import toast from 'react-hot-toast';

const ArticleNew = () => {
  const [formContent, setFormContent] = useState ({
    title: '',
    date: '',
    description: '',
    author: 'Nadun',
    image: '',
    content: '',
    tags: '',
  });
  const [categories, setCategories] = useState ([
    {
      id: null,
      name: 'Default',
    },
  ]);

  const [isPreviewMode, setIsPreviewMode] = useState (false);
  const [Publish, setPublish] = useState (false);
  const categoryRef = useRef (null);

  const handleChange = (field, value) => {
    setFormContent (prev => ({
      ...prev,
      [field.toLowerCase ()]: value, // assuming field matches formContent keys
    }));
  };

  const handleSubmit = e => {
    e.preventDefault ();
    console.log ('Submitted Data:', formContent);
    console.log ('Publish Status:', Publish);
    console.log ('Selected Category ID:', categoryRef.current.value);
    saveArticle (
      formContent,
      Publish === true,
      Number (categoryRef.current.value)
    )
      .then (data => {
        toast.success ('Article saved successfully!');
        setFormContent ({
          title: '',
          date: '',
          description: '',
          author: 'Nadun',
          image: '',
          content: '',
          tags: '',
        });
      })
      .catch (error => {
        toast.error ('Error saving article.');
        console.error ('Error:', error);
      });
  };

  useEffect (() => {
    getCategories ().then (res => {
      setCategories (res.data);
    });
  }, []);

  return (
    <div className="w-full p-4">
      <BreadCrumb
        prev_name={'DashBoard'}
        prev_link={'/dashboard'}
        next_name={'Articles'}
        next_link={'/dashboard/articles'}
      />
      <div className="mt-15 ml-4 px-5">
        <h2 className="text-2xl">Create New Article</h2>
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
              input_name="Description"
              input_type="text"
              Icon={Rows2}
              value={formContent.description}
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

          <div className="mt-20 rounded-2xl border border-amber-500/15 bg-linear-to-br from-orange-500/15 to-amber-500/5 p-6 md:p-8">

            {/* Top Controls */}
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              {/* Publish Toggle */}
              <div>
                <label className="flex items-center gap-4 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={Publish}
                    onChange={() => setPublish (prev => !prev)}
                    aria-label="Toggle publish status"
                  />

                  <div className="relative h-7 w-12 rounded-full bg-amber-300/40 transition-colors duration-300 group-has-checked:bg-green-600">
                    <span className="absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-300 group-has-checked:translate-x-5" />
                  </div>

                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {Publish ? 'Published' : 'Draft'}
                    </span>
                    <span className="text-xs text-gray-500">
                      Control visibility
                    </span>
                  </div>
                </label>
              </div>

              {/* Category Select */}
              <div className="w-full md:w-64">
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Category
                </label>

                <div className="relative">
                  <select
                    name="category"
                    ref={categoryRef}
                    defaultValue=""
                    className="w-full appearance-none text-amber-900 text-md rounded-lg border border-amber-500/20 bg-gray-100 px-3 py-2 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30"
                  >
                    <option value="" disabled>Select Category</option>
                    {categories.map (category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>

                  {/* Custom Arrow */}
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-amber-600">
                    ▼
                  </span>
                </div>
              </div>
            </div>

            {/* Tags Section */}
            <div className="mt-10">
              <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Tags
              </h4>

              <InputGroup
                input_name="tags"
                input_type="text"
                Icon={Image}
                value={formContent.tags}
                onChange={handleChange}
                className="bg-amber-500/5"
              />

              <p className="mt-1 text-xs text-gray-500">
                Separate tags with commas (e.g. design, react, ui)
              </p>
            </div>
          </div>

          <div className="btn-group mt-25 flex gap-2 w-full justify-end md:justify-start">
            <button
              type="submit"
              className="px-3 py-2 bg-orange-500 hover:bg-orange-500/80 text-white rounded"
            >
              Publish Article
            </button>
            <button
              type="button"
              className="px-3 py-2 bg-red-500 hover:bg-red-500/80 text-white rounded"
              onClick={() =>
                setFormContent ({
                  title: '',
                  date: '',
                  author: 'Nadun',
                  image: '',
                  content: '',
                })}
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleNew;

const InputGroup = ({
  input_name = 'title',
  input_type = 'text',
  Icon = Heading,
  value = '',
  onChange,
}) => (
  <div className="flex w-fit sm:w-full items-center text-orange-300 my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
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
