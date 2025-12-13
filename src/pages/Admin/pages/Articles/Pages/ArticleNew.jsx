import React, {useRef, useState} from 'react';
import BreadCrumb from '../../../../../Components/BreadCrumb/BreadCrumb';
import {Calendar, Heading, Image, User, Rows2, Tags} from 'lucide-react';
import Preview from './Components/Preview';
import {saveArticle} from '../util';
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

          <div className="mt-20">
            <select
              name="isPublished"
              defaultValue={Publish.toString ()}
              onChange={e => setPublish (e.target.value === 'true')}
              className="mt-4 p-2 border border-amber-500/10 rounded bg-amber-500/5"
            >
              <option value="false">Save as Draft</option>
              <option value="true">Publish Now</option>
            </select>
          </div>

          <div className="mt-4">
            <select
              name="category"
              ref={categoryRef}
              className="mt-4 p-2 border border-amber-500/10 rounded bg-amber-500/5"
              defaultValue={''}
            >
              <option value="" disabled>Select Category</option>
              <option value="1">Technology</option>
              <option value="2">Health</option>
              <option value="3">Lifestyle</option>
              <option value="4">Education</option>
              <option value="5">Entertainment</option>
              <option value="6">Business</option>
              <option value="7">Travel</option>
              <option value="8">Food</option>
              <option value="9">Sports</option>
              <option value="10">Science</option>
            </select>
          </div>

          <div>
            <h4 className="mt-10 mb-2">Tags</h4>
            <InputGroup
              input_name="Tags"
              input_type="text"
              Icon={Image}
              value={formContent.tags}
              onChange={handleChange}
            />
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
