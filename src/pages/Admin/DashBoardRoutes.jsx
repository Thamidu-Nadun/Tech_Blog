import React from 'react';
import {Route} from 'react-router-dom';

/**
 * Components
 */
import AdminDashboardLayout from '../../Layout/AdminDashboardLayout';
import DashboardPage from './Admin';
import ArticlesPage from './pages/Articles/Articles';
import PodcastsPage from './pages/Podcasts/Podcasts';
import WebStoriesPage from './pages/WebStories/WebStories';
import CategoryPage from './pages/Categories/Categories';
import CommentsPage from './pages/Comments/Comments';
import CategoryView from './pages/Categories/CategoryView';

const DashBoardRoutes = (
  <Route path="/dashboard" element={<AdminDashboardLayout />}>
    <Route index element={<DashboardPage />} />
    <Route path="articles" element={<ArticlesPage />} />
    <Route path="podcasts" element={<PodcastsPage />} />
    <Route path="stories" element={<WebStoriesPage />} />
    <Route path="categories">
      <Route index element={<CategoryPage />} />
      <Route path=":cat" element={<CategoryView />} />
    </Route>
    <Route path="comments" element={<CommentsPage />} />
  </Route>
);

export default DashBoardRoutes;
