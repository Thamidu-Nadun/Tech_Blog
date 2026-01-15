import {Activity, Fragment, useEffect, useState} from 'react';
import Loader from '../../Components/Loader/Loader';
import {getArticle, updateViews} from './util';
import renderer from '@thamidu-nadun/md_parser';
import {useParams} from 'react-router-dom';
import Prism from './PrismSetup';
import {loadTheme} from './config';
import './article.css';

function Article () {
  const {slug} = useParams ();
  const [mainImage, setMainImage] = useState (null);
  const [content, setContent] = useState ('');
  const [error, setError] = useState (null);
  const [loading, setLoading] = useState (false);

  useEffect (
    () => {
      let isMounted = true;
      setLoading (true);
      const fetchArticle = async () => {
        try {
          const article = await getArticle (slug);

          if (!article) throw new Error ('Failed to fetch article');

          if (article.code === 404) throw new Error ('Article not found');

          if (isMounted) {
            setMainImage (article.data.coverImage);
            updateViews (article.data.id);
            const renderedContent = renderer (article.data.body).html;
            setContent (renderedContent);
          }
        } catch (err) {
          if (isMounted) {
            setError (err.message);
          }
        } finally {
          if (isMounted) {
            setLoading (false);
          }
        }
      };

      fetchArticle ();

      return () => {
        isMounted = false;
      };
    },
    [slug]
  );

  useEffect (
    () => {
      let cancelled = false;

      (async () => {
        await loadTheme ('vira');
        if (!cancelled) {
          Prism.highlightAll ();
        }
      }) ();

      return () => {
        cancelled = true;
      };
    },
    [content]
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="mt-42 text-center h-96 flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold bg-linear-to-r from-amber-300 to-amber-500
          bg-clip-text text-transparent mb-4">
          Techno
        </h2>
        <div className="text-xl mt-1 bg-linear-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent font-bold">
          {error}
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="flex flex-col items-center gap-4 relative top-16 p-4 max-w-3xl mx-auto
      border-b border-amber-500/20">
        <img src={mainImage} alt="" className="rounded w-full" loading="lazy" />
        <div className="w-full px-2 md:px-1">
          <div
            className="article-body"
            dangerouslySetInnerHTML={{__html: content}}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Article;
