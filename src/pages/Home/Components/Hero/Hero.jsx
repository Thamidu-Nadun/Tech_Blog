import React from 'react';
import Button from '../../../../Components/Button/Button';
import TagButton from '../../../../Components/TagButton/TagButton';

function Hero () {
  return (
    <div className="h-dvh flex justify-center items-center">
      <div className="container flex flex-col text-center justify-center items-center text-white -translate-y-14">
        <TagButton tag_title="CTRL+Blog" isActive={true} />
        <h2 className="md:text-7xl text-3xl sm:text-5xl relative">
          &lt;nadun.
          <span className="font-noto-sans group cursor-pointer">
            開発者
            <span
              className="absolute top-4 right-12 opacity-0 font-sans rotate-12 md:text-lg text-sm bg-white px-2 py-0.5 text-black rounded-xl group-hover:opacity-100 group-hover:-top-8 group-hover:right-8 transition-all duration-300"
              aria-hidden="true"
            >
              Dev
            </span>
          </span>
          &gt;
        </h2>
        <p className="my-4 md:text-xl text-sm leading-5 mx-5 font-normal">
          Hi, I'm <span className="font-caveat">Thamidu Nadun</span>, a
          developer sharing insights about modern development , emerging
          technologies, and practical coding solutions, exploitations. Join me
          on this journey through the ever-evolving world of tech.
        </p>
        <div className="btn-group flex flex-col md:flex-row md: justify-center mx-10 md:mx-2">
          <Button button_title="read latest post!" />
          <Button button_title="subscribe" isBgTrue={false} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
