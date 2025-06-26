import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Article from './pages/Article/Article';
function App () {
  return (
    <div className="bg-gray-950">
      <Navbar />
      {/* <Home /> */}
      <Article />
      <Footer />
    </div>
  );
}

export default App;
