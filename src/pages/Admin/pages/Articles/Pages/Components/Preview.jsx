import {useEffect} from 'react';
import Prism from 'prismjs';
import renderer from '@thamidu-nadun/md_parser';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-javascript';

import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import './article.css';

const Preview = ({content: markdownContent}) => {
  const {html, front_data} = renderer (markdownContent);
  useEffect (() => {
    Prism.highlightAll ();
  }, []);
  return (
    <div
      className="editor-preview overflow-y-auto scroll-smooth border border-orange-400 bg-gray-800/40 w-full h-full text-white px-5 py-2"
      dangerouslySetInnerHTML={{__html: html}}
    />
  );
};

export default Preview;
