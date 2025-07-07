import {ChevronRight, Home} from 'lucide-react';
import React from 'react';
import {Link} from 'react-router-dom';

function BreadCrumb({prev_link, next_link, prev_name, next_name}) {
  return (
    <div className="inline-block">
      <div class="absolute flex flex-wrap justify-center items-center space-x-2 text-sm text-gray-100 font-medium">
        <Link to="/" aria-label="Home">
          <Home size={24} />
        </Link>
        <ChevronRight size={24} />
        <Link to={prev_link}>{prev_name}</Link>
        <ChevronRight size={24} />
        <Link to={next_link} className="text-orange-500">{next_name}</Link>
      </div>
    </div>
  );
}

export default BreadCrumb;
