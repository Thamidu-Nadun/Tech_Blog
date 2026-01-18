import {DotLottieReact} from '@lottiefiles/dotlottie-react';
import {useRef, useState} from 'react';
import {updateReaction} from './util';

const ReactionItem = ({file, label, count, articleId}) => {
  const reactionRef = useRef (null);
  const [reactCount, setReactCount] = useState (count || 0);

  const handlePlay = () => {
    if (reactionRef.current) {
      reactionRef.current.play ();
    }
  };
  const handleUpdate = () => {
    if (reactionRef.current) {
      setReactCount (prev => prev + 1);
      handlePlay ();
      updateReaction (articleId, label);
    }
  };
  return (
    <div
      className="m-2 cursor-pointer size-24 group flex flex-col items-center"
      onClick={handleUpdate}
      title={label}
    >
      <DotLottieReact
        src={file}
        autoplay={false}
        loop={false}
        dotLottieRefCallback={instance => {
          reactionRef.current = instance;
        }}
      />
      <div className="
      mt-4 text-lg font-medium text-gray-50
      group-hover:text-gray-100
      transition-colors duration-200 text-center w-12 h-8 flex items-center justify-center rounded-xl border border-gray-100
    ">
        {reactCount}
      </div>
    </div>
  );
};

export default ReactionItem;
