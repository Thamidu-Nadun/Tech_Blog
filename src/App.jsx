import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer';
function App () {
  return (
    <div className="bg-gray-950">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
