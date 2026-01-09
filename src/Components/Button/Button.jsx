import React from "react";

function Button({ button_title, isBgTrue = true }) {
  return (
    <>
      <button
        className={`${isBgTrue ? "px-2 py-3 bg-linear-to-r from-orange-600 to-orange-400 hover:border hover:border-white" :
          "border border-orange-400 text-white"} mx-3 my-2 capitalize font-semibold px-3 py-2 md:px-8 md:py-4 rounded-xl
           transition-all duration-200 transform hover:scale-105 relative shine-effect`}
      >
        {button_title}
      </button>
    </>
  );
}

export default Button;
