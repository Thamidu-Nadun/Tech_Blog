import {Activity, Fragment, useEffect, useState} from 'react';
import renderer from '@thamidu-nadun/md_parser';
import './article.css';
import './theme.css';
import Prismjs from 'prismjs';

import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-javascript';

import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import {useParams} from 'react-router-dom';
import {getArticle} from './util';
import Loader from '../../Components/Loader/Loader';
import {Helmet} from 'react-helmet-async';

function Article () {
  const {slug} = useParams ();
  const [mainImage, setMainImage] = useState (null);
  const [content, setContent] = useState ('');
  const [error, setError] = useState (null);
  const [loading, setLoading] = useState (false);
  const [articleMeta, setArticleMeta] = useState ({
    title: '',
    description: '',
    coverImage: '',
    publishedDate: '',
    tags: [],
  });
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
            setArticleMeta ({
              title: article.data.title,
              description: article.data.description,
              coverImage: article.data.coverImage,
              publishedDate: article.data.publishedDate,
              tags: article.data.tags,
            });
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
      Prismjs.highlightAll ();
    },
    [content]
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 relative top-16 p-4 max-w-3xl mx-auto h-130">
        <Loader />
      </div>
    );
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
      <Helmet>
        <title key="article-title">
          {slug.replaceAll ('-', ' ')} - Techno
        </title>

        <meta name="description" content={articleMeta.description} />
        <meta property="og:title" content={articleMeta.title} />
        <meta property="og:description" content={articleMeta.description} />
        <meta property="og:image" content={articleMeta.coverImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location} />
        <meta
          property="article:published_time"
          content={articleMeta.publishedDate}
        />
        <link rel="canonical" href={window.location} />

        {articleMeta.tags.map (tag => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}
      </Helmet>
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
