import React from "react";
import Button from "../../../../Components/Button/Button";

function Newsletter() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
      <div className="bg-animation p-0.5 rounded-2xl">
        <div className="flex flex-col items-center bg-black border-2 border-orange-900/30 rounded-2xl p-8 bg-gradient-to-r from-orange-900/10 to-amber-900/10">
          <h2 className="text-3xl font-bold my-2">Stay Connected</h2>
          <p className="text-md text-center my-4 leading-5 text-gray-300 px-10 w-sm sm:w-lg md:w-xl lg:w-2xl">
            Get the latest tech insights and tutorials delivered to your inbox.
            Join thousands of developers in our community.
          </p>
          <div className="input__group flex flex-col">
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-black border-2 w-full border-orange-600/30 placeholder-gray-500 focus:outline-none text-orange-300"
              />
              <button
                type="submit"
                className="relative shine-effect w-full p-2 bg-gradient-to-r from-orange-300 to-orange-500 rounded-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
