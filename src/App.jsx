import React from 'react';
import {Route, Routes} from 'react-router-dom';
import NotFound from './pages/NotFound';
/**
 * Main Components
 */
import MainLayout from './Layout/MainLayout';
import Home from './pages/Home/Home';
import Article from './pages/Article/Article';

/**
 * Dashboard - Admin
*/
import DashBoardRoutes from './pages/Admin/DashBoardRoutes';
function App () {
  return (
    <div className="bg-gray-950 overflow-x-hidden">
      <Routes>
        {/* Main */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="article" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Dashboard - Admin */}
        {DashBoardRoutes}
      </Routes>
    </div>
  );
}

export default App;
