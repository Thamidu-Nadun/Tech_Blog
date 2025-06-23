import React from 'react';

function Section (props) {
  const section_title = props.section_title || 'Default Section Title';
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 my-30">
      <h2 className="text-3xl my-5 font-bold">{section_title}</h2>
      {props.children}
    </section>
  );
}

export default Section;
