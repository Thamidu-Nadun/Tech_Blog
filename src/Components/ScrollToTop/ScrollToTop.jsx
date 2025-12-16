import {ArrowBigUpDash} from 'lucide-react';

const ScrollToTop = () => {
  return (
    <div
      onClick={() => window.scrollTo ({top: 0, behavior: 'smooth'})}
      className="fixed bottom-10 right-10 size-10 rounded-lg bg-amber-500 flex 
      items-center justify-center hover:cursor-pointer hover:scale-110 
      transition-transform duration-300 ease-in-out"
    >
      <ArrowBigUpDash size={24} color="white" />
    </div>
  );
};

export default ScrollToTop;
