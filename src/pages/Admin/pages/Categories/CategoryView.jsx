import React from 'react';
import {useParams} from 'react-router-dom';

const CategoryView = () => {
  const {cat} = useParams ();
  return <div>CategoryView : {cat}</div>;
};

export default CategoryView;
