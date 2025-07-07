import React from 'react';
import {Route, Routes} from 'react-router-dom';
/**
 * Main Components
 */
import MainLayout from './Layout/MainLayout';
import Home from './pages/Home/Home';
import Article from './pages/Article/Article';

/**
 * Dashboard - Admin
*/
import AdminDashboardLayout from './Layout/AdminDashboardLayout';
import DashboardPage from './pages/Admin/Admin';
import ArticlesPage from './pages/Admin/pages/Articles/Articles';
import PodcastsPage from './pages/Admin/pages/Podcasts/Podcasts';
import WebStoriesPage from './pages/Admin/pages/WebStories/WebStories';
import CommentsPage from './pages/Admin/pages/Comments/Comments';

function App () {
  return (
    <div className="bg-gray-950">
      <Routes>
        {/* Main */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="article" element={<Article />} />
          <Route path="*" element={<h1>NotFound</h1>} />
        </Route>
        {/* Dashboard - Admin */}
        <Route path="/dashboard" element={<AdminDashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="podcasts" element={<PodcastsPage />} />
          <Route path="stories" element={<WebStoriesPage />} />
          <Route path="comments" element={<CommentsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
