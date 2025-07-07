import React from 'react';
import {Link} from 'react-router-dom';
import {Home} from 'lucide-react';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute bg-orange-500/30 rounded-full -left-20 -top-20 w-96 h-96 blur-3xl animate-pulse"></div>
        <div className="absolute bg-blue-500/30 rounded-full -right-20 -bottom-40 w-96 h-96 blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      <div className="text-center z-10">
        <h1 
          className="text-9xl font-black text-white animate-pulse"
          style={{ textShadow: '0 0 15px rgba(249, 115, 22, 0.5), 0 0 30px rgba(249, 115, 22, 0.3)' }}
        >
          404
        </h1>
        <p className="text-2xl md:text-3xl font-light mt-4">Lost in the Digital Cosmos</p>
        <p className="mt-4 text-lg text-gray-400">It seems you've ventured into uncharted territory. Let's get you back on track.</p>
        <Link 
          to="/"
          className="mt-8 inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-full hover:scale-105 transform transition-transform duration-300 ease-in-out shadow-lg shadow-orange-500/20"
        >
          <Home className="mr-2" />
          Return to Home Base
        </Link>
      </div>
    </div>
  );
}

export default NotFound;