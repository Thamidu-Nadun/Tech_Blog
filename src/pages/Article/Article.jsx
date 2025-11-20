import {useEffect, useState} from 'react';
import renderer from '@thamidu-nadun/md_parser';
import './article.css';
import './theme.css';
import Prismjs from 'prismjs';

import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-javascript';

import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

function Article () {
  const [content, setContent] = useState ('');
  useEffect (() => {
    fetch ('/article.md')
      .then (res => res.text ())
      .then (data => data.replaceAll ('==', '<u>').replaceAll ('==!', '</u>'))
      .then (data => setContent (renderer (data).html));
  }, []);
  useEffect (
    () => {
      Prismjs.highlightAll ();
    },
    [content]
  );
  const main_image =
    'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=250&fit=crop';
  return (
    <div className="flex flex-col items-center gap-4 relative top-16 p-4 max-w-3xl mx-auto">
      <img src={main_image} alt="" className="rounded w-full" />
      <div
        className="prose prose-code:before:hidden prose-code:after:hidden max-w-none"
        dangerouslySetInnerHTML={{__html: content}}
      />
    </div>
  );
}

export default Article;
