import {DotLottieReact} from '@lottiefiles/dotlottie-react';
import {useRef} from 'react';

const ReactionItem = ({file, label}) => {
  const reactionRef = useRef (null);

  const handlePlay = () => {
    if (reactionRef.current) {
      reactionRef.current.play ();
    }
  };
  return (
    <div
      className="m-2 cursor-pointer size-24 group flex flex-col items-center"
      onClick={handlePlay}
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
        0
      </div>
    </div>
  );
};

export default ReactionItem;
