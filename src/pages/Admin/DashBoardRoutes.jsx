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
import ArticleNew from './pages/Articles/Pages/ArticleNew';
import ArticleEdit from './pages/Articles/Pages/ArticleEdit';

const DashBoardRoutes = (
  <Route path="/dashboard" element={<AdminDashboardLayout />}>
    <Route index element={<DashboardPage />} />
    <Route path="articles">
      <Route index element={<ArticlesPage />} />
      <Route path="new" element={<ArticleNew />} />
      <Route path="edit/:id" element={<ArticleEdit />} />
    </Route>
    <Route path="podcasts" element={<PodcastsPage />} />
    <Route path="stories" element={<WebStoriesPage />} />
    <Route path="categories">
      <Route index element={<CategoryPage />} />
      <Route path="edit/:cat_id" element={<CategoryView />} />
    </Route>
    <Route path="comments" element={<CommentsPage />} />
  </Route>
);

export default DashBoardRoutes;
